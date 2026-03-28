import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/player/Players'

function App() {

  const playersPromise = async () => {
    const res = await fetch("/PlayerInfo.json")
    return res.json()
  }
  const [coin, setCoin] = useState(50000);

  const playerData = playersPromise();
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Players playerData={playerData} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  )
}

export default App
