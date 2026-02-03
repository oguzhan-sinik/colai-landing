"use client";
import React from 'react';
import Image from 'react'
import Head from 'next/head';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { 
  ArrowRight, 
  Users,
  
} from 'lucide-react';
import HeroEffect from './HeroEffect';

const THEME = {
  colors: {
    bgMain: "#0d1321",       
    textMain: "#ffffff",     
    primary: "#f97316",      
    primaryLight: "#f97316", 
    primaryDark: "#ea580c",  
    primaryDim: "rgba(249, 115, 22, 0.1)", 
  }
};

export default function LandingPage() {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"colai-demo-view"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])


  return (
    <div 
      style={{
        '--bg-main': THEME.colors.bgMain,
        '--text-main': THEME.colors.textMain,
        '--primary': THEME.colors.primary,
        '--primary-light': THEME.colors.primaryLight,
        '--primary-dark': THEME.colors.primaryDark,
        '--primary-dim': THEME.colors.primaryDim,
      } as React.CSSProperties}
      className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] font-sans selection:bg-[var(--primary-light)] selection:text-black"
    >
      <Head>
        <title>ColAi | Agentic Knowledge Base as PLM</title>
        <meta name="description" content="Agentic Knowledge Base Platform Served as PLM. Stop paying the innovation tax." />
      </Head>

      <header className="fixed w-full top-0 p-6 md:p-8 z-50 flex items-center justify-between backdrop-blur-md bg-black/40 md:backdrop-blur-none md:bg-transparent transition-all">
        <div className="flex items-center gap-2 z-50">

          <div className='flex flex-row gap-2'>
          <img src="./logo.png" className='w-6 h-6 md:w-10 md:h-10 rounded-xl' />
          <span className="font-bold text-white text-2xl md:text-4xl tracking-tight select-none drop-shadow-md">
            ColAi
          </span>

          </div>
          
        </div>

        <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-[400px] h-14 items-center justify-center backdrop-blur-md bg-white/20 rounded-full shadow-lg border border-white/40">
          <nav className="flex gap-12 text-lg font-medium text-white/90">
            <a href="#problem" className="hover:text-[var(--primary-light)] hover:scale-110 transition duration-200 ">The Problem</a>
            <a href="#solution" className="hover:text-[var(--primary-light)] hover:scale-110 transition duration-200 ">Solution</a>
            <a href="#team" className="hover:text-[var(--primary-light)] hover:scale-110 transition duration-200 ">Team</a>
          </nav>
        </div>

        <div className="z-50 flex items-center rounded-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition-colors cursor-pointer shadow-lg">
          <a href="mailto:ogzdlk06@gmail.com, burakalicankilinc@gmail.com" className="font-bold px-3 py-1 md:px-5 md:py-2 text-white text-lg md:text-xl tracking-tight select-none">Contact Us</a>
          
        </div>
      </header>

      <main>
        
        <section className="relative md:h-[800px]  h-[650px] flex items-center justify-center mb-24 overflow-hidden pt-24">
          <HeroEffect />
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
              Agentic Knowledge Base <br className="hidden md:block" />
              <span className="text-[var(--primary-light)]">as Product Lifecycle Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              A hub of innovation for engineering teams. We blend the job itself with a securely hosted platform, integrating customizable AI agents to convert "tacit knowledge" into structured assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                data-cal-namespace="colai-demo-view"
                data-cal-link="oguzhan-sinik-nhpnej/colai-demo-view"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="inline-flex items-center justify-center px-8 py-3 bg-[var(--primary)] text-white font-bold rounded-full border border-white/20 hover:bg-[var(--primary-dark)] transition shadow-lg backdrop-blur-sm"
              >
                Request Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="mt-8 text-sm font-medium text-gray-300">
              Open-source • Self-hosted • 100% Data Ownership
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4">
            <section id="problem" className="mb-32 pt-16 scroll-mt-24">
              <div className="mb-12">
                <h2 className="text-md font-bold text-[var(--primary)] uppercase tracking-wider mb-2">The Challenge</h2>
                <h3 className="md:text-5xl text-3xl font-bold mb-6 text-white">The Threat of Knowledge Loss</h3>
                <p className="text-gray-400 text-xl leading-relaxed max-w-4xl">
                  In most organizations, the role of innovation is threatened by unproductive information seeking and "knowledge gaps." 
                  <span className="text-gray-200 font-medium"> Tacit knowledge</span>—the most valuable expertise—leaves the organization when even a single worker retires. 
                  ColAi mitigates this by managing tacit and explicit knowledge so innovation can occur and re-work does not.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative p-8">
                      <div className="text-6xl font-bold text-white mb-3">25%</div>
                      <p className="text-white font-medium leading-relaxed">
                          Of working time is lost seeking out and processing information.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative p-8">
                      <div className="text-6xl font-bold text-white mb-3">$6M</div>
                      <p className="text-white font-medium leading-relaxed">
                          Wasted annually for a 1,000-employee company due to inefficient retrieval.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative p-8">
                      <div className="text-6xl font-bold text-white mb-3 ">56%</div>
                      <p className="text-white font-medium leading-relaxed">
                          Success rate of searches. Nearly half of all searches for existing info fail.
                      </p>
                    </div>
                  </div>
              </div>
            </section>

            <section id="solution" className="mb-32 scroll-mt-24">
              <div className="mb-16">
                <h2 className="text-md font-bold text-[var(--primary)] uppercase tracking-wider mb-2">Our Solution</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Agentic Knowledge Base as PLM</h3>
                <p className="text-gray-400 text-xl leading-relaxed max-w-4xl">
                  We don't just store documents. We create a <span className="text-white">hub of innovation</span>. 
                  ColAi acts as an "Exoskeleton for the Mind," automating documentation and compliance while ensuring organizations retain 100% ownership over their intellectual property.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                   
                   <h4 className="text-2xl font-bold text-white mb-3">Hub of Innovation</h4>
                   <p className="text-lg text-gray-400 leading-relaxed">
                     An agentic knowledge base that blends the job itself with the platform. A true hub of work for engineering teams where innovation happens naturally.
                   </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                   
                   <h4 className="text-2xl font-bold text-white mb-3">Agent-first Architecture</h4>
                   <p className="text-lg text-gray-400 leading-relaxed">
                     Teams easily integrate any AI agents (like bees) into their workplace. Select from our marketplace or create your own for full control.
                   </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                   
                   <h4 className="text-2xl font-bold text-white mb-3">Knowledge Lasts Longer</h4>
                   <p className="text-lg text-gray-400 leading-relaxed">
                     Traditional docs die in folders. Our hyper-structured database ensures knowledge remains "fresh" and accessible across generations.
                   </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                   
                   <h4 className="text-2xl font-bold text-white mb-3">Software Empowers People</h4>
                   <p className="text-lg text-gray-400 leading-relaxed">
                     We don't replace engineers; we amplify them. Agents handle the grunt work, acting as an "Exoskeleton for the Mind" for creative problem solving.
                   </p>
                </div>

              </div>
            </section>

            <section id="team" className="mb-24 scroll-mt-24">
            <h2 className="text-lg font-bold text-[var(--primary)] uppercase tracking-wider mb-8">The Team</h2>
            <div className="grid md:grid-cols-2 gap-12 text-gray-100">
                <div>
                <div className="flex items-center gap-3 mb-3">
                    <a target="_blank" href="https://www.linkedin.com/in/oguzhan-sinik" className='hover:text-[var(--primary-light)] hover:underline font-bold text-2xl text-[var(--text-main)]"'>Oguzhan Sinik</a>
                    
                    <span className="text-md bg-white/20 px-2 py-1 rounded text-white">Founder</span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-2">
                A 20 y.o. builder engineering the future. 9 years of experience in software and product engineering. Specializes in building cloud infrastructure on AWS and integrating AI workflows via LangChain. Architects scalable solutions using React, Swift, JS, and Python.
                </p>
                <a target="_blank" href="https://www.oguzhans.com" className="text-[var(--primary-light)] hover:underline text-sm">oguzhans.com</a>
                </div>
                <div>
                <div className="flex items-center gap-3 mb-3">
                    <a target="_blank" href="https://www.linkedin.com/in/burakalicankilinc/" className='hover:text-[var(--primary-light)] hover:underline font-bold text-2xl text-[var(--text-main)]"'>Burak Alican Kilinc</a>
                    <span className="text-md bg-white/20 px-2 py-1 rounded text-white">Founder</span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                An 18-year-old Scientist shaping the future. Hungry for knowledge since 7 y.o. Countless STEM-related projects with National and International Awards. Published a research paper about a deep learning model. Studying AI even before the rise of LLMs, leading high technical knowledge in machine learning, deep learning, NLP’s and Agentic AI. 

                             </p>
                </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <h4 className="font-bold text-lg mb-2 text-[var(--primary)]">ADVISOR</h4>
                <a target="_blank" href="https://www.linkedin.com/in/emre-kazim-21784b21/" className='text-[var(--main)] hover:text-[var(--primary-light)] hover:underline text-2xl font-bold "'>Dr. Emre Kazim</a>
                <p className="text-lg text-gray-200">Founder & CEO of <a href="https://www.holisticai.com/" target="_blank" className='hover:underline' >Holistic AI</a>. Expert in AI governance and enterprise trust. With a PhD from KCL and a track record of making business with giants like Unilever, Siemens, and AON, Mr Kazım’s mentorship allowed us to shape and scale our startup.</p>
            </div>
            </section>

            <footer className="pt-12 pb-12 border-t border-gray-700 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-md text-gray-400">
            <div className="mb-4 md:mb-0">
                &copy; 2026 ColAi. All rights reserved. <br />
                <a href="https://www.colai.co" className="hover:text-[var(--primary)]">www.colai.co</a>
            </div>
            <div className="flex gap-6">
                <a href="mailto:ogzdlk06@gmail.com, burakalicankilinc@gmail.com" className="hover:text-white">Contact Us</a>
            </div>
            </footer>
        </div>
      </main>
    </div>
  );
}