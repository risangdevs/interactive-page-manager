import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Page } from '../types';
import {
  InfoIcon,
  DocumentIcon,
  CheckCircleIcon,
  UserIcon,
  CogIcon,
  HomeIcon,
  ChartBarIcon,
  CalendarIcon,
  PlusIcon
} from './PageTabsContainer'; // Import icons

type PageIconType = Page['icon'];

interface AddPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string, icon: PageIconType) => void;
  existingPageNames: string[];
}

const availableIcons: PageIconType[] = [
  'info', 'document', 'check-circle', 'user', 'cog', 'home', 'chart-bar', 'calendar'
];

const AddPageModal: React.FC<AddPageModalProps> = ({ isOpen, onClose, onConfirm, existingPageNames }) => {
  const [pageName, setPageName] = useState<string>('');
  const [selectedIcon, setSelectedIcon] = useState<PageIconType>('info');
  const [nameError, setNameError] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Reset form on open
      setPageName('');
      setSelectedIcon('info');
      setNameError(null);
      // Autofocus the name input
      setTimeout(() => nameInputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  const validateName = useCallback((name: string) => {
    if (!name.trim()) {
      setNameError('Name cannot be empty.');
      return false;
    }
    if (existingPageNames.some(existingName => existingName.toLowerCase() === name.trim().toLowerCase())) {
      setNameError('Page name already exists.');
      return false;
    }
    setNameError(null);
    return true;
  }, [existingPageNames]);

  useEffect(() => {
    if (pageName) { // Validate on change if not empty (initial state is empty)
        validateName(pageName);
    } else if (nameError && !pageName.trim()) { // Clear error if user deletes all text
        setNameError('Name cannot be empty.'); // Or set to null if preferred when empty
    }
  }, [pageName, validateName, nameError]);


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setPageName(newName);
    // Validation is handled by the useEffect on pageName change
  };

  const handleIconSelect = (icon: PageIconType) => {
    setSelectedIcon(icon);
  };

  const handleSubmit = () => {
    if (validateName(pageName.trim())) {
      onConfirm(pageName.trim(), selectedIcon);
    }
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);


  if (!isOpen) return null;

  const getIconComponent = (iconName: PageIconType, isActive: boolean, isSelected: boolean) => {
    const iconProps = { className: `w-7 h-7 ${isSelected ? '' : 'text-slate-600'}`, active: isActive };
    switch (iconName) {
      case 'info': return <InfoIcon {...iconProps} />;
      case 'document': return <DocumentIcon {...iconProps} />;
      case 'check-circle': return <CheckCircleIcon {...iconProps} />;
      case 'user': return <UserIcon {...iconProps} />;
      case 'cog': return <CogIcon {...iconProps} />;
      case 'home': return <HomeIcon {...iconProps} />;
      case 'chart-bar': return <ChartBarIcon {...iconProps} />;
      case 'calendar': return <CalendarIcon {...iconProps} />;
      default: return <DocumentIcon {...iconProps} />;
    }
  };

  return (
    <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="add-page-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 md:p-8 transform transition-all">
        <h2 id="add-page-modal-title" className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          Add New Page
        </h2>

        <div className="mb-5">
          <label htmlFor="pageName" className="block text-sm font-medium text-slate-700 mb-1">
            Page Name
          </label>
          <input
            type="text"
            id="pageName"
            ref={nameInputRef}
            value={pageName}
            onChange={handleNameChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm text-slate-900
                        focus:outline-none focus:ring-2 focus:ring-indigo-500
                        bg-slate-50
                        ${nameError ? 'border-red-500 ring-red-500' : 'border-slate-300'}`}
            placeholder="Enter page name (e.g., Summary)"
          />
          {nameError && <p className="text-xs text-red-600 mt-1.5">{nameError}</p>}
        </div>

        <div className="mb-6">
          <p className="block text-sm font-medium text-slate-700 mb-2">Select Icon</p>
          <div className="grid grid-cols-4 gap-3">
            {availableIcons.map(icon => (
              <button
                key={icon}
                onClick={() => handleIconSelect(icon)}
                title={`Select ${icon} icon`}
                className={`p-3 rounded-lg flex items-center justify-center transition-all duration-150 ease-in-out
                            border-2
                            ${selectedIcon === icon 
                                ? 'bg-indigo-100 border-indigo-500 ring-2 ring-indigo-500 ring-offset-1' 
                                : 'bg-slate-100 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50'
                            }
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1`}
              >
                {getIconComponent(icon, selectedIcon === icon, selectedIcon === icon)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-3">
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
            disabled={!pageName.trim() || !!nameError}
            className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm & Add Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPageModal;