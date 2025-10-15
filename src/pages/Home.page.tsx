import { useNavigate } from 'react-router-dom';
//import { useState } from 'react'
import './styles/home.page.css'

export function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="container">
        <div >
        <button className="component" onClick={() => navigate('/processor')}>
            <div className="text">процессор</div>
        </button>
        <button className="component" onClick={() => navigate("/videocard")}>
            <div className="text">видеокарта</div>
        </button>
        <button className="component" onClick={() => navigate("/PSU")}>
            <div className="text">блок питания</div>
        </button>
    </div>
    </section>
    
  );
}