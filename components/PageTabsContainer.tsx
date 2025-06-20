
import React, { useState, useCallback } from 'react';
import { Page } from '../types';

// --- Icon Components ---
export const PlusIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const EllipsisVerticalIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
  </svg>
);

export const InfoIcon: React.FC<{ className?: string; active?: boolean }> = ({ className = "w-4 h-4", active }) => (
  <svg className={`${className} ${active ? 'text-blue-500' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

export const DocumentIcon: React.FC<{ className?: string; active?: boolean }> = ({ className = "w-4 h-4", active }) => (
  <svg className={`${className} ${active ? 'text-orange-500' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7.414A2 2 0 0017.414 6L14 2.586A2 2 0 0012.586 2H4zm6 6a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-1 4a1 1 0 100 2h6a1 1 0 100-2H9z" />
  </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string; active?: boolean }> = ({ className = "w-4 h-4", active }) => (
  <svg className={`${className} ${active ? 'text-green-500' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export const UserIcon: React.FC<{ className?: string; active?: boolean }> = ({ className = "w-4 h-4", active }) => (
  <svg className={`${className} ${active ? 'text-purple-500' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

export const CogIcon: React.FC<{ className?: string; active?: boolean }> = ({ className = "w-4 h-4", active }) => (
  <svg className={`${className} ${active ? 'text-sky-500' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106A1.532 1.532 0 0111.49 3.17zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

export const HomeIcon: React.FC<{ className?: string; active?: boolean }> = ({ className = "w-4 h-4", active }) => (
  <svg className={`${className} ${active ? 'text-teal-500' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

export const ChartBarIcon: React.FC<{ className?: string; active?: boolean }> = ({ className = "w-4 h-4", active }) => (
  <svg className={`${className} ${active ? 'text-pink-500' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a1 1 0 001 1h12a1 1 0 100-2H5V3a1 1 0 00-2 0zm14.707 1.293a1 1 0 010 1.414L14.414 9H17a1 1 0 110 2h-2.586l-2.707 2.707a1 1 0 01-1.414-1.414L13.586 9H11a1 1 0 110-2h2.586l2.707-2.707a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export const CalendarIcon: React.FC<{ className?: string; active?: boolean }> = ({ className = "w-4 h-4", active }) => (
  <svg className={`${className} ${active ? 'text-amber-500' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);


// --- Component Props Interfaces ---
interface PageTabsContainerProps {
  pages: Page[];
  activePageId: string | null;
  onAddPage: (insertAtIndex: number) => void;
  onReorderPages: (draggedId: string, targetId: string | null) => void;
  onSetActivePage: (pageId: string) => void;
  onOpenContextMenu: (pageId: string, x: number, y: number) => void;
}

interface PageTabProps {
  page: Page;
  isActive: boolean; // This is for aria-selected, the "selected page"
  onSelect: () => void;
  onOpenContextMenu: (event: Pick<React.MouseEvent, 'clientX' | 'clientY' | 'preventDefault' | 'stopPropagation'>) => void; // Allow a simplified event for keyboard
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
  isDraggingOver: boolean;
}

// --- UI Components ---
const DottedLine: React.FC = () => (
  <div className="w-6 h-px border-t-2 border-dotted border-slate-400 flex-shrink-0" />
);

const SmallAddButton: React.FC<{ onAdd: () => void }> = ({ onAdd }) => {
  return (
    <button
      className={`group w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center flex-shrink-0 mx-1 
                 transition-all duration-150 ease-in-out 
                 hover:bg-slate-400 hover:scale-110 
                 active:bg-slate-500 active:scale-95
                 focus:outline-none focus:bg-slate-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-slate-50`}
      onClick={(e) => { e.stopPropagation(); onAdd(); }}
      title="Add new page here"
      aria-label="Add new page here"
    >
      <PlusIcon className="w-3.5 h-3.5 text-slate-700 transition-colors duration-150 group-focus:text-blue-500" />
    </button>
  );
};

const PageTab: React.FC<PageTabProps> = ({
  page, isActive, onSelect, onOpenContextMenu, 
  onDragStart, onDragOver, onDrop, onDragLeave, onDragEnd,
  isDraggingOver
}) => {
  const baseClasses = "flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer group relative min-w-[100px] max-w-[180px] flex-shrink-0";
  const transitionClasses = "transition-all duration-150 ease-in-out"; // General transition for PageTab itself
  const focusClasses = "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-50 focus:bg-white"; // For keyboard/click focus
  const activePressClasses = "active:scale-[0.98] active:brightness-95"; // For mouse/touch press moment

  const selectedTabSpecificClasses = `bg-white text-slate-800 shadow-md border-2 border-transparent`;
  const unselectedTabSpecificClasses = "bg-slate-200 text-slate-600 hover:bg-slate-300 border-2 border-transparent";
  
  const draggingOverClasses = "ring-2 ring-indigo-500 ring-offset-1"; 

  const getIcon = () => {
    switch (page.icon) {
      case 'info': return <InfoIcon active={isActive} />;
      case 'document': return <DocumentIcon active={isActive} />;
      case 'check-circle': return <CheckCircleIcon active={isActive} />;
      case 'user': return <UserIcon active={isActive} />;
      case 'cog': return <CogIcon active={isActive} />;
      case 'home': return <HomeIcon active={isActive} />;
      case 'chart-bar': return <ChartBarIcon active={isActive} />;
      case 'calendar': return <CalendarIcon active={isActive} />;
      default: return <DocumentIcon active={isActive} />; 
    }
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); 
      onSelect(); 
    }
  };

  const handleEllipsisButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!showEllipsisButton) return; 
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation(); 
      const buttonRect = event.currentTarget.getBoundingClientRect();
      onOpenContextMenu({ 
        clientX: buttonRect.left, 
        clientY: buttonRect.bottom + 5, 
        preventDefault: () => {}, 
        stopPropagation: () => {} 
      });
    }
  };

  const showEllipsisButton = isActive;
  
  const ellipsisWrapperBaseClasses = "flex items-center justify-center transition-all duration-150 ease-in-out";
  const ellipsisWrapperVisibleClasses = "ml-2 opacity-100 max-w-8"; 
  const ellipsisWrapperHiddenClasses = "ml-0 opacity-0 max-w-0";


  return (
    <div
      draggable 
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragEnd={onDragEnd}
      className={`${baseClasses} ${transitionClasses} ${focusClasses} ${activePressClasses} ${isActive ? selectedTabSpecificClasses : unselectedTabSpecificClasses} ${isDraggingOver ? draggingOverClasses : ''}`}
      onClick={onSelect} 
      onKeyDown={handleTabKeyDown}
      onContextMenu={(e) => { e.preventDefault(); onOpenContextMenu(e); }}
      title={page.name}
      role="tab" 
      aria-selected={isActive} 
      tabIndex={0} 
    >
      <div className="flex items-center overflow-hidden flex-grow"> 
        <span className="mr-2 flex-shrink-0">{getIcon()}</span>
        <span className="truncate text-sm font-medium">{page.name}</span>
      </div>
      <div 
        className={`${ellipsisWrapperBaseClasses} ${showEllipsisButton ? ellipsisWrapperVisibleClasses : ellipsisWrapperHiddenClasses}`}
        aria-hidden={!showEllipsisButton}
      >
        <button
          onClick={(e) => { 
            if (!showEllipsisButton) return;
            e.stopPropagation(); 
            onOpenContextMenu(e); 
          }}
          onKeyDown={handleEllipsisButtonKeyDown} 
          className={`p-0.5 rounded-full 
                      ${isActive ? 'text-slate-500 hover:bg-slate-200' : 'text-slate-400 hover:bg-slate-300'} 
                      focus:outline-none focus:ring-1 focus:ring-indigo-400`}
          aria-label={`Options for page ${page.name}`}
          tabIndex={showEllipsisButton ? 0 : -1} 
          style={{pointerEvents: showEllipsisButton ? 'auto' : 'none'}}
        >
          <EllipsisVerticalIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const LargeAddPageButton: React.FC<{ onAdd: () => void }> = ({ onAdd }) => (
  <button
    onClick={onAdd}
    className={`group flex items-center px-4 pt-2.5 pb-3 bg-white text-slate-700 rounded-lg shadow-sm border border-slate-300 
                transition-all duration-150 ease-in-out 
                hover:bg-slate-100 
                active:bg-slate-200 active:scale-[0.99] 
                focus:outline-none focus:bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-50`}
    title="Add a new page at the end"
    aria-label="Add a new page at the end"
  >
    <PlusIcon className="w-4 h-4 mr-2 text-slate-600 transition-colors duration-150 group-focus:text-blue-500" />
    <span className="text-sm font-medium">Add page</span>
  </button>
);

// --- Main Container Component ---
const PageTabsContainer: React.FC<PageTabsContainerProps> = ({
  pages, activePageId, onAddPage, onReorderPages, onSetActivePage, onOpenContextMenu,
}) => {
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null); 

  const handleDragStart = useCallback((event: React.DragEvent<HTMLDivElement>, pageId: string) => {
    event.dataTransfer.setData('text/plain', pageId);
    event.dataTransfer.effectAllowed = "move";
    setDraggedId(pageId);
    
    const originalElement = event.currentTarget;
    const ghost = originalElement.cloneNode(true) as HTMLElement;
    ghost.style.width = `${originalElement.offsetWidth}px`;
    ghost.style.height = `${originalElement.offsetHeight}px`; 
    ghost.classList.add('dragging-ghost');
        
    document.body.appendChild(ghost);
    event.dataTransfer.setDragImage(ghost, originalElement.offsetWidth / 2, originalElement.offsetHeight / 2);
    
    setTimeout(() => {
      if (document.body.contains(ghost)) {
        document.body.removeChild(ghost);
      }
    }, 0);
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>, pageId: string | null) => {
    event.preventDefault(); 
    event.dataTransfer.dropEffect = "move";
    if (pageId !== draggedId) { 
        setDragOverId(pageId);
    }
  }, [draggedId]);

  const handleDragLeave = useCallback(() => {
    setDragOverId(null); 
  }, []);
  
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>, targetPageId: string | null) => {
    event.preventDefault();
    const currentDraggedId = event.dataTransfer.getData('text/plain'); 
    if (currentDraggedId && currentDraggedId !== targetPageId) { 
      onReorderPages(currentDraggedId, targetPageId);
    }
    setDraggedId(null);
    setDragOverId(null);
  }, [onReorderPages]);

  const handleDragEnd = useCallback(() => {
    setDraggedId(null);
    setDragOverId(null);
  }, []);

  return (
    <div className="bg-slate-50 p-3 border-b border-slate-200 shadow-sm" role="tablist" aria-label="Page Navigation Tabs">
      <div className="flex items-center custom-scrollbar overflow-x-auto py-2 px-2">
        {pages.map((page, index) => (
          <React.Fragment key={page.id}>
            <PageTab
              page={page}
              isActive={page.id === activePageId}
              onSelect={() => onSetActivePage(page.id)}
              onOpenContextMenu={(e) => onOpenContextMenu(page.id, e.clientX, e.clientY)}
              onDragStart={(e) => handleDragStart(e, page.id)}
              onDragOver={(e) => handleDragOver(e, page.id)} 
              onDrop={(e) => handleDrop(e, page.id)}         
              onDragLeave={handleDragLeave}                   
              onDragEnd={handleDragEnd}                       
              isDraggingOver={dragOverId === page.id && draggedId !== page.id}
            />
            {index < pages.length - 1 && (
              <div className="flex items-center flex-shrink-0" aria-hidden="true">
                <DottedLine />
                <SmallAddButton onAdd={() => onAddPage(index + 1)} />
                <DottedLine />
              </div>
            )}
          </React.Fragment>
        ))}
        
        <div 
            onDragOver={(e) => {
                if (draggedId && (!pages.find(p => p.id === draggedId && pages.indexOf(p) === pages.length -1) || pages.length === 1)) { 
                    handleDragOver(e, null); 
                }
            }} 
            onDrop={(e) => handleDrop(e, null)} 
            onDragLeave={handleDragLeave}
            className={`flex-shrink-0 w-8 h-10 ml-1 transition-all ${dragOverId === null && draggedId ? 'bg-indigo-100 rounded' : ''}`}
            title={draggedId ? "Drop here to move to end" : ""}
        />

        <div className="ml-3 flex-shrink-0">
          <LargeAddPageButton onAdd={() => onAddPage(pages.length)} />
        </div>
      </div>
    </div>
  );
};

export default PageTabsContainer;
