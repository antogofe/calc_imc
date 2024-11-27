import { Inter } from 'next/font/google'
import Calcimc from './calcimc/Calcimc'
const inter = Inter({ subsets: ['latin']})

export default function Home() {
  return (
    <div className='flex w-full h-screen justify-start items-start'>
      <Calcimc/>
    </div> 
  )       
}
