import CaseBanner from '@/components/caseStudiesComponents/CaseBanner'
import ImageGallery from '@/components/caseStudiesComponents/ImageGallery'
import MovingBanner from '@/components/caseStudiesComponents/MovingBanne'
import React from 'react'

const CaseStudies = () => {
  return (
    <div>
        <MovingBanner />
        <CaseBanner />
        <ImageGallery />
    </div>
  )
}

export default CaseStudies