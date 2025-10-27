import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StickerGrid from './components/StickerGrid';
import Footer from './components/Footer';

function useHashRoute() {
  const [route, setRoute] = useState(() => (window.location.hash || '#/'));
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return route;
}

function PageContainer({ theme, children }) {
  return (
    <main className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>{children}</main>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <section className="border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-lg max-w-3xl">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(()=>setCopied(false), 1200);} catch {}
      }}
      className="px-3 py-2 rounded-xl border-4 border-black bg-[#ffc400] text-black font-bold focus:outline-none focus:ring-2 focus:ring-black"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function CodeBlock({ code }) {
  return (
    <div className="rounded-2xl border-4 border-black bg-white text-black p-4 overflow-auto">
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">{code}</pre>
    </div>
  );
}

export default function App() {
  const route = useHashRoute();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
  }, [theme]);

  const home = (
    <>
      <Hero theme={theme} />
      <Section title="Use cases" subtitle="Sticker‑style tiles. All flat color, bold lines.">
        <StickerGrid
          items={[
            { title: 'On‑chain Agents', desc: 'Deterministic AI agents with verifiable memory via SVDB.', color: '#8c00ff', cta: { label: 'Build', href: '#/developers' } },
            { title: 'RAG for DeFi', desc: 'Transparent retrieval over on‑chain positions and risk.', color: '#ff3f7f', cta: { label: 'Docs', href: '#/docs' } },
            { title: 'On‑chain Recs', desc: 'Personalized feeds and marketplaces backed by SVDB.', color: '#ffc400', cta: { label: 'Ecosystem', href: '#/ecosystem' } },
            { title: 'zk‑Model Hosting', desc: 'Provable model execution with audit‑ready traces.', color: '#450693', cta: { label: 'Roadmap', href: '#/roadmap' } },
          ]}
        />
      </Section>
      <Section title="Metrics" subtitle="Simple flat tiles — no gradients.">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { k: 'Active Devs', v: '2,400+' },
            { k: 'Daily SVDB Ops', v: '50M+' },
            { k: 'Mainnet Contracts', v: '12k+' },
            { k: 'Community', v: '150k+' },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl border-4 border-black p-6 bg-[#ffffff] text-black">
              <div className="text-3xl font-extrabold">{m.v}</div>
              <div className="text-sm font-bold">{m.k}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );

  const technology = (
    <>
      <Section title="Technology" subtitle="A modern L1 with SVDB — an on‑chain vector database for AI.">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="rounded-2xl border-4 border-black p-6 bg-white text-black">
            <h3 className="font-extrabold">Consensus</h3>
            <p className="mt-2 text-sm">Fast finality, high throughput, predictable costs for AI‑heavy workloads.</p>
          </div>
          <div className="rounded-2xl border-4 border-black p-6 bg-white text-black">
            <h3 className="font-extrabold">SVDB</h3>
            <p className="mt-2 text-sm">On‑chain similarity search with verifiable embeddings and deterministic indexes.</p>
          </div>
          <div className="rounded-2xl border-4 border-black p-6 bg-white text-black">
            <h3 className="font-extrabold">Tooling</h3>
            <p className="mt-2 text-sm">CLI, SDKs, and templates designed for developer velocity.</p>
          </div>
        </div>
      </Section>
    </>
  );

  const developers = (
    <>
      <Section title="Developers" subtitle="Quickstart with SDK or CLI. Copy‑ready commands.">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold">JavaScript SDK</h3>
              <CopyButton text={`npm install @arthachain/sdk\n\nimport { Client } from '@arthachain/sdk'\nconst c = new Client({ endpoint: 'https://rpc.arthachain.org' })`} />
            </div>
            <CodeBlock code={`npm install @arthachain/sdk\n\nimport { Client } from '@arthachain/sdk'\nconst client = new Client({ endpoint: 'https://rpc.arthachain.org' })\n\n// SVDB example\nawait client.svdb.createIndex({ name: 'docs', dim: 768 })\nawait client.svdb.upsert({ index: 'docs', id: 'a1', vector: [/* ... */], meta: { url: '...' } })\nconst res = await client.svdb.query({ index: 'docs', topK: 5, vector: [/* ... */] })`} />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold">CLI</h3>
              <CopyButton text={`curl -sSL https://get.arthachain.org | bash\naitha init\naitha svdb create docs --dim 768\naitha svdb query docs --vector [0.1,0.2,...] --topK 5`} />
            </div>
            <CodeBlock code={`# install\ncurl -sSL https://get.arthachain.org | bash\n\n# init project\naitha init\n\n# SVDB ops\naitha svdb create docs --dim 768\naitha svdb upsert docs --id a1 --vector [0.1,0.2,...] --meta '{"url":"..."}'\naitha svdb query docs --vector [0.1,0.2,...] --topK 5`} />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#/docs" className="px-5 py-3 rounded-xl border-4 border-black bg-[#8c00ff] text-white font-extrabold focus:outline-none focus:ring-2 focus:ring-black">Read the Docs</a>
          <a href="#/grants" className="px-5 py-3 rounded-xl border-4 border-black bg-[#ffc400] text-black font-extrabold focus:outline-none focus:ring-2 focus:ring-black">Apply for Grants</a>
        </div>
      </Section>
    </>
  );

  const docs = (
    <>
      <Section title="Documentation" subtitle="MDX‑style sidebar with flat sections.">
        <div className="grid lg:grid-cols-[260px_1fr] gap-6">
          <aside className="rounded-2xl border-4 border-black bg-white text-black p-4 h-fit">
            <nav className="space-y-2">
              {['Getting Started','SVDB','Contracts','Nodes','CLI','SDKs'].map((s) => (
                <a key={s} href="#/docs" className="block px-3 py-2 rounded-xl border-4 border-black bg-[#ffffff] text-black font-bold focus:outline-none focus:ring-2 focus:ring-black">{s}</a>
              ))}
            </nav>
          </aside>
          <div className="space-y-4">
            <div className="rounded-2xl border-4 border-black bg-white text-black p-6">
              <h3 className="font-extrabold text-xl">Getting Started</h3>
              <p className="mt-2 text-sm">Install the SDK or CLI, connect to a public RPC, deploy your first contract, and index vectors in SVDB.</p>
            </div>
            <div className="rounded-2xl border-4 border-black bg-white text-black p-6">
              <h3 className="font-extrabold text-xl">SVDB</h3>
              <p className="mt-2 text-sm">Create indexes, upsert vectors, and run queries fully on‑chain with deterministic execution.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );

  const validators = (
    <>
      <Section title="Run a Node" subtitle="Validator setup steps and application form.">
        <div className="grid lg:grid-cols-2 gap-6">
          <ol className="rounded-2xl border-4 border-black bg-white text-black p-6 space-y-3 list-decimal list-inside">
            <li>Provision a machine with 16+ cores, 64GB RAM, NVMe.</li>
            <li>Install Aitha CLI: curl -sSL https://get.arthachain.org | bash</li>
            <li>Initialize: aitha node init --network mainnet</li>
            <li>Sync and verify: aitha node start</li>
            <li>Submit validator key and bond stake.</li>
          </ol>
          <form className="rounded-2xl border-4 border-black bg-white text-black p-6 space-y-3" onSubmit={(e)=>e.preventDefault()}>
            <div>
              <label className="block font-bold mb-1">Operator Name</label>
              <input className="w-full px-3 py-2 rounded-xl border-4 border-black focus:outline-none focus:ring-2 focus:ring-black" required />
            </div>
            <div>
              <label className="block font-bold mb-1">Contact Email</label>
              <input type="email" className="w-full px-3 py-2 rounded-xl border-4 border-black focus:outline-none focus:ring-2 focus:ring-black" required />
            </div>
            <div>
              <label className="block font-bold mb-1">Infrastructure Details</label>
              <textarea className="w-full px-3 py-2 rounded-xl border-4 border-black focus:outline-none focus:ring-2 focus:ring-black" rows={3}></textarea>
            </div>
            <button className="px-4 py-2 rounded-xl border-4 border-black bg-[#450693] text-white font-bold focus:outline-none focus:ring-2 focus:ring-black">Apply</button>
          </form>
        </div>
      </Section>
    </>
  );

  const grants = (
    <>
      <Section title="Grants & Funding" subtitle="Tracks and transparent process.">
        <div className="grid lg:grid-cols-3 gap-4">
          {[
            { t: 'Core Protocol', d: 'Consensus, networking, performance.', c: '#450693' },
            { t: 'SVDB & AI', d: 'Indexes, tooling, model adapters.', c: '#8c00ff' },
            { t: 'Ecosystem', d: 'Wallets, explorers, infra, education.', c: '#ffc400' },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border-4 border-black p-6 bg-white text-black">
              <div className="w-10 h-10 rounded-xl border-4 border-black" style={{ backgroundColor: x.c }}></div>
              <h3 className="mt-3 font-extrabold">{x.t}</h3>
              <p className="text-sm mt-1">{x.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border-4 border-black bg-white text-black p-6">
          <h3 className="font-extrabold">Process</h3>
          <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
            <li>Submit proposal</li>
            <li>Review & feedback</li>
            <li>Decision & milestones</li>
            <li>Build & report</li>
          </ol>
          <a href="#/contact" className="mt-4 inline-block px-4 py-2 rounded-xl border-4 border-black bg-[#ff3f7f] text-black font-bold focus:outline-none focus:ring-2 focus:ring-black">Apply for Grants</a>
        </div>
      </Section>
    </>
  );

  const simplePage = (title, body) => (
    <>
      <Section title={title} subtitle={body}>
        <div className="rounded-2xl border-4 border-black bg-white text-black p-6">
          <p className="text-sm">{body}</p>
        </div>
      </Section>
    </>
  );

  const svdb = (
    <>
      <Section title="AI on ArthaChain (SVDB)" subtitle="On‑chain vector storage and search for verifiable AI.">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border-4 border-black bg-white text-black p-6">
            <h3 className="font-extrabold">Why SVDB?</h3>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Deterministic similarity search</li>
              <li>On‑chain provenance and audits</li>
              <li>Composable with contracts and agents</li>
            </ul>
          </div>
          <div className="rounded-2xl border-4 border-black bg-white text-black p-6">
            <h3 className="font-extrabold">Query Example</h3>
            <CodeBlock code={`const res = await client.svdb.query({\n  index: 'docs',\n  topK: 5,\n  vector: [/* ... */]\n})`} />
          </div>
        </div>
      </Section>
    </>
  );

  const routeView = useMemo(() => {
    switch ((route || '').replace('#','')) {
      case '/technology': return technology;
      case '/developers': return developers;
      case '/docs': return docs;
      case '/ecosystem': return simplePage('Ecosystem', 'Discover tools, dApps, and partners building with SVDB.');
      case '/validators': return validators;
      case '/svdb': return svdb;
      case '/roadmap': return simplePage('Roadmap', 'Clear milestones across protocol, SVDB, and ecosystem.');
      case '/grants': return grants;
      case '/community': return simplePage('Community', 'Join builders across chat, forums, and events.');
      case '/blog': return simplePage('Blog & News', 'Engineering updates, research notes, and ecosystem highlights.');
      case '/careers': return simplePage('Careers', 'Join the team building fully on‑chain AI.');
      case '/about': return simplePage('About', 'ArthaChain is a Layer‑1 focused on verifiable AI and data.');
      case '/contact': return simplePage('Contact', 'Reach the team for support, partnerships, and press.');
      case '/press': return simplePage('Press Kit', 'Brand assets, logos, and visual guidelines.');
      case '/status': return simplePage('Status', 'Network, RPC, and SVDB service health.');
      case '/':
      default: return home;
    }
  }, [route]);

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 px-3 py-2 rounded-xl border-4 border-black bg-[#ffc400] text-black font-bold">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t)=> t === 'dark' ? 'light' : 'dark')} />
      <PageContainer theme={theme}>
        <div id="main">{routeView}</div>
      </PageContainer>
      <Footer theme={theme} />
    </div>
  );
}
