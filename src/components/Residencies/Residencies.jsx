import React from 'react'
import { Swiper , SwiperSlide , useSwiper} from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                {/* className are in index.css */}
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

            
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card , index)=>{
                        return(
                            <SwiperSlide key = {index}>
                            <div className="flexColStart r-card">
                                {/* FirstChild of r-card*/}
                                <img src={card.image} alt="home" />

                                {/* 2nd Child of r-card*/}
                                <span className='secondaryText'>
                                    <span style={{color:"orange"}}>₹</span>
                                    <span>{card.price}</span>
                                </span>

                                {/* 3rd Child of r-card*/}
                                <span className='primaryText'>{card.name}</span>

                                {/* 4th Child of r-card*/}
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies



const SliderButtons = ()=>{
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    );
}
