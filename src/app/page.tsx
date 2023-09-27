import { offside, jleague } from './layout'

export default function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl text-center font-bold mb-8">Lak Gill Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-4xl">

        <div className="text-4xl border-solid border-2 border-indigo-600 text-center p-4">
          <span className={jleague.className}>J-League Predictor</span>
          <p><a href="https://github.com/LakGillJPN/j-league-predictor">GitHub</a></p>
        </div>

        <div className="text-4xl border-solid border-2 border-red-600 text-center p-4">
          <span className={offside.className}>GamerTalk</span>
          <p><a href="https://github.com/GamerTalk">GitHub</a></p>
        </div>

      </div>
    </div>
  )
}
