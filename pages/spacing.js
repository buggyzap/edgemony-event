import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function SpacingPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="mt-20 text-center">Spaziatura ampia</div>
        <div className="mt-2 text-center">Spaziatura minima</div>
        <div className="mt-20 p-20 text-center bg-blue-200">
          <div>Padding ampio</div>
        </div>
        <div className="mt-20 text-center bg-orange-200 flex min-h-[300px]">
          <div className="w-20 bg-orange-500"></div>
          <div className="pl-12 flex">
            <div className="m-auto">
              Padding combinato
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
