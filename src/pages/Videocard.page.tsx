import { useNavigate } from 'react-router-dom';
import './styles/component.page.css'

export function VideocardPage() {
    const navigate = useNavigate();

    const videocards = [
        {name: "rx 7600", DRAM: 8, architecture: "RDNA"},
        {name: "gtx 1060", DRAM: 6, architecture: "Ampere"},
        {name: "gtx 1660 super", DRAM: 6, architecture: "Turing"},
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
                    архитектура: {videocard.architecture} <br />
                    гигабайт памяти: {videocard.DRAM}
                </div>
            ))}
        </div>
        </>
    );
}