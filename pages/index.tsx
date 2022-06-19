import Image from 'next/image'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <form className="flex flex-col items-center mt-40">
        <Image
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
          }
          alt="google-log"
          width={300}
          objectFit="cover"
          height={100}
        />
        <div
          className="
          flex items-center py-3 px-5 mx-auto mt-5 w-full max-w-[90%] rounded-full border border-gray-200 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="mr-3 h-5 text-gray-500" />
          <input type="text" className="grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col justify-center mt-8 space-y-2 w-[50%] sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I m Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}

export default Home
