import React, { useRef } from 'react'
import { Footer } from '../main/footer'
import { Input, Button } from '@material-tailwind/react'
import { IoCloudUpload } from 'react-icons/io5'
import { Table } from './Table'

export const CheckContact = () => {
  const fileinpuRef = useRef(null)
  function clickButton() {
    fileinpuRef.current.click()
  }
  return (
    <section className="border-2 w-full max-h-screen box-content border-purple-700 flex flex-col justify-between bg-[#ece5dd] px-10 pt-10">
      <div className="mx-auto h-full w-full">
        <div className="border-2 flex items-center gap-2 max-w-[90%] mx-auto border-gray-600 w-full py-1 justify-between rounded-lg px-2">
          <input type="file" className="hidden" ref={fileinpuRef} />
          <span className="inline-block w-full text-gray-500">Your Text</span>
          <Button
            size="sm"
            color="gray"
            className="bg-black hover:bg-gray-800"
            onClick={clickButton}
          >
            Add
          </Button>
        </div>
        <Table />
      </div>
      <Footer />
    </section>
  )
}
