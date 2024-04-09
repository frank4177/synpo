import React from 'react'
import { Button } from '../ui/button'

interface IRefetchDataProps {
  refetch?: () => Promise<void>;
}

const RefetchData = ({refetch}: IRefetchDataProps) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
        <span>Something went wrong.</span>
        <Button onClick={refetch}>Try again</Button>
    </div>
  )
}

export default RefetchData