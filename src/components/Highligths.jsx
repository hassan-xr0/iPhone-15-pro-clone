import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import VideoCarousel from './VideoCarousel'


const Highligths = () => {
    useGSAP(()=>{
    gsap.to('#title', {
        opacity:1,
        y:0,
        delay:2,
    })
    })
  return (
    <section className='w-screen bg-zinc h-full overflow-hidden common-padding' id='highligths'>
        <div className="screen-max-width">
            <div className='mb-12 w-full items-end justify-between'>
                <h1 className='section-heading' id='title'>Gets the highlights.</h1>
            </div>

            <VideoCarousel/>
        </div>
    </section>
  )
}

export default Highligths