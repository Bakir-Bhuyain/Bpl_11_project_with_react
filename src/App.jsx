import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/player/Players'

function App() {

  const playersPromise = async() =>{
    const res = await fetch("/PlayerInfo.json")
    return res.json()
  }

  const playerData = playersPromise();
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Players playerData={playerData}></Players>
      </Suspense>
    </>
  )
}

export default App
