import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmitData}) {
    const {register, handleSubmit, reset} = useForm()

    const handleSubmitData = handleSubmit((data) => {
      handleFormSubmitData(data)
      reset();
    })
  return (
    <div className='mt-10 flex gap-10 justify-center'>
        <form className='flex gap-10' onSubmit={handleSubmitData} action="">
            <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Name' />
            <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Email' />
            <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image URL' />
            <input className='bg-blue-600 cursor-pointer rounded-md px-5 py-1 text-white font-semibold' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form