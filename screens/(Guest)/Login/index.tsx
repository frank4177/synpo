import GuestContainer from '@/containers/GuestContainer'
import React from 'react'
import LoginForm from './LoginForm'

const LoginScreen = () => {
  return (
    <GuestContainer>
      <div className='h-[90%] flex flex-col  items-center'>
        <LoginForm/>
      </div>
    </GuestContainer>
  )
}

export default LoginScreen