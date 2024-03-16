'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {ssr: false})
import "easymde/dist/easymde.min.css";
import Loading from '@/app/loading';
const NewIssuePage = () => {
  return (
    <div className='flex flex-col gap-y-5 max-w-xl' >
        <input type="text" placeholder="Title.." className="input input-bordered w-full max-w-xs" />

        <Suspense fallback={<Loading />}>
          <SimpleMDE
              options={{spellChecker:false}}
              className="textarea textarea-bordered" placeholder="Bio">
          </SimpleMDE>
        </Suspense>
        <button className='btn btn-primary w-fit'>
          Add
      </button>
    </div>
  )
}

export default NewIssuePage
