import React from 'react';
import './App.css'
import NavBar from './components/NavBar';

function App() {
  
  const lista = ['início','produtos','fale conosco'];

  const mostrarLista = () =>{
    console.log(lista);
  }

  return ( 
    <>

    <NavBar itens={lista} cordafonte='purple'>
      {['portfólio','cases de sucesso','biografia','contato']}
    </NavBar>
    <button onClick={mostrarLista}>mostrar lista</button>  
    </>
  );
}

export default App
