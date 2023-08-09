import React from 'react'

const SearchCity= ({ handleSubmit }) => {
  return (
    <form className='mb-3' onSubmit={handleSubmit}>
      <input
        id="city"
        type="text"
        placeholder="Search a city"
        className="text-black p-2 rounded-xl w-auto h-9"
      />
      <button className='bg-slate-50 rounded-xl w-20 h-9' >Search</button>
    </form>
  )
}

export default SearchCity
