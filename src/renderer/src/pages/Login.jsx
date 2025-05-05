import React, { useEffect, useState } from 'react'
import { MdCall } from 'react-icons/md'
import { HiDotsVertical } from 'react-icons/hi'
import { FaGear } from 'react-icons/fa6'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { QRCodeSVG } from 'qrcode.react'

export const Login = () => {
  const [qrCode, setQRcode] = useState(null)
  useEffect(() => {
    // console.log(window.electron)
    window.electron.ipcRenderer.on('qr', (event, qr) => {
      setQRcode(qr)
      console.log('tes')
      // console.log(qr)
    })
    // console.log('tes')
  }, [])
  return (
    <div className="h-screen relative flex flex-col justify-between">
      <div className="h-[30%] bg-[#128c7e] p-4">
        <div className="flex gap-2">
          <div className="border-2 flex items-center justify-center p-1 rounded-full bg-[#25d366]">
            <MdCall className="text-white" />
          </div>
          <h3 className="font-semibold text-white">Whatsapp Clone</h3>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#00000038] flex justify-center items-center">
        <div className="m-auto bg-white h-[70vh] w-[85vw] shadow-xl px-16 py-20 gap-5 flex items-center pt-10">
          <div className="">
            <h2 className="text-xl">
              To Use This App On Your Computer, must be login your Whatsapp First
            </h2>
            <ul className="list-decimal mt-8 pl-4 font-semibold flex flex-col gap-2">
              <li>Open Whatsapp on Your Phone</li>
              <li>
                <span>
                  Tap Menu
                  <HiDotsVertical className="inline bg-gray-500 rounded-md text-white p-[2px] mx-2" />
                  or Settings
                  <FaGear className="inline bg-gray-500 rounded-md text-white p-[2px] mx-2" /> and
                  select Whatsapp Web
                </span>
              </li>
              <li>Point your phone to this screen to capture the code</li>
            </ul>
          </div>
          <div className="min-w-[200px] w-[200px] flex justify-center items-center aspect-square min-h-[200px]">
            {qrCode ? (
              <QRCodeSVG value={qrCode} size={200} />
            ) : (
              <AiOutlineLoading3Quarters className="text-[70px] w-full animate-spin" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
