import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='flex flex-col gap-y-5 max-w-xl'>
      <input type="text" placeholder="Title.." className="input input-accent w-full" />
      <textarea className="textarea textarea-accent" placeholder=""></textarea>
      <button className='btn btn-primary w-fit'>
        add
      </button>
    </div>
  )
}

export default NewIssuePage
