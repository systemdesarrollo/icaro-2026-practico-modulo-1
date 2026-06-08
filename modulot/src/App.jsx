import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import HeaderGeneral from './components/HeaderGeneral';
import MainFirst from './components/MainFirst';
import MainSecond from './components/MainSecond';
import FooterGeneral from './components/FooterGeneral';

import BannerPublicidad from './context/BannerPublicidad';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderGeneral/>
       <BannerPublicidad/>

       <MainFirst/>
       <MainSecond/>

      <FooterGeneral/>
    </>
  )
}

export default App
