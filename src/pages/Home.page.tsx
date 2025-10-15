import { useNavigate } from 'react-router-dom';
//import { useState } from 'react'
import './styles/home.page.css'

export function HomePage() {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  }
  return (
    <>
    <div className="container">
      <div>
        <button className="component" onClick={() => handleClick("/processor")}>
            <div className="text">процессор</div>
        </button>
      </div>
      <div>
        <button className="component" onClick={() => handleClick("/videocard")}>
            <div className="text">видеокарту</div>
        </button>
      </div>
      <div>
        <button className="component" onClick={() => handleClick("/PSU")}>
            <div className="text">блок питания</div>
        </button>
      </div>
    </div>
    </>
  );
}