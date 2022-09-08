import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function LayoutPage() {
  return (
    <Layout>
      <div className="flex min-h-screen">
        <div className="m-auto">
          <div className="container">
            <div className="flex space-y-10 flex-col">
              <div className="bg-blue-400 text-white rounded-full w-48 h-48 text-center flex text-6xl">
                <div className="m-auto">1</div>
              </div>
              <div className="bg-blue-400 text-white rounded-full w-48 h-48 text-center flex text-6xl">
                <div className="m-auto">2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
