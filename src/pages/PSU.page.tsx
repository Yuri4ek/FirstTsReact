import { useNavigate } from 'react-router-dom';
import './styles/component.page.css'

export function PSUPage() {
    const navigate = useNavigate();

    const videocards = [
        {name: "Powerman ultimate", powerInWatt: 1000},
        {name: "Aerocool KSAS", powerInWatt: 10000},
        {name: "Aerocool Cyclon", powerInWatt: 350},
        {name: "Gigabyte Extreme", powerInWatt: 1200},
    ];
    return (
        <>
        <div>
            Эта страница с видеокартами 
        </div>
        <button className="button" onClick={() => navigate("/")}>
            Вернуться обратно
        </button>
        <div className="components">
            {videocards.map(videocard => (
                <div className="textBlock">
                    <b>{videocard.name}</b> <br />
                    мощность: {videocard.powerInWatt} Ватт
                </div>
            ))}
        </div>
        </>
    );
}