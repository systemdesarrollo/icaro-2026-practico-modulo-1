import React, { useState, useEffect } from 'react';

// Cambiamos la declaración de flecha por una función tradicional
export default function BannerPublicidad() {
  //debugger
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Iniciamos el temporizador de 5 segundos
    const timer = setTimeout(() => {
      setVisible(false);
      console.log("Publicidad cerrada automáticamente");
    }, 5000);

    // Función de limpieza
    return () => clearTimeout(timer);
  }, []); // [] para que corra solo una vez al cargar la página

  // Si ya no es visible, no dibujamos nada
  if (!visible) return null;

  return (
    <div style={estilos.overlay}>
      <div style={estilos.modal}>
        <h2>¡Oferta Especial!</h2>
        <p>En equipos armados ...</p>
        <button onClick={() => setVisible(false)}>Cerrar ahora</button>
      </div>
    </div>
  );
}

// Los estilos se mantienen igual abajo
const estilos = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(155, 149, 149, 0.7)',            //'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'black'
  }
   
};