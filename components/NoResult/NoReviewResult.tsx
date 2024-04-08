import Image from 'next/image'
import React from 'react'
import { LeaveReviewButton } from '../Buttons/LeaveReviewButton'

const NoReviews = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
        <Image src="/images/no-review.svg" width={323} height={255} alt='no review'/>
        <span>Oops! No reviews yet.</span>
        <LeaveReviewButton/>
    </div>
  )
}

export default NoReviews