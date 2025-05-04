import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@material-tailwind/react'
import { FaRegFileExcel } from 'react-icons/fa6'
import { PiUserCheckBold } from 'react-icons/pi'
import useExcel from '../../hooks/useExcel'

export const Action = ({ setShow, setData }) => {
  const { readExcel } = useExcel()
  const fileinpuRef = useRef(null)
  let [files, setFiles] = useState(null)
  let [checked, setChecked] = useState(false)
  function clickButton() {
    fileinpuRef.current.click()
  }
  function openTable() {
    setShow(true)
  }
  async function checkNumber() {
    setChecked(true)
    const excel = await readExcel(files)
    setData(excel)
  }
  function onUpload(e) {
    setFiles(e.target.files[0])
    setChecked(false)
    setShow(false)
  }
  useEffect(() => {
    console.log(checked)
  }, [checked])
  return (
    <div className="flex flex-col bg-[#F7F7F7] shadow-md border-gray-400 rounded-md w-[80%] mx-auto p-4">
      <div className="border-2 bg-white flex items-center gap-2 mx-auto border-gray-400  w-full pl-2 justify-between rounded-lg">
        <input
          type="file"
          className="hidden"
          accept=".xlsx"
          onChange={onUpload}
          ref={fileinpuRef}
        />
        <FaRegFileExcel className="text-gray-600" />
        <span className="inline-block w-full text-[14px] text-gray-600">
          {files ? files.name : 'Upload Your files here...'}
        </span>
        <Button
          size="sm"
          color="gray"
          className="bg-[#128C7E] hover:bg-[#258d62]"
          onClick={clickButton}
        >
          Add
        </Button>
      </div>
      <div className={`${checked === true ? 'flex' : 'hidden'} justify-center gap-4 mt-4`}>
        <button
          type="button"
          className="border-none border-gray-800 rounded-md text-white text-[14px] py-1 px-3 bg-[#128C7E] transition-all  hover:scale-[1.03]"
        >
          Download
        </button>
        <button
          type="button"
          className="border-none  rounded-md text-white py-1 px-3 border-gray-800 text-[14px] bg-[#128C7E] transition-all hover:scale-[1.03]"
          onClick={openTable}
        >
          Show Data
        </button>
      </div>
      <div className={`mx-auto mt-4 ${files && !checked ? 'inline-block' : 'hidden'}`}>
        <button
          type="button"
          className="flex items-center gap-2 bg-[#128C7E] text-white text-[14px] rounded-md py-1 px-4 hover:scale-[1.02] transition-all"
          onClick={checkNumber}
        >
          <PiUserCheckBold /> Check Number
        </button>
      </div>
    </div>
  )
}
