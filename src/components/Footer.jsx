import React from 'react';

export default function Footer({ theme }) {
  return (
    <footer className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} border-t-4 border-black`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-extrabold tracking-tight">
            <div className="w-8 h-8 rounded-xl border-4 border-black bg-[#8c00ff]"></div>
            <span className="text-xl">ArthaChain</span>
          </div>
          <p className="mt-3 text-sm max-w-xs">A doodle‑first, neo‑tech Layer‑1 for fully on‑chain AI using SVDB. Flat colors, hard lines, future vibes.</p>
        </div>
        <div>
          <h4 className="font-extrabold mb-3">Build</h4>
          <ul className="space-y-2">
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/developers">Start Building</a></li>
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/docs">Documentation</a></li>
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/validators">Run a Node</a></li>
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/grants">Apply for Grants</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/about">About</a></li>
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/careers">Careers</a></li>
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/press">Press Kit</a></li>
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/status">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold mb-3">Community</h4>
          <ul className="space-y-2">
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/community">Join the Community</a></li>
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="#/blog">Blog & News</a></li>
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="https://wallet.arthachain.org" target="_blank" rel="noreferrer">Wallet</a></li>
            <li><a className="underline focus:outline-none focus:ring-2 focus:ring-black" href="https://explorer.arthachain.org" target="_blank" rel="noreferrer">Explorer</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t-4 border-black py-4 text-center text-sm">
        © {new Date().getFullYear()} ArthaChain. All rights reserved.
      </div>
    </footer>
  );
}
