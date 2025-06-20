
import React from 'react';

// Icon components (simplified versions inspired by Heroicons)
const FlagIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8.19702 10.4897C6.80363 10.1006 5.55415 9.80158 4.16666 10.377V14.1664C4.16666 14.4425 3.94280 14.6664 3.66666 14.6664C3.39051 14.6664 3.16666 14.4425 3.16666 14.1664V2.93248C3.16666 2.49723 3.41441 2.062 3.86162 1.88464C5.51915 1.22726 7.00994 1.58591 8.34893 1.95692C8.43675 1.98125 8.52380 2.00557 8.61016 2.0297C9.87557 2.38323 10.9934 2.69554 12.2095 2.40086C12.9245 2.22758 13.8333 2.69562 13.8333 3.59117V9.64105C13.8333 10.0763 13.5856 10.5115 13.1384 10.6889C11.3824 11.3853 9.80248 10.941 8.39759 10.5459C8.33033 10.527 8.26347 10.5082 8.19702 10.4897Z" fill="#2F72E2"/>
  </svg>
);

const PencilSquareIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M9.01334 14.1667H14.6667M2.33334 11.6213V14.1667H4.87873C5.05473 14.1667 5.22351 14.0968 5.34796 13.9723L14.4723 4.84795C14.7315 4.5888 14.7315 4.16864 14.4723 3.90949L12.5905 2.02769C12.3314 1.76855 11.9112 1.76855 11.6521 2.02769L2.5277 11.1521C2.40326 11.2765 2.33334 11.4453 2.33334 11.6213Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClipboardIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
 <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
  <path d="M10.6667 3.16667H12.6667C13.0348 3.16667 13.3333 3.46514 13.3333 3.83333V13.5C13.3333 13.8682 13.0348 14.1667 12.6667 14.1667H4.33332C3.96513 14.1667 3.66666 13.8682 3.66666 13.5V3.83333C3.66666 3.46514 3.96513 3.16667 4.33332 3.16667H6.33332M6.99999 4.83333H9.99999C10.3682 4.83333 10.6667 4.53486 10.6667 4.16667V2.5C10.6667 2.13181 10.3682 1.83333 9.99999 1.83333H6.99999C6.6318 1.83333 6.33332 2.13181 6.33332 2.5V4.16667C6.33332 4.53486 6.6318 4.83333 6.99999 4.83333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
</svg>
);

const DocumentDuplicateIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5.66667 5.16667V3.16667C5.66667 2.79848 5.96514 2.5 6.33333 2.5H13.3333C13.7015 2.5 14 2.79848 14 3.16667V10.1733C14 10.5415 13.7015 10.84 13.3333 10.84H11.3333M3 5.83333V12.8333C3 13.2015 3.29848 13.5 3.66667 13.5H10.6667C11.0349 13.5 11.3333 13.2015 11.3333 12.8333V5.83333C11.3333 5.46514 11.0349 5.16667 10.6667 5.16667H3.66667C3.29848 5.16667 3 5.46514 3 5.83333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrashIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4.2931 14.0429L3.54466 14.0912L4.2931 14.0429ZM12.7069 14.0429L13.4554 14.0912V14.0912L12.7069 14.0429ZM2.33334 3.58334C1.91913 3.58334 1.58334 3.91912 1.58334 4.33334C1.58334 4.74755 1.91913 5.08334 2.33334 5.08334V3.58334ZM14.6667 5.08334C15.0809 5.08334 15.4167 4.74755 15.4167 4.33334C15.4167 3.91912 15.0809 3.58334 14.6667 3.58334V5.08334ZM7.75001 7.66667C7.75001 7.25246 7.41422 6.91667 7.00001 6.91667C6.5858 6.91667 6.25001 7.25246 6.25001 7.66667H7.75001ZM6.25001 11.3333C6.25001 11.7476 6.5858 12.0833 7.00001 12.0833C7.41422 12.0833 7.75001 11.7476 7.75001 11.3333H6.25001ZM10.75 7.66667C10.75 7.25246 10.4142 6.91667 10 6.91667C9.5858 6.91667 9.25001 7.25246 9.25001 7.66667H10.75ZM9.25001 11.3333C9.25001 11.7476 9.5858 12.0833 10 12.0833C10.4142 12.0833 10.75 11.7476 10.75 11.3333H9.25001ZM10.3564 4.52028C10.4596 4.92142 10.8685 5.16291 11.2696 5.05966C11.6708 4.95642 11.9123 4.54753 11.809 4.14639L10.3564 4.52028ZM3.66668 4.33334L2.91823 4.38162L3.54466 14.0912L4.2931 14.0429L5.04155 13.9946L4.41512 4.28505L3.66668 4.33334ZM4.95839 14.6667V15.4167H12.0416V14.6667V13.9167H4.95839V14.6667ZM12.7069 14.0429L13.4554 14.0912L14.0818 4.38162L13.3333 4.33334L12.5849 4.28505L11.9585 13.9946L12.7069 14.0429ZM13.3333 4.33334V3.58334H3.66668V4.33334V5.08334H13.3333V4.33334ZM2.33334 4.33334V5.08334H3.66668V4.33334V3.58334H2.33334V4.33334ZM13.3333 4.33334V5.08334H14.6667V4.33334V3.58334H13.3333V4.33334ZM12.0416 14.6667V15.4167C12.7886 15.4167 13.4073 14.8367 13.4554 14.0912L12.7069 14.0429L11.9585 13.9946C11.9613 13.9508 11.9977 13.9167 12.0416 13.9167V14.6667ZM4.2931 14.0429L3.54466 14.0912C3.59275 14.8367 4.21139 15.4167 4.95839 15.4167V14.6667V13.9167C5.00233 13.9167 5.03872 13.9508 5.04155 13.9946L4.2931 14.0429ZM7.00001 7.66667H6.25001V11.3333H7.00001H7.75001V7.66667H7.00001ZM10 7.66667H9.25001V11.3333H10H10.75V7.66667H10ZM8.50002 2.33334V3.08334C9.39209 3.08334 10.1435 3.69345 10.3564 4.52028L11.0827 4.33334L11.809 4.14639C11.4298 2.67292 10.0931 1.58334 8.50002 1.58334V2.33334ZM5.91737 4.33334L6.6437 4.52028C6.85651 3.69345 7.60796 3.08334 8.50002 3.08334V2.33334V1.58334C6.90697 1.58334 5.57029 2.67292 5.19104 4.14639L5.91737 4.33334Z" fill="currentColor"/>
  </svg>
);


interface ContextMenuItem {
  label: string;
  action: string;
  icon: React.FC<{ className?: string }>;
  isDestructive?: boolean;
}

interface ContextMenuProps {
  pageId: string;
  x: number;
  y: number;
  onClose: () => void;
  onAction: (action: string, pageId: string) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ pageId, x, y, onClose, onAction }) => {
  const generalActions: ContextMenuItem[] = [
    { label: 'Set as first page', action: 'setAsFirst', icon: FlagIcon },
    { label: 'Rename', action: 'rename', icon: PencilSquareIcon },
    { label: 'Copy', action: 'copy', icon: ClipboardIcon },
    { label: 'Duplicate', action: 'duplicate', icon: DocumentDuplicateIcon },
  ];

  const destructiveActions: ContextMenuItem[] = [
    { label: 'Delete', action: 'delete', icon: TrashIcon, isDestructive: true },
  ];

  const menuWidth = 224; // w-56
  const approximateMenuHeight = 40 + (generalActions.length * 40) + 8 + (destructiveActions.length * 40) + 8; // Estimate for positioning

  const style: React.CSSProperties = {
    top: Math.min(y, window.innerHeight - approximateMenuHeight - 10),
    left: Math.min(x, window.innerWidth - menuWidth - 10),
    position: 'fixed',
    zIndex: 1000,
  };

  const renderMenuItem = (item: ContextMenuItem) => (
    <li key={item.action}>
      <button
        onClick={() => onAction(item.action, pageId)}
        className={`w-full flex items-center px-4 py-2 text-sm transition-colors duration-150 ease-in-out
          ${item.isDestructive
            ? 'text-red-600 hover:bg-red-50'
            : 'text-slate-700 hover:bg-slate-100'
          }
          focus:outline-none ${item.isDestructive ? 'focus:bg-red-100' : 'focus:bg-slate-200'}
        `}
      >
        <item.icon className={`w-5 h-5 mr-3 ${item.icon === FlagIcon ? '' : (item.isDestructive ? 'text-red-500' : 'text-slate-500') }`} />
        {item.label}
      </button>
    </li>
  );

  return (
    <div
      id="context-menu-container"
      className="bg-white shadow-xl rounded-lg w-56 border border-slate-200"
      style={style}
      onClick={(e) => e.stopPropagation()} // Prevent click outside from closing if clicking inside menu
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button" 
    >
      <div className="px-4 py-3 border-b border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800">Settings</h3>
      </div>
      <ul className="py-1" role="none">
        {generalActions.map(renderMenuItem)}
      </ul>
      <div className="my-1 h-px bg-slate-200" role="separator"></div>
      <ul className="py-1" role="none">
        {destructiveActions.map(renderMenuItem)}
      </ul>
    </div>
  );
};

export default ContextMenu;
