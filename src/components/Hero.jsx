import React from 'react';

export default function Hero({ theme }) {
  return (
    <section className={`w-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} border-b-4 border-black`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            AI, finally on-chain
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            ArthaChain is a next‑gen Layer‑1 enabling fully on‑chain AI via SVDB — a blazing fast, verifiable on‑chain vector database. Build AI agents, models, and dApps with deterministic, provable data.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#/developers" className="px-5 py-3 rounded-xl border-4 border-black bg-[#ffc400] text-black font-extrabold focus:outline-none focus:ring-2 focus:ring-black">Start Building</a>
            <a href="#/docs" className="px-5 py-3 rounded-xl border-4 border-black bg-[#8c00ff] text-white font-extrabold focus:outline-none focus:ring-2 focus:ring-black">Read the Docs</a>
            <a href="#/validators" className="px-5 py-3 rounded-xl border-4 border-black bg-[#ff3f7f] text-black font-extrabold focus:outline-none focus:ring-2 focus:ring-black">Run a Node</a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: 'TPS', v: '25,000+' },
              { k: 'Finality', v: '~1s' },
              { k: 'SVDB QPS', v: '100k+' },
              { k: 'Validators', v: '120+' },
            ].map((m) => (
              <div key={m.k} className="rounded-2xl border-4 border-black p-4 bg-white text-black">
                <div className="text-2xl font-extrabold">{m.v}</div>
                <div className="text-sm font-bold">{m.k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-80 sm:h-96">
          <svg viewBox="0 0 600 400" className="w-full h-full" role="img" aria-label="SVDB doodle scene">
            <rect x="10" y="10" width="580" height="380" rx="24" fill="#111111" stroke="#000000" strokeWidth="8" />
            <g>
              <circle cx="140" cy="120" r="26" fill="#8c00ff" stroke="#000" strokeWidth="8" />
              <circle cx="300" cy="80" r="22" fill="#ffc400" stroke="#000" strokeWidth="8" />
              <circle cx="460" cy="140" r="26" fill="#ff3f7f" stroke="#000" strokeWidth="8" />
              <circle cx="220" cy="260" r="28" fill="#ffffff" stroke="#000" strokeWidth="8" />
              <circle cx="380" cy="260" r="28" fill="#450693" stroke="#000" strokeWidth="8" />
              <path d="M140 120 L300 80 L460 140 L380 260 L220 260 Z" fill="none" stroke="#000" strokeWidth="8" />
              <g>
                <rect x="250" y="160" width="100" height="60" rx="16" fill="#ffffff" stroke="#000" strokeWidth="8" />
                <text x="300" y="198" textAnchor="middle" fontSize="20" fontWeight="800" fill="#000">SVDB</text>
              </g>
            </g>
            <g>
              <circle cx="300" cy="200" r="150" fill="none" stroke="#ffffff" strokeWidth="8" strokeDasharray="12 12" />
              <circle cx="300" cy="200" r="190" fill="none" stroke="#8c00ff" strokeWidth="8" strokeDasharray="10 14" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
