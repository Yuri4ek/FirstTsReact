import { useNavigate } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
import './styles/home.page.css'

export function HomePage() {
  const navigate = useNavigate();

  const countAtom = atom(0);
  const [count, updateCount] = useAtom(countAtom);
  console.log(count);

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
        <button className="component" onClick={() => updateCount(count + 1)}>
            {count}
        </button>
    </section>
    
  );
}