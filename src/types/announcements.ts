export type AnnouncementCategory = 'Tümü' | 'Mobil Uygulama' | 'Oyun' | 'Video' | 'Stüdyo';

export interface AnnouncementItem {
  id: string;
  title: string;
  category: 'Mobil Uygulama' | 'Oyun' | 'Video' | 'Stüdyo';
  date: string;
  version: string;
  badge: string;
  status: 'Yayında' | 'İncelemede' | 'Erken Erişim' | 'Geliştiriliyor';
  summary: string;
  highlights: string[];
  actionLabel: string;
  actionUrl?: string;
  fullDetails: {
    overview: string;
    keyFeatures: { title: string; desc: string }[];
    changelog: string[];
    specs: { label: string; value: string }[];
    developerNote: string;
  };
}
