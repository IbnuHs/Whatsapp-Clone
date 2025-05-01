import React, { useRef } from 'react'
import { Footer } from '../main/footer'
import { Input, Button } from '@material-tailwind/react'
import { IoCloudUpload } from 'react-icons/io5'
import { Table } from './Table'
import { Action } from './ACtion'

export const CheckContact = () => {
  const fileinpuRef = useRef(null)
  function clickButton() {
    fileinpuRef.current.click()
  }
  return (
    <section className="w-full max-h-screen overflow-hidden flex flex-col justify-between bg-[#ece5dd] px-10 pt-10 box-border">
      <div className="mx-auto h-[90%] box-border w-full flex flex-col gap-2">
        <div className="border-2 flex items-center gap-2 max-w-[90%] mx-auto border-gray-600 bg-gray-300 w-full py-1 justify-between rounded-lg px-2">
          <input type="file" className="hidden" ref={fileinpuRef} />
          <span className="inline-block w-full text-sm text-gray-700">
            Upload Your files here...
          </span>
          <Button
            size="sm"
            color="gray"
            className="bg-black hover:bg-gray-800"
            onClick={clickButton}
          >
            Add
          </Button>
        </div>
        <Action />
        {/* <Table /> */}
      </div>
      <Footer />
    </section>
  )
}
