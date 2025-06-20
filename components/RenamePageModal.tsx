
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface RenamePageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (newName: string) => void;
  currentPageName: string;
  existingPageNames: string[]; // Names of OTHER pages
}

const RenamePageModal: React.FC<RenamePageModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  currentPageName,
  existingPageNames,
}) => {
  const [newPageName, setNewPageName] = useState<string>(currentPageName);
  const [nameError, setNameError] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setNewPageName(currentPageName); // Reset to current page name on open
      setNameError(null);
      setTimeout(() => nameInputRef.current?.focus(), 0); // Autofocus
    }
  }, [isOpen, currentPageName]);

  const validateName = useCallback((name: string) => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setNameError('Name cannot be empty.');
      return false;
    }
    // Check against other existing page names (case-insensitive)
    if (existingPageNames.some(existingName => existingName.toLowerCase() === trimmedName.toLowerCase())) {
      setNameError('This name is already used by another page.');
      return false;
    }
    setNameError(null);
    return true;
  }, [existingPageNames]);

  useEffect(() => {
    // Validate on change, but only if the name is different from the original or not empty
    if (newPageName.trim() !== currentPageName.trim() || !newPageName.trim()) {
      validateName(newPageName);
    } else {
        setNameError(null); // If it's the original name, no error
    }
  }, [newPageName, currentPageName, validateName]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPageName(event.target.value);
  };

  const handleSubmit = () => {
    if (validateName(newPageName.trim())) {
      onConfirm(newPageName.trim());
    }
  };
  
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);
  
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="rename-page-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 md:p-8 transform transition-all">
        <h2 id="rename-page-modal-title" className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          Rename Page
        </h2>

        <div className="mb-5">
          <label htmlFor="newPageName" className="block text-sm font-medium text-slate-700 mb-1">
            New Page Name
          </label>
          <input
            type="text"
            id="newPageName"
            ref={nameInputRef}
            value={newPageName}
            onChange={handleNameChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm text-slate-900
                        bg-slate-50
                        focus:outline-none focus:ring-2 focus:ring-indigo-500
                        ${nameError ? 'border-red-500 ring-red-500' : 'border-slate-300'}`}
            placeholder="Enter new page name"
          />
          {nameError && <p className="text-xs text-red-600 mt-1.5">{nameError}</p>}
        </div>

        <div className="flex justify-end space-x-3 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!newPageName.trim() || !!nameError}
            className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenamePageModal;
