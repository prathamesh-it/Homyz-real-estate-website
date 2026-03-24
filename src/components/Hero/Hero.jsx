import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi';
import { useState , useEffect} from 'react';
import {motion} from 'framer-motion';

const Hero = () => {

const useCounter = (start, end, duration) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const current = Math.floor(start + (end - start) * percentage);
      setCount(current);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return count;
};

  const count1 = useCounter(8800, 9900, 1000);
  const count2 = useCounter(1950, 2000, 1000);
  const count3 = useCounter(0, 28, 1000);


  return (
    <section className='hero-wrapper'>
      <div className="paddings innerWidth flexCenter hero-container">

      {/* Left side */}
      <div className="flexColStart hero-left">
        <div className="hero-title">
          {/* that orange circle on discover */}
          <div className="orange-circle"/>
          <motion.h1
          initial={{y :"2rem" , opacity :0}}
          animate={{y :0 , opacity :1}}
          transition={{
            duration:2,
            type:"spring"
          }}
          >
            Discover <br/>Most Suitable <br/>Property
          </motion.h1>
        </div>

        <div className="flexColStart hero-des">
          <span className='secondaryText'>
            Find a variety of properties that suit you very easily</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
        </div>

        <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type='text'/>
            <button className="button">Search</button>
        </div>

        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>{count1}
              <span>+</span>
            </span>
            {/* Index.css class secondayText */}
            <span className='secondaryText'>Premium Products</span>  
          </div>
          <div className="flexColCenter stat">
            <span>{count2}
              <span>+</span>
            </span>
            <span className='secondaryText'>Happy Customers</span>  
          </div>
          <div className="flexColCenter stat">
            <span>{count3}
              <span>+</span>
            </span>
            <span className='secondaryText'>Award Winnings</span>  
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flexCenter hero-right">
          <motion.div 
          initial={{x:"7rem" , opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{
            duration:2,
            type:"spring"
          }}
          className="image-container">
            <img src="./hero-image.png" alt="" />
          </motion.div>

      </div>

      </div>
    </section>
  )
}

export default Hero
