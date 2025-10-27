import React from 'react';

export default function StickerGrid({ items = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it) => (
        <div key={it.title} className="relative rounded-2xl border-4 border-black bg-white text-black p-4">
          <div className="w-10 h-10 rounded-xl border-4 border-black flex items-center justify-center" style={{ backgroundColor: it.color }}>
            <span className="sr-only">icon</span>
          </div>
          <h3 className="mt-3 font-extrabold text-lg">{it.title}</h3>
          <p className="text-sm mt-1">{it.desc}</p>
          {it.cta && (
            <a href={it.cta.href} className="mt-3 inline-block px-3 py-2 rounded-xl border-4 border-black font-bold bg-[#ffc400] text-black focus:outline-none focus:ring-2 focus:ring-black">{it.cta.label}</a>
          )}
        </div>
      ))}
    </div>
  );
}
