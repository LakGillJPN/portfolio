import Image from 'next/image'
import { offside, jleague } from './layout'

export default function Home() {
  return (
    <div className="text-white">
    <h1 className="text-6xl text-center font-bold"> Lak Gill Portfolio</h1>
    <div className="inline-grid grid-cols-2 gap-3 justify-evenly  text-4xl m-0" >

      <div className="border-solid border-2 border-indigo-600"> 
        <span className={jleague.className}> J-League Predictor</span>
        <p>GitHub</p>
      </div>

      <div className="border-solid border-2 border-red-600">
        <span className={offside.className} >GamerTalk</span>
        <p>GitHub</p>
      </div>

   </div>

    </div>
  )
}
