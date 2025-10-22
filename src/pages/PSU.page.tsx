import { useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { getPSUs } from "../app/queryClient/api";
import type { PSU } from '../app/queryClient/api';
import './styles/component.page.css'

export function PSUPage() {
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery<PSU[]>({
    queryKey: ["psus"],
    queryFn: getPSUs,
    });

    if (isLoading) return <p>Загрузка блоков питания...</p>;
    if (isError) return <p>Ошибка при загрузке данных.</p>;

    return (
        <>
        <div>
            Эта страница с блоками питания
        </div>
        <button className="button" onClick={() => navigate("/")}>
            Вернуться обратно
        </button>
        <div className="components">
            {data?.map((psu: PSU) => (
                <div className="textBlock">
                    <b>{psu.name}</b> <br />
                    мощность: {psu.powerInWatt} Ватт
                </div>
            ))}
        </div>
        </>
    );
}