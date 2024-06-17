import React from 'react'

import successIcon from '../../assets/images/icon-success.svg'

export const SuccessPop: React.FC<FormProps> = ({isEmailSet}) => {
  return (
    <div className='bg-white flex flex-col px-16 py-12 w-lg rounded-3xl border-black border-2'>
        <img src={successIcon} alt="icon" className='w-14' />
        <h1 className='text-6xl font-semibold py-7'>Thanks for subscribing!</h1>
        <p className='text-md font-semibold'>A confirmation email has been sent to <b>ash@loremcompany.com. </b>
        Please open it and click the button inside to confirm your subscription.</p>
        <button onClick={() => {isEmailSet(false)}} className="bg-blue-950 p-4 rounded-xl mb-6 mt-11 text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-500">
            Dissmiss message
      </button>
    </div>
  )
}
