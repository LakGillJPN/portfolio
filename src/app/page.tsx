import { offside, jleague } from './layout'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen">

      <h1 className="text-6xl text-center font-bold mb-8">Lak Gill Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-4xl">
        <div className="text-4xl border-solid border-2 border-red-600 text-center p-4">
          <span className={jleague.className}>J-League Predictor</span>
          <a href="https://github.com/LakGillJPN/j-league-predictor">
            <div className="border-solid border-2 border-gray-600 flex flex-col items-center"> 
              <Image 
                src='/images/github-logo-white.png'
                width={100}
                height={100}
                alt="GitHub logo"
              />
            </div>
          </a>

          
        </div>

        <div className="text-4xl border-solid border-2 border-purple-600 text-center p-4">
          <span className={offside.className}>GamerTalk</span>
          <a href="https://github.com/GamerTalk">
            <div className="border-solid border-2 border-gray-600 flex flex-col items-center"> 
              <Image 
                src='/images/github-logo-white.png'
                width={100}
                height={100}
                alt="GitHub logo"
              />
            </div>
         </a>
       </div>

      </div>

    </div>
  )
}


