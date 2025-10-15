import { useNavigate } from 'react-router-dom';
import './styles/processor.page.css'

export function ProcessorPage() {
    const navigate = useNavigate();

    const processors = [
        {name: "intel core i7", cores: 12, architecture: "raptorLake"},
        {name: "intel core i5", cores: 8, architecture: "raptorLake"},
        {name: "intel core i3", cores: 4, architecture: "raptorLake"},
        {name: "ryzen 5 5600", cores: 6, architecture: "zen3"},
        {name: "ryzen 3 3100", cores: 4, architecture: "zen1+"},
    ];
    return (
        <>
        <div>
            Эта страница с процессорами
        </div>
        <button className="button" onClick={() => navigate("/")}>
            Вернуться обратно
        </button>
        <div className="components">
            {processors.map(processor => (
                <div className="textBlock">
                    <b>{processor.name}</b> <br />
                    архитектура: {processor.architecture} <br />
                    кол-во ядер: {processor.cores}
                </div>
            ))}
        </div>
        </>
    );
}