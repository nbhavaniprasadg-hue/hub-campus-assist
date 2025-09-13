export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  category?: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface CampusInfo {
  id: string;
  title: string;
  content: string;
  category: 'schedule' | 'facilities' | 'dining' | 'library' | 'admin';
  tags: string[];
}

export interface CampusData {
  schedules: CampusInfo[];
  facilities: CampusInfo[];
  dining: CampusInfo[];
  library: CampusInfo[];
  admin: CampusInfo[];
}