import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth > 760) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    }
  }, [videoSrc]);

  useGSAP(() => {
    gsap.to('#hero', {opacity: 1, delay:1.5, duration: 1, ease: 'power2.inOut'});
    gsap.to('#cta', {opacity: 1, y: -50, delay: 2, duration: 1, ease: 'power2.inOut'});
  }, [])

  return (
    <section className='w-full nav-height bg-black relative'>
    <div className='h-5/6 flex-center flex-col w-full'>
    <p id='hero' className='hero-title'>
    iPhone 15 Pro
    </p>

    <div className='md:w-10/12 w-9/12'>
      <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}> 
        <source src={videoSrc} type='video/mp4' />
      </video>
    </div>
    </div>

    <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
      <a href='#highlights' className='btn'>Buy</a>
      <p className='font-normal text-xl'> From $199/month or $999 </p>
    </div>
    </section>
  )
}

export default Hero