import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import HeaderGeneral from './components/HeaderGeneral';
import MainFirst from './pages/MainFirst';
import MainSecond from './pages/MainSecond';
import FooterGeneral from './components/FooterGeneral';
import BannerPublicidad from './components/BannerPublicidad';
import Layouts from './components/Layouts';

//import Layouts from './components/Layouts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    
      <Layouts>
        <BannerPublicidad/>

        <MainFirst/>
        <MainSecond/>

      </Layouts>
  
    </>
  )
}

export default App
