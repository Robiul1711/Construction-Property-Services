import CaseBanner from '@/components/caseStudiesComponents/CaseBanner'
import ImageGallery from '@/components/caseStudiesComponents/ImageGallery'
import MovingBanner from '@/components/caseStudiesComponents/MovingBanne'
import { useApiQuery } from '@/hooks/apiQuery'
import React from 'react'
import { useParams } from 'react-router-dom'

const CaseStudies = () => {
  const {id}=useParams();
    const { data, isLoading } = useApiQuery({
    queryKey: ["portfolio-details"], // Just the base key
    url: `/portfolios/${id}`,//portfolios,
  
  });

  return (
    <div>
        <MovingBanner  />
        <CaseBanner data={data?.data}/>
        <ImageGallery data={data?.data}/>
    </div>
  )
}

export default CaseStudies