import React, { useState } from 'react';
import { ANNOUNCEMENTS } from '../data/announcementsData';
import { AnnouncementCategory, AnnouncementItem } from '../types/announcements';
import {
  Sparkles,
  Gamepad2,
  Smartphone,
  Clapperboard,
  Building2,
  CheckCircle,
  Calendar,
  Layers,
  ArrowUpRight,
  X,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

export const AnnouncementsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AnnouncementCategory>('Tümü');
  const [activeItem, setActiveItem] = useState<AnnouncementItem | null>(null);

  const categories: AnnouncementCategory[] = [
    'Tümü',
    'Mobil Uygulama',
    'Oyun',
    'Video',
    'Stüdyo'
  ];

  const filteredItems =
    selectedCategory === 'Tümü'
      ? ANNOUNCEMENTS
      : ANNOUNCEMENTS.filter((item) => item.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Mobil Uygulama':
        return <Smartphone className="w-3.5 h-3.5" />;
      case 'Oyun':
        return <Gamepad2 className="w-3.5 h-3.5" />;
      case 'Video':
        return <Clapperboard className="w-3.5 h-3.5" />;
      case 'Stüdyo':
        return <Building2 className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="duyurular" className="py-20 md:py-28 border-b border-[#262626]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-2">
            02 / Duyurular
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F4F0]">
            Stüdyodan Haberler
          </h2>
          <p className="text-sm sm:text-base text-[#888888] mt-2 max-w-xl">
            Yufixuz Studio’da üzerinde çalıştığım uygulamalar, oyunlar ve videolar.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors border ${
                  isSelected
                    ? 'border-[#F5F4F0] bg-[#F5F4F0] text-[#0A0A0A] font-bold'
                    : 'border-[#262626] bg-[#111111] text-[#888888] hover:text-[#F5F4F0] hover:border-[#444444]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Announcements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between border border-[#262626] bg-[#111111] hover:border-[#444444] transition-all group overflow-hidden"
          >
            {/* Card Upper: Visual Mockup / Badge */}
            <div className="p-6 sm:p-8 border-b border-[#262626] bg-[#141414]/60">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-[#333333] text-[#F5F4F0] bg-[#0A0A0A]">
                  {getCategoryIcon(item.category)}
                  <span>{item.category}</span>
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#888888] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-[#3A3A3A] text-[#CCCCCC] bg-[#1C1C1C]">
                    {item.version}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F5F4F0] group-hover:text-white transition-colors mb-3">
                {item.title}
              </h3>

              {/* Short Summary */}
              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed line-clamp-3">
                {item.summary}
              </p>
            </div>

            {/* Card Middle: Key Feature Bullets */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#888888] block mb-3 tracking-wider">
                  Öne Çıkan Özellikler:
                </span>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-[#CCCCCC] flex items-start gap-2.5 leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-none bg-[#F5F4F0] shrink-0 mt-1.5"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom: Status & Action Button */}
              <div className="pt-4 border-t border-[#222222] flex items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse"></span>
                  {item.status}
                </span>

                <button
                  onClick={() => setActiveItem(item)}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[#F5F4F0] text-[#0A0A0A] hover:bg-white font-bold transition-all flex items-center gap-1.5 group-hover:translate-x-0.5"
                >
                  <span>{item.actionLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ================= DETAILED ITEM MODAL ================= */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#0F0F0F] border border-[#2B2B2B] text-[#F5F4F0] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#262626] bg-[#141414]">
              <div className="flex items-center gap-3">
                <span className="p-2 border border-[#333333] bg-[#0A0A0A] text-[#F5F4F0]">
                  {getCategoryIcon(activeItem.category)}
                </span>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#888888] block">
                    {activeItem.category} • {activeItem.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-[#F5F4F0]">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="p-2 text-[#888888] hover:text-[#F5F4F0] hover:bg-[#222222] transition-colors border border-transparent hover:border-[#333333]"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-140px)] leading-relaxed text-sm text-[#CCCCCC] space-y-6">
              {/* Overview */}
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-2">
                  Genel Bakış
                </span>
                <p className="text-sm text-[#E5E5E5] leading-relaxed">
                  {activeItem.fullDetails.overview}
                </p>
              </div>

              {/* Key Features Grid */}
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-3">
                  Detaylı Özellikler
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeItem.fullDetails.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3.5 bg-[#141414] border border-[#262626]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F4F0] mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-[#A0A0A0] leading-snug">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs & Architecture */}
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-3">
                  Bilgiler
                </span>
                <div className="border border-[#262626] divide-y divide-[#262626]">
                  {activeItem.fullDetails.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between p-2.5 text-xs">
                      <span className="text-[#888888] font-mono">{spec.label}</span>
                      <span className="text-[#F5F4F0] font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Changelog */}
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-2">
                  Son Durum
                </span>
                <ul className="space-y-1.5 text-xs text-[#B5B5B5]">
                  {activeItem.fullDetails.changelog.map((log, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#888888] shrink-0 mt-0.5" />
                      <span>{log}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Developer Note */}
              <div className="p-4 bg-[#141414] border-l-2 border-[#F5F4F0] text-xs space-y-1">
                <span className="font-mono uppercase text-[#888888] block tracking-wider">
                  Geliştirici Notu (Yusuf Tolibov):
                </span>
                <p className="text-[#E0E0E0] italic">
                  &quot;{activeItem.fullDetails.developerNote}&quot;
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-[#262626] bg-[#141414] text-xs font-mono">
              <span className="text-[#888888]">Durum: {activeItem.status}</span>
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-1.5 text-xs uppercase font-bold bg-[#F5F4F0] text-[#0A0A0A] hover:bg-white"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
