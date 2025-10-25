import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProcessors } from '../app/queryClient/api';
import type { Processor } from '../app/queryClient/api';
import './styles/component.page.css'

export function ProcessorPage() {
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery<Processor[]>({
        queryKey: ["videocards"],
        queryFn: getProcessors,
    });

    return (
        <>
        <div>
            Эта страница с процессорами
        </div>
        <button className="button" onClick={() => navigate("/")}>
            Вернуться обратно
        </button>
        <section className="components">
            {isLoading ? (<p>Загрузка процессоров...</p>) : isError ? (<p>Ошибка при загрузке данных.</p>) :
            data?.map(processor => (
                <div className="textBlock">
                    <b>{processor.name}</b> <br />
                    архитектура: {processor.architecture} <br />
                    кол-во ядер: {processor.cores}
                </div>
            ))}
        </section>
        </>
    );
}