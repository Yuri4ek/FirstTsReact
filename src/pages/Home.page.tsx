import { useNavigate } from 'react-router-dom';
//import { useState } from 'react'
import './styles/home.page.css'

export function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/processor');
  }
  return (
    <>
    <div>
      <button className="component" onClick={handleClick}>
          <div className="text">выбрать процессор</div>
      </button>
    </div>
    </>
  );
}