import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getVideocards } from '../app/queryClient/api';
import type { Videocard } from '../app/queryClient/api';
import './styles/component.page.css'

export function VideocardPage() {
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery<Videocard[]>({
        queryKey: ["videocard"],
        queryFn: getVideocards,
    });

    return (
        <>
        <div>
            Эта страница с видеокартами 
        </div>
        <button className="button" onClick={() => navigate("/")}>
            Вернуться обратно
        </button>
        <div className="components">
            {isLoading ? (<p>Загрузка видеокарт...</p>) : isError ? (<p>Ошибка при загрузке данных.</p>) : 
            data?.map(videocard => (
                <div className="textBlock">
                    <b>{videocard.name}</b> <br />
                    архитектура: {videocard.architecture} <br />
                    гигабайт памяти: {videocard.VRAM}
                </div>
            ))}
        </div>
        </>
    );
}