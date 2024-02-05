import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import PlayerCard from "./Components/PlayerCard";
import {players} from "./Components/PlayerList";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PlayerList = () => {
    return (

    <div style={{ 
        display: 'flex',
        justifyContent: 'space-between', 
        backgroundColor: 'transparent', 
        margin: '2rem',
        padding: '2rem',
    }}
    >
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={3}
    spaceBetween={15}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >

    { players.map((player, index) => (

        <SwiperSlide key={index}>
            <PlayerCard {...player} />
        </SwiperSlide>
    ))}
    </Swiper>
    </div>
    );
};

export default PlayerList;