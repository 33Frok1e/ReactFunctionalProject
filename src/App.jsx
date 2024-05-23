import React, { useState } from 'react'
import Cards from './components/Cards';
import Form from './components/Form';

function App() {

  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data)=>{
    setUsers([...users, data])
  }

  const handleRemove = (id) => {
    console.log(id)
    setUsers(()=>users.filter((item, index)=>index != id))
  }

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
        <div className="mx-auto container">
          <Cards handleRemove={handleRemove} users={users} />
          <Form handleFormSubmitData={handleFormSubmitData} />
        </div>
      </div>
    </>
  )
}

export default App;