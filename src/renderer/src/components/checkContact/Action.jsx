import { Card } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import { Button } from '@material-tailwind/react'

export const Action = () => {
  const fileinpuRef = useRef(null)
  let [files, setFiles] = useState(null)
  let data = ''
  function clickButton() {
    fileinpuRef.current.click()
  }
  function onUpload(e) {
    setFiles(e.target.files[0])
    console.log(e.target.files[0])
  }
  return (
    <div className="flex flex-col bg-transparent bg-gray-500 border-2 shadow-sm border-gray-400 rounded-md p-4">
      <div className="border-2 bg-white flex items-center gap-2 mx-auto border-gray-600  w-full py-1 justify-between rounded-lg px-2">
        <input
          type="file"
          className="hidden"
          accept=".xlsx"
          onChange={onUpload}
          ref={fileinpuRef}
        />
        <span className="inline-block w-full text-sm text-gray-700">
          {files ? files.name : 'Upload Your files here...'}
        </span>
        <Button size="sm" color="gray" className="bg-black hover:bg-gray-800" onClick={clickButton}>
          Add
        </Button>
      </div>
      <div className={`${data ? 'flex' : 'hidden'} justify-center gap-4 p-4`}>
        <button
          type="button"
          className="border-2 border-gray-800 rounded-md text-white px-2 bg-gray-400 transition-all hover:bg-gray-600 hover:border-gray-800"
        >
          Download
        </button>
        <button
          type="button"
          className="border-2  rounded-md text-white px-2 border-gray-800 bg-gray-400 transition-all hover:bg-gray-600 hover:border-gray-800"
        >
          Show Data
        </button>
      </div>
    </div>
  )
}
