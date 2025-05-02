import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Features = () => {
    useGSAP(() => {
        gsap.to('#features_title', { y: 0, opacity: 1 })
    }, [])

  return (
    <section className='h-full common-padding bg-zinc relative overlow-hidden'>
        <div className='screen-max-width'>
        <div className='mb-12 w-full'>
            <h1 id='features_title' className='section-heading'>
               Explore the full story. </h1>

        </div>
        </div>
    </section>
  )
}

export default Features