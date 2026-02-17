export type AppId = 'about' | 'projects' | 'skills' | 'certificates' | 'contact';

export interface WindowState {
  id: AppId;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  title: string;
}

export interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
  tech?: string[];
}

export interface Certificate {
  image: string;
  title: string;
}
