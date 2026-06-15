import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// importacion desusturada de routers 
import { BrowserRouter, Route, Routes } from "react-router-dom";
// app principal
import App from './App.jsx'
// header menu + footer
import HeaderGeneral from './components/HeaderGeneral.jsx';
import FooterGeneral from './components/FooterGeneral.jsx';
// pagina principal
import MainFirst from './pages/MainFirst.jsx';
import MainSecond from './pages/MainSecond.jsx';
// el resto de los formularios o componentes
import SistemasServicios from './pages/SistemasServicios.jsx';
import SistemasProductos from './pages/SistemasProductos.jsx';
import SistemasDetalles from './pages/SistemasDetalles.jsx';
import SistemasBind from './components/SistemasBind.jsx';
import Layouts from './components/Layouts.jsx';
import ContactoBind from './components/ContactoBind.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
{/*    <App />   */}
    <BrowserRouter>
    
      <Routes>

        {/* pagina principal */}
        <Route path='/' element={<App />}/>
        <Route path='/menugeneral' element={<HeaderGeneral />}/>

        <Route path='/layouts' element={<Layouts />}/>

        <Route path='/mainfirst' element={<MainFirst />}/>
        <Route path='/mainsecond' element={<MainSecond />}/>
   
        {/* pagina de sistemas */}
        <Route path='/sistemasservicios' element={<SistemasServicios />}/>
        <Route path='/sistemasproductos' element={<SistemasProductos />}/>
        <Route path='/sistemasdetalles' element={<SistemasDetalles />}/>
       
        <Route path='/sistemasbind' element={<SistemasBind />}/>
        <Route path='/contactobind' element={<ContactoBind />}/>

        {/* Footer General */}
        <Route path='/footergeneral' element={<FooterGeneral />}/>

      </Routes>
    
    </BrowserRouter>

  </StrictMode>,
)
