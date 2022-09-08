import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="flex min-h-screen">
        <div className="m-auto">
          <p className="text-gray-800 text-3xl font-bold">Benvenuti studenti!</p>
        </div>
      </div>
    </Layout>
  )
}
