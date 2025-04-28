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
    <section className="border w-full h-screen flex flex-col justify-between bg-[#ece5dd] px-20 pt-10">
      {/* <div className=" mx-auto h-20 w-[80%] border-[3px] rounded-md border-gray-700 border-dashed p-1 hover:shadow-lg hover:border-black transition-all duration-150">
        <madiv className=" bg-gray-200 flex items-center justify-center cursor-pointer h-full rounded-md">
          <div className="flex items-center justify-center flex-col">
            <IoCloudUpload className="text-gray-500 text-4xl" />
            <h4 className="font-semibold text-gray-500">Upload</h4>
          </div>
        </madiv>
      </div> */}
      <div className="mx-auto w-full">
        <div className="border-2 flex items-center gap-2 max-w-[80%] mx-auto border-gray-600 w-full py-1 justify-between rounded-lg px-2">
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
