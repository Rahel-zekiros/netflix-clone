import React from 'react'
import style from './SlideShow.module.css'
import MovieCard from '../MovieCard/MovieCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


function SlideShow({ title, movies = [] }) {  
    console.log(movies)
    return (
        <div>
            <h2 className={style.title}>{title}</h2>
            <div className={style.Row}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={5.8}
                     breakpoints={{
            480: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 4, slidesPerGroup: 4 },
            1024: { slidesPerView: 6, slidesPerGroup: 6 }, 
          }}

                >
                    {
                        movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieCard movie={movie} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div >
    );
}

export default SlideShow
