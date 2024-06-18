import React from 'react'

import { ListItems } from '../ListItems/ListItems'

import icon from '../../assets/images/icon-list.svg'
import { FormInput } from '../FormInput/FormInput'

export const Form: React.FC<FormProps> = ({isEmailSet}) => {
  return (
    <div className='flex items-streach flex-col text-xl p-6 sm:p-12 sm:max-w-xl sm:box-border'>
      <h1 className='text-4xl sm:text-6xl font-bold'>Stay updated!</h1>
      <p className='py-6 w-full text-lg sm:text-xl'>Join 60,000+ product managers receiving monthly updates on:</p>
      <div className='w-full'>
        {ListItems.map(item => (
          <div key={item.id} className='flex items-start mt-2'>
            <img src={icon} alt="icon" className='mr-4 mt-1' />
            <p className='text-base sm:text-lg'>{item.content}</p>
          </div>
        ))}
      </div>
      <FormInput isEmailSet={isEmailSet}/>
    </div>
  )
}
