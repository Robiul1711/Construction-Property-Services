import React from 'react'
import q from "../../assets/images/q.png"
const QualityAndCare = () => {
  return (
    <div className='section-padding-x section-padding-y '>
        <div className='relative'>
        <img src={q} alt="" />
        <div className='absolute text-white top-50 left-8 max-w-[1000px]'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-marcellus'>“At Sani Construction, we turn your vision into a well-crafted home built with purpose, quality, and care.”</h1>
        </div>
        </div>
    </div>
  )
}

export default QualityAndCare