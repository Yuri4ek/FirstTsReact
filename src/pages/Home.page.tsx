import { useNavigate } from 'react-router-dom';
//import { useState } from 'react'
import './styles/home.page.css'

export function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="container">
        <button className="component" onClick={() => navigate('/processor')}>
            <h2>процессор</h2>
        </button>
        <button className="component" onClick={() => navigate("/videocard")}>
            <h2>видеокарта</h2>
        </button>
        <button className="component" onClick={() => navigate("/PSU")}>
            <h2>блок питания</h2>
        </button>
    </section>
    
  );
}