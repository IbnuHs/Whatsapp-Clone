import React, { useEffect, useState } from 'react'
import { Card, Typography, List, ListItem, ListItemPrefix, Chip } from '@material-tailwind/react'
import { FaClipboardCheck } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'

export const Sidebar = ({ isLogin, setIsLogin, setOpen }) => {
  let [isOnline, setOnline] = useState(navigator.onLine)
  const [userInfo, setUserInfo] = useState()
  function onOpen() {
    setOpen(true)
    console.log('logout')
  }
  async function getuserInfo() {
    window.electron.ipcRenderer.on('user-info', (e, data) => {
      console.log(data)
      setUserInfo(data)
    })
  }
  useEffect(() => {
    const updateStatus = () => setOnline(navigator.onLine)
    getuserInfo()
    // if (isLogin) {
    // }
    window.addEventListener('online', updateStatus)
    window.addEventListener('offline', updateStatus)

    return () => {
      window.removeEventListener('online', updateStatus)
      window.removeEventListener('offline', updateStatus)
    }
  }, [])
  return (
    <Card className="h-screen border max-w-[16rem] rounded-none bg-[#075e54] border-gray-700 ">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="">
          <Typography variant="h5" color="white">
            {userInfo && userInfo.username}
          </Typography>
          <div className="flex items-center gap-2">
            <h6 className="text-[12px] text-white">{userInfo && userInfo.numberphone}</h6>
          </div>
        </div>
        <div className="absolute right-2">
          {isOnline ? (
            <Chip
              variant="filled"
              color="green"
              size="sm"
              value="Online"
              className="text-[8px] text-white w-fit h-fit"
              icon={
                <span className="mx-auto mt-1.5 block h-1 w-1 rounded-full p-0 bg-green-900 content-['']" />
              }
            />
          ) : (
            <Chip
              variant="filled"
              color="red"
              size="sm"
              value="Offline"
              className="text-[8px] text-white w-fit h-fit"
              icon={
                <span className="mx-auto mt-1.5 block h-1 w-1 rounded-full p-0 bg-red-900 content-['']" />
              }
            />
          )}
        </div>
      </div>
      <List className="flex justify-between h-full mb-0">
        <ListItem className="font-semibold text-white hover:bg-[#ece5dd]" color="white">
          <ListItemPrefix>
            <FaClipboardCheck />
          </ListItemPrefix>
          Check Contact
        </ListItem>
        <button type="button" onClick={onOpen}>
          <ListItem className="font-semibold text-white hover:bg-[#ece5dd]" color="white">
            <ListItemPrefix>
              <IoLogOut />
            </ListItemPrefix>
            Logout
          </ListItem>
        </button>
      </List>
      {/* <div className="px-4 py-2">
        <h6 className="text-white text-[14px] font-bold">Hello, Hasyim</h6>
      </div> */}

      {/* <Footer /> */}
    </Card>
  )
}
