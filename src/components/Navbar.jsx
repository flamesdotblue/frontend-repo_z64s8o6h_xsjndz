import React, { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#/' },
  { label: 'Technology', href: '#/technology' },
  { label: 'Developers', href: '#/developers' },
  { label: 'Documentation', href: '#/docs' },
  { label: 'Ecosystem', href: '#/ecosystem' },
  { label: 'Validators', href: '#/validators' },
  { label: 'AI on ArthaChain', href: '#/svdb' },
  { label: 'Roadmap', href: '#/roadmap' },
  { label: 'Grants', href: '#/grants' },
  { label: 'Community', href: '#/community' },
  { label: 'Blog', href: '#/blog' },
  { label: 'Careers', href: '#/careers' },
  { label: 'About', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
  { label: 'Press Kit', href: '#/press' },
  { label: 'Status', href: '#/status' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 border-b-4 border-black ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#/" className="flex items-center gap-2 font-extrabold tracking-tight focus:outline-none focus:ring-2 focus:ring-black">
            <div className="w-8 h-8 rounded-xl border-4 border-black bg-[#8c00ff]"></div>
            <span className="text-xl">ArthaChain</span>
          </a>

          <nav className="hidden lg:flex items-center gap-2">
            {links.slice(0,8).map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 rounded-xl border-4 border-black hover:translate-y-0.5 active:translate-y-1 transition-transform focus:outline-none focus:ring-2 focus:ring-black bg-white text-black">
                {l.label}
              </a>
            ))}
            <a href="https://wallet.arthachain.org" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border-4 border-black bg-[#ffc400] text-black font-bold focus:outline-none focus:ring-2 focus:ring-black">Wallet</a>
            <a href="https://explorer.arthachain.org" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border-4 border-black bg-[#ff3f7f] text-black font-bold focus:outline-none focus:ring-2 focus:ring-black">Explorer</a>
            <button onClick={onToggleTheme} className="ml-2 px-3 py-2 rounded-xl border-4 border-black bg-[#450693] text-white font-bold focus:outline-none focus:ring-2 focus:ring-black" aria-label="Toggle theme">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </nav>

          <button className="lg:hidden px-3 py-2 rounded-xl border-4 border-black bg-[#450693] text-white font-bold focus:outline-none focus:ring-2 focus:ring-black" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">
            Menu
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="lg:hidden border-t-4 border-black p-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 rounded-xl border-4 border-black bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-black">
                {l.label}
              </a>
            ))}
            <a href="https://wallet.arthachain.org" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border-4 border-black bg-[#ffc400] text-black font-bold focus:outline-none focus:ring-2 focus:ring-black">Wallet</a>
            <a href="https://explorer.arthachain.org" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border-4 border-black bg-[#ff3f7f] text-black font-bold focus:outline-none focus:ring-2 focus:ring-black">Explorer</a>
            <button onClick={onToggleTheme} className="px-3 py-2 rounded-xl border-4 border-black bg-[#450693] text-white font-bold focus:outline-none focus:ring-2 focus:ring-black">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
