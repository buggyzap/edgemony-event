import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function PseudoPage() {
  return (
    <Layout>
      <div className="min-h-screen dark">
        <div className="mt-4 -mb-3 max-w-screen-md m-auto">
          <div class="relative z-10 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden my-auto xl:mt-18 dark:bg-slate-800">
            <section>
              <header class="rounded-t-xl space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 dark:highlight-white/10">
                <div class="flex items-center justify-between">
                  <h2 class="font-semibold text-slate-900 dark:text-white">Projects</h2>
                  <div class="group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 cursor-pointer shadow-sm hover:bg-blue-400">
                    <svg width="20" height="20" fill="currentColor" class="mr-2">
                      <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"></path>
                    </svg>
                    New
                  </div>
                </div>
                <div class="group relative rounded-md dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent">
                  <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500 dark:text-slate-500">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                  </svg>
                  <input type="text" aria-label="Filter projects" placeholder="Filter projects..." class="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2" />
                </div>
              </header>
              <ul class="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6 dark:bg-slate-900/40 dark:ring-1 dark:ring-white/5">
                <li class="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                  <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                    <div>
                      <dt class="sr-only">Title</dt>
                      <dd class="font-semibold text-slate-900 group-hover:text-white dark:text-slate-100">API Integration</dd>
                    </div>
                    <div>
                      <dt class="sr-only">Category</dt>
                      <dd class="group-hover:text-blue-200">Engineering</dd>
                    </div>
                    <div class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                      <dt class="sr-only">Users</dt>
                      <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5"><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /></dd>
                    </div>
                  </dl>
                </li>
                <li class="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                  <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                    <div>
                      <dt class="sr-only">Title</dt>
                      <dd class="font-semibold text-slate-900 group-hover:text-white dark:text-slate-100">New Benefits Plan</dd>
                    </div>
                    <div>
                      <dt class="sr-only">Category</dt>
                      <dd class="group-hover:text-blue-200">Human Resources</dd>
                    </div>
                    <div class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                      <dt class="sr-only">Users</dt>
                      <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5"><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /></dd>
                    </div>
                  </dl>
                </li>
                <li class="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-blue-500 hidden sm:block lg:hidden xl:block">
                  <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                    <div>
                      <dt class="sr-only">Title</dt>
                      <dd class="font-semibold text-slate-900 group-hover:text-white dark:text-slate-100">Onboarding Emails</dd>
                    </div>
                    <div>
                      <dt class="sr-only">Category</dt>
                      <dd class="group-hover:text-blue-200">Customer Success</dd>
                    </div>
                    <div class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                      <dt class="sr-only">Users</dt>
                      <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5"><img src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80" alt="" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white" loading="lazy" /></dd>
                    </div>
                  </dl>
                </li>
                <li class="flex">
                  <div class="group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 cursor-pointer hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 dark:border-slate-700 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:bg-transparent dark:hover:text-blue-500">
                    <svg width="20" height="20" fill="currentColor" class="mb-1 text-slate-400 group-hover:text-blue-500">
                      <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"></path>
                    </svg>
                    New project
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}
