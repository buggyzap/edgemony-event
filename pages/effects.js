import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function EffectPage() {
  return (
    <Layout>
      <div className="min-h-screen dark">
        <div className="py-4 max-w-screen-md m-auto">
          <div class="mt-4 mb-8">
            <div class="not-prose relative rounded-xl overflow-hidden bg-slate-800">
              <div style={{backgroundPosition: '10px 10px'}} class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
              <div class="relative rounded-xl overflow-auto p-8">
                <div class="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rounded</p>
                    <div class="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded"></div>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rounded-md</p>
                    <div class="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded-md"></div>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rounded-lg</p>
                    <div class="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded-lg"></div>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rounded-full</p>
                    <div class="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
            </div>
          </div>
          <div class="mt-4 mb-8">
            <div class="not-prose relative rounded-xl overflow-hidden bg-slate-800">
              <div style={{backgroundPosition: '10px 10px'}} class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
              <div class="relative rounded-xl overflow-auto p-8">
                <div class="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border</p>
                    <div class="p-4 shadow-sm bg-white dark:bg-slate-900 w-16 h-16 border-indigo-600 dark:border-sky-500 border"></div>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-2</p>
                    <div class="p-4 shadow-sm bg-white dark:bg-slate-900 w-16 h-16 border-indigo-600 dark:border-sky-500 border-2"></div>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-4</p>
                    <div class="p-4 shadow-sm bg-white dark:bg-slate-900 w-16 h-16 border-indigo-600 dark:border-sky-500 border-4"></div>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-8</p>
                    <div class="p-4 shadow-sm bg-white dark:bg-slate-900 w-16 h-16 border-indigo-600 dark:border-sky-500 border-8"></div>
                  </div>
                </div>
              </div>
              <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
            </div>
          </div>
          <div class="mt-4 mb-8">
            <div class="not-prose relative rounded-xl overflow-hidden dark:bg-slate-800">
              <div style={{backgroundPosition: '10px 10px'}} class="absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-grid-slate-700 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
              <div class="relative rounded-xl overflow-auto p-8">
                <div class="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16">
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">shadow-cyan-500/50</p>
                    <button class="py-2 px-3 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none">Subscribe</button>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">shadow-blue-500/50</p>
                    <button class="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none">Subscribe</button>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">shadow-indigo-500/50</p>
                    <button class="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/50 focus:outline-none">Subscribe</button>
                  </div>
                </div>
              </div>
              <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
            </div>
          </div>
          <div class="mt-4 mb-8">
            <div class="not-prose relative rounded-xl overflow-hidden bg-slate-800">
              <div style={{backgroundPosition: '10px 10px'}} class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
              <div class="relative rounded-xl overflow-auto p-8">
                <div class="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 font-bold text-sm text-white text-center">
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">outline-blue-500</p>
                    <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-2 outline-blue-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent">Button A</button>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">outline-cyan-500</p>
                    <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-2 outline-cyan-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent">Button B</button>
                  </div>
                  <div class="flex flex-col items-center shrink-0">
                    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">outline-pink-500</p>
                    <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-2 outline-pink-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent">Button C</button>
                  </div>
                </div>
              </div>
              <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
