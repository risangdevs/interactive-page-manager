export interface Page {
  id: string;
  name: string;
  icon: 'info' | 'document' | 'check-circle' | 'user' | 'cog' | 'home' | 'chart-bar' | 'calendar' | string; // Allow specific known icons or a general string
}

export interface ContextMenuData {
  pageId: string;
  x: number;
  y: number;
}