import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className='w-full max-h-96 overflow-auto p-4 flex gap-4 justify-center flex-wrap'>
        {users.map((item, index)=>{
            return <Card handleRemove={handleRemove} id={index} user={item} key={index} />
        })}
    </div>
  )
}

export default Cards