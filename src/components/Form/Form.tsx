import React from 'react'

import { ListItems } from '../ListItems/ListItems'

import icon from '../../assets/images/icon-list.svg'
import { FormInput } from '../FormInput/FormInput'

export const Form: React.FC<FormProps> = ({isEmailSet}) => {
  return (
    <div className='flex items-center flex-col text-xl'>
      <h1 className='text-6xl font-bold mr-12'>Stay updated!</h1>

      <p className='w-4/5 py-6'>Join 60,000+ product managers receiving monthly updates on:</p>

      <div className='w-4/5'>
        {ListItems.map(item => (
          <div key={item.id} className='flex'>
            <img src={icon} alt="icon" className='mr-4' />
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <FormInput isEmailSet={isEmailSet}/>
    </div>
  )
}
