
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Page, ContextMenuData } from './types';
import PageTabsContainer from './components/PageTabsContainer';
import ContextMenu from './components/ContextMenu';
import AddPageModal from './components/AddPageModal';
import RenamePageModal from './components/RenamePageModal'; // Import RenamePageModal

const initialPages: Page[] = [
  { id: 'p1', name: 'Info', icon: 'info' },
  { id: 'p2', name: 'Details', icon: 'document' },
  { id: 'p3', name: 'Other', icon: 'document' },
  { id: 'p4', name: 'Ending', icon: 'check-circle' },
];

const App: React.FC = () => {
  const [pages, setPages] = useState<Page[]>(initialPages);
  const [activePageId, setActivePageId] = useState<string | null>(initialPages.length > 0 ? initialPages[0].id : null);
  const [contextMenuData, setContextMenuData] = useState<ContextMenuData | null>(null);
  
  // Add Page Modal State
  const [isAddPageModalOpen, setIsAddPageModalOpen] = useState<boolean>(false);
  const [addPageInsertAtIndex, setAddPageInsertAtIndex] = useState<number | null>(null);

  // Rename Page Modal State
  const [isRenameModalOpen, setIsRenameModalOpen] = useState<boolean>(false);
  const [pageIdToRename, setPageIdToRename] = useState<string | null>(null);
  const [originalPageNameToRename, setOriginalPageNameToRename] = useState<string | null>(null);


  const handleSetActivePage = useCallback((pageId: string) => {
    setActivePageId(pageId);
    setContextMenuData(null); 
  }, []);

  // Add Page Modal Handlers
  const openAddPageModal = useCallback((insertAtIndex: number) => {
    setAddPageInsertAtIndex(insertAtIndex);
    setIsAddPageModalOpen(true);
    setContextMenuData(null);
  }, []);

  const handleConfirmAddPage = useCallback((name: string, icon: Page['icon']) => {
    if (addPageInsertAtIndex === null) return;

    const newPageId = `p${Date.now()}`;
    const newPage: Page = { id: newPageId, name, icon };
    
    setPages(currentPages => {
      const newPages = [...currentPages];
      newPages.splice(addPageInsertAtIndex, 0, newPage);
      return newPages;
    });
    
    setActivePageId(newPageId);
    setIsAddPageModalOpen(false);
    setAddPageInsertAtIndex(null);
  }, [addPageInsertAtIndex]);

  const handleCancelAddPage = useCallback(() => {
    setIsAddPageModalOpen(false);
    setAddPageInsertAtIndex(null);
  }, []);

  // Rename Page Modal Handlers
  const openRenamePageModal = useCallback((pageId: string, currentName: string) => {
    setPageIdToRename(pageId);
    setOriginalPageNameToRename(currentName);
    setIsRenameModalOpen(true);
    setContextMenuData(null);
  }, []);

  const handleConfirmRenamePage = useCallback((newName: string) => {
    if (!pageIdToRename) return;
    setPages(prevPages => 
      prevPages.map(p => 
        p.id === pageIdToRename ? { ...p, name: newName.trim() } : p
      )
    );
    setIsRenameModalOpen(false);
    setPageIdToRename(null);
    setOriginalPageNameToRename(null);
  }, [pageIdToRename]);

  const handleCancelRenamePage = useCallback(() => {
    setIsRenameModalOpen(false);
    setPageIdToRename(null);
    setOriginalPageNameToRename(null);
  }, []);


  const handleReorderPages = useCallback((draggedId: string, targetId: string | null) => {
    setPages(currentPages => {
      const originalDraggedPageIndex = currentPages.findIndex(p => p.id === draggedId);
      if (originalDraggedPageIndex === -1) return currentPages; 

      const newPagesArray = [...currentPages];
      const [draggedPage] = newPagesArray.splice(originalDraggedPageIndex, 1); 

      if (targetId === null) { 
        newPagesArray.push(draggedPage);
      } else {
        const originalTargetPageIndex = currentPages.findIndex(p => p.id === targetId);
        if (originalTargetPageIndex === -1 || targetId === draggedId) { 
          newPagesArray.splice(originalDraggedPageIndex, 0, draggedPage); 
          return newPagesArray;
        }

        const finalTargetIndexInNewArray = newPagesArray.findIndex(p => p.id === targetId);

        if (finalTargetIndexInNewArray === -1) {
            newPagesArray.push(draggedPage);
            return newPagesArray;
        }
        
        if (originalDraggedPageIndex < originalTargetPageIndex) {
          newPagesArray.splice(finalTargetIndexInNewArray + 1, 0, draggedPage);
        } else { 
          newPagesArray.splice(finalTargetIndexInNewArray, 0, draggedPage);
        }
      }
      return newPagesArray;
    });
    setContextMenuData(null);
  }, []);
  
  const handleOpenContextMenu = useCallback((pageId: string, x: number, y: number) => {
    setContextMenuData({ pageId, x, y });
  }, []);

  const handleCloseContextMenu = useCallback(() => {
    setContextMenuData(null);
  }, []);

  const handleContextMenuAction = useCallback((action: string, pageId: string) => {
    console.log(`Action: ${action} on page ID: ${pageId}`);
    const pageToActOn = pages.find(p => p.id === pageId);
    if (!pageToActOn) return;

    if (action === 'delete') {
      setPages(prevPages => {
        const pageIndexToDelete = prevPages.findIndex(p => p.id === pageId);
        if (pageIndexToDelete === -1) return prevPages;

        const newPages = prevPages.filter(p => p.id !== pageId);
        
        if (activePageId === pageId) {
          if (newPages.length > 0) {
            const newActiveIndex = Math.max(0, pageIndexToDelete -1);
            setActivePageId(newPages[newActiveIndex]?.id || newPages[0]?.id || null);
          } else {
            setActivePageId(null);
          }
        }
        return newPages;
      });
    } else if (action === 'rename') {
      openRenamePageModal(pageId, pageToActOn.name); // Use the new modal
    } else if (action === 'duplicate') {
       setPages(prevPages => {
        const pageToDuplicate = prevPages.find(p => p.id === pageId);
        if (!pageToDuplicate) return prevPages;
        const duplicateIndex = prevPages.findIndex(p => p.id === pageId);
        
        const newPage: Page = { ...pageToDuplicate, id: `p${Date.now()}`, name: `${pageToDuplicate.name} (Copy)` };
        
        const newPagesList = [...prevPages];
        newPagesList.splice(duplicateIndex + 1, 0, newPage);
        return newPagesList;
      });
    } else if (action === 'setAsFirst') {
      setPages(prevPages => {
        const index = prevPages.findIndex(p => p.id === pageId);
        if (index === -1 || index === 0) return prevPages;

        const newPages = [...prevPages];
        const [item] = newPages.splice(index, 1);
        newPages.unshift(item);
        return newPages;
      });
    } else if (action === 'copy') {
      console.log('Copy page (action):', pageId);
    }
    handleCloseContextMenu();
  }, [activePageId, pages, handleCloseContextMenu, openRenamePageModal]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contextMenuData) {
        const contextMenuElement = document.getElementById('context-menu-container');
        if (contextMenuElement && !contextMenuElement.contains(event.target as Node)) {
          handleCloseContextMenu();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contextMenuData, handleCloseContextMenu]);


  const activePageDetails = pages.find(p => p.id === activePageId);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-8 bg-slate-200">
      <header className="w-full max-w-5xl mb-8 text-center">
        <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Page Navigator Pro</h1>
        <p className="text-slate-600 mt-2">Manage your application's pages with ease and style.</p>
      </header>

      <main className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden">
        <PageTabsContainer
          pages={pages}
          activePageId={activePageId}
          onAddPage={openAddPageModal}
          onReorderPages={handleReorderPages}
          onSetActivePage={handleSetActivePage}
          onOpenContextMenu={handleOpenContextMenu}
        />
        
        <div className="p-6 md:p-10 min-h-[300px] bg-white">
          {activePageDetails ? (
            <div>
              <h2 className="text-3xl font-semibold text-slate-700 mb-4">
                Content for: <span className="text-indigo-600">{activePageDetails.name}</span>
              </h2>
              <p className="text-slate-600">
                This is a placeholder for the content of the '{activePageDetails.name}' page. 
                In a real application, this area would display forms, data, or other interactive elements specific to this page.
              </p>
              <div className="mt-6 p-4 border border-indigo-100 rounded-lg bg-indigo-50">
                <p className="text-sm text-indigo-700">
                  <span className="font-semibold">Page ID:</span> {activePageDetails.id}
                </p>
                 <p className="text-sm text-indigo-700 mt-1">
                  <span className="font-semibold">Icon Type:</span> {activePageDetails.icon}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-500 min-h-[200px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4 opacity-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className="text-xl">No page selected</p>
              <p className="mt-1">Click on a page tab above or add a new page to get started.</p>
            </div>
          )}
        </div>
      </main>

      {contextMenuData && (
        <ContextMenu
          pageId={contextMenuData.pageId}
          x={contextMenuData.x}
          y={contextMenuData.y}
          onClose={handleCloseContextMenu}
          onAction={handleContextMenuAction}
        />
      )}

      {isAddPageModalOpen && (
        <AddPageModal
          isOpen={isAddPageModalOpen}
          onClose={handleCancelAddPage}
          onConfirm={handleConfirmAddPage}
          existingPageNames={pages.map(p => p.name)}
        />
      )}

      {isRenameModalOpen && pageIdToRename && originalPageNameToRename !== null && (
        <RenamePageModal
          isOpen={isRenameModalOpen}
          onClose={handleCancelRenamePage}
          onConfirm={handleConfirmRenamePage}
          currentPageName={originalPageNameToRename}
          existingPageNames={pages.filter(p => p.id !== pageIdToRename).map(p => p.name)}
        />
      )}

      <footer className="mt-12 text-center text-slate-500 text-sm">
        <p>Powered by React & Tailwind CSS. UI/UX Focus.</p>
      </footer>
    </div>
  );
};

export default App;
