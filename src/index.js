// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//ESCH
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Home from './pages/home'
import APropos from './pages/apropos'
import LogementDetails from './pages/LogementDetails';
import Error from './pages/404'
import Header from './components/Header'
import Footer from './components/Footer'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/logement/:id" element={<LogementDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode> //,
)