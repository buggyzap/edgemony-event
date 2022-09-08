import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function TypoPage() {
  return (
    <Layout>
      <div className="min-h-screen dark">
        <div className="mt-4 -mb-3 max-w-screen-md m-auto">
          <div className="not-prose relative rounded-xl overflow-hidden bg-slate-800">
            <div style={{backgroundPosition: '10px 10px'}} className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
            <div className="relative rounded-xl overflow-auto p-8">
              <div className="flex flex-col gap-8">
                <div>
                  <span className="font-medium text-sm text-slate-500 font-mono mb-3 text-slate-400">text-sm</span>
                  <p className="text-sm font-medium text-slate-900 text-slate-200">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                <div>
                  <span className="font-medium text-sm text-slate-500 font-mono mb-3 text-slate-400">text-base</span>
                  <p className="text-base font-medium text-slate-900 text-slate-200">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                <div>
                  <span className="font-medium text-sm text-slate-500 font-mono mb-3 text-slate-400">text-lg</span>
                  <p className="text-lg font-medium text-slate-900 text-slate-200">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                <div>
                  <span className="font-medium text-sm text-slate-500 font-mono mb-3 text-slate-400">text-xl</span>
                  <p className="text-xl font-medium text-slate-900 text-slate-200">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                <div>
                  <span className="font-medium text-sm text-slate-500 font-mono mb-3 text-slate-400">text-2xl</span>
                  <p className="text-2xl font-medium text-slate-900 text-slate-200">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl border-white/5"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
