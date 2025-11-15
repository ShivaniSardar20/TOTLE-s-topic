
import React from 'react';
import TopicSearch from './components/TopicSearch';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <header className="py-8 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-cyan-400">TOTLE</h1>
          <p className="text-4xl font-extrabold mt-1">Frontend Developer Intern Submission</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <TopicSearch />
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        <p>Catalogue Management System UI Simulation</p>
      </footer>
    </div>
  );
}

export default App;
