import React from 'react';
import './app.css';
import { Navbar } from './components/navbar/Navbar';
import { Main } from './components/main/Main';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';



const App: React.FC = () => {
  return (
    <>
     <Navbar/>
     <Home/>
     <Main/>
     <Footer/>
    </>
  );
};

export default App;
