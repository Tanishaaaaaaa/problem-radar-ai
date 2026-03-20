"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'sprint'>('overview');

  const sendToNotion = async () => {
    if (!input) return alert("Please enter something");

    setLoading(true);
    setResult(null);
    setActiveTab('overview');

    try {
      const res = await fetch("/api/notion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problem: input
        }),
      });

      const data = await res.json();
      if (data.success && data.data) {
        setResult(data.data);
      } else {
        alert(data.error || "Failed. Did you add the matching columns to Notion?");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending to Notion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#05050A] text-zinc-100 flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-blue-500/30">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-3xl flex flex-col gap-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border border-green-500/30 bg-green-500/5"></div>
            <div className="absolute inset-3 rounded-full border border-green-500/20"></div>
            <div className="absolute inset-6 rounded-full border border-green-500/10"></div>
            <div className="absolute top-1/2 left-1/2 w-[50%] h-[1px] bg-green-400/60 origin-left animate-[spin_3s_linear_infinite]">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_12px_#4ade80]"></div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-xs font-semibold text-zinc-300 tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Powered by Local Logic Engine
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent pb-2 drop-shadow-sm">
            Problem Radar
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto font-light">
            Vent your frustrations and watch our engine instantly transform them into structured hackathon pitches & tech specs!
          </p>
        </div>

        {/* Interaction Card */}
        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:border-white/20">
          <textarea
            className="w-full bg-black/50 border border-white/5 rounded-2xl p-5 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none min-h-[140px] text-lg leading-relaxed shadow-inner"
            placeholder="I hate it when I can never find parking near my university..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={sendToNotion}
            disabled={loading || !input.trim()}
            className="mt-6 w-full relative group overflow-hidden rounded-2xl p-[1px] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
            <div className="relative bg-zinc-950 px-8 py-4 rounded-2xl transition-all duration-300 group-hover:bg-zinc-950/80 flex items-center justify-center font-bold tracking-wide text-white text-lg">
              {loading ? (
                <div className="flex items-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-purple-400" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Synthesizing Plan...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Transform Idea
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          </button>
        </div>

        {/* Results Component */}
        {result && (
          <div className="bg-gradient-to-b from-zinc-800/60 to-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/5">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-3">
                  <svg className="w-7 h-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Hackathon Plan Verified
                </h3>
                <div className="flex items-center gap-2 text-sm bg-black/40 px-4 py-2 rounded-full border border-white/5 shadow-inner">
                  <div className={`w-2.5 h-2.5 rounded-full ${result.viabilityScore >= 80 ? 'bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]' : 'bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]'}`} />
                  <span className="text-zinc-400">Viability Score: <span className="text-white font-bold">{result.viabilityScore}%</span></span>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-4 border-b border-white/10 mb-8 pb-3 relative">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`pb-3 px-2 text-sm uppercase tracking-widest transition-all absolute top-0 
                    ${activeTab === 'overview' ? 'text-blue-400 font-bold border-b-2 border-blue-400' : 'text-zinc-500 font-medium hover:text-zinc-300'}
                  `}
                  style={{ position: 'relative' }}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    Plan Overview
                  </div>
                </button>
                <button 
                  onClick={() => setActiveTab('sprint')}
                  className={`pb-3 px-2 text-sm uppercase tracking-widest transition-all absolute top-0 left-[180px]
                    ${activeTab === 'sprint' ? 'text-emerald-400 font-bold border-b-2 border-emerald-400' : 'text-zinc-500 font-medium hover:text-zinc-300'}
                  `}
                  style={{ position: 'relative', left: 'auto' }}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    Sprint Board
                  </div>
                </button>
              </div>

              <div className="space-y-8">
                {activeTab === 'overview' ? (
                  <>
                {/* Generated Title */}
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-zinc-500 font-bold mb-2">Generated Title</h4>
                  <p className="text-xl font-semibold text-zinc-100">{result.title}</p>
                </div>

                {/* Proposed Solution */}
                {result.solution && (
                  <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 shadow-inner">
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Proposed Solution
                    </h4>
                    <p className="text-lg text-zinc-200 leading-relaxed font-light">{result.solution}</p>
                  </div>
                )}

                {/* Sub Metadata */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black/40 p-5 rounded-2xl border border-white/5 shadow-inner">
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">Target Audience</h4>
                    <div className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {result.users}
                    </div>
                  </div>

                  <div className="bg-black/40 p-5 rounded-2xl border border-white/5 shadow-inner">
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Tech Stack Profile
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.techStack.split(',').map((tech: string, i: number) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-mono font-medium text-zinc-300 bg-white/5 rounded-md border border-white/10">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Execution Engine */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-indigo-900/40 to-black/40 p-5 rounded-2xl border border-indigo-500/20 shadow-inner">
                    <h4 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Business Model
                    </h4>
                    <p className="text-sm font-medium text-zinc-200">{result.businessModel}</p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-900/40 to-black/40 p-5 rounded-2xl border border-emerald-500/20 shadow-inner">
                    <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Required Team
                    </h4>
                    <p className="text-sm font-medium text-zinc-200">{result.team}</p>
                  </div>
                </div>

                {/* Elevator Pitch */}
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-2xl border border-indigo-500/30 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-400 to-blue-400" />
                  <h4 className="text-xs uppercase tracking-widest text-indigo-300 font-bold mb-3">Elevator Pitch</h4>
                  <p className="text-zinc-200 leading-relaxed italic text-lg shadow-black drop-shadow-md">
                    "{result.pitch}"
                  </p>
                </div>
                  </>
                ) : (
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5 shadow-inner">
                    <h4 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-6 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      Sprint 1 Tasks
                    </h4>
                    <div className="space-y-4">
                      {result.sprintTasks && result.sprintTasks.map((task: string, i: number) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-white/5 hover:border-emerald-500/30 transition-all group duration-300">
                          <div className="mt-1 w-5 h-5 rounded border border-zinc-500 flex-shrink-0 group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-colors shadow-inner flex items-center justify-center">
                            <svg className="w-3 h-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <p className="text-zinc-200 leading-relaxed font-light">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}