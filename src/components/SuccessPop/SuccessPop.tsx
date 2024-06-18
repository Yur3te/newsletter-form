import React from 'react'

import successIcon from '../../assets/images/icon-success.svg'

export const SuccessPop: React.FC<FormProps> = ({isEmailSet}) => {
  return (
    <div className='bg-white flex flex-col w-full h-full p-6 sm:h-auto sm:px-16 sm:py-12 sm:w-lg sm:rounded-3xl sm:border-black sm:border-2'>
        <img src={successIcon} alt="icon" className='w-14 mt-28 sm:mt-0' />
        <h1 className='text-4xl sm:text-6xl font-semibold py-7'>Thanks for subscribing!</h1>
        <p className='text-md font-semibold'>A confirmation email has been sent to <b>ash@loremcompany.com. </b>
        Please open it and click the button inside to confirm your subscription.</p>
        <button onClick={() => {isEmailSet(false)}} className="mt-auto justify-self-end bg-blue-950 p-4 rounded-xl mb-5 sm:mb-6 sm:mt-11 text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-500">
            Dissmiss message
      </button>
    </div>
  )
}
