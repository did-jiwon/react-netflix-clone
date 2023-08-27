import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export default function DetailPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    // 의존성 배열에 있는 변수가 변경될 때마다 useEffect함수가 실행되는 것임.
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/movie/${movieId}`);
            setMovie(request.data);
        }
        fetchData();
    }, [movieId]);

    if (!movie) return <div>...loading</div>;

    return (
        <section>
            <img
                className="modal__poster-img"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="poster"
            />
        </section>
    );
}