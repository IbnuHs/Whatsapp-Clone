import React, { useEffect, useState } from 'react'
import { Card, Typography, List, ListItem, ListItemPrefix, Chip } from '@material-tailwind/react'
import { FaClipboardCheck } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'

export const Sidebar = () => {
  let [isOnline, setOnline] = useState(navigator.onLine)
  useEffect(() => {
    const updateStatus = () => setOnline(navigator.onLine)
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
        <Typography variant="h5" color="white">
          Whatsapp Clone
        </Typography>
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
      <List className="flex justify-between h-full mb-2">
        <ListItem className="font-semibold text-white hover:bg-[#ece5dd]" color="white">
          <ListItemPrefix>
            <FaClipboardCheck />
          </ListItemPrefix>
          Check Contact
        </ListItem>
        <ListItem className="font-semibold text-white hover:bg-[#ece5dd]" color="white">
          <ListItemPrefix>
            <IoLogOut />
          </ListItemPrefix>
          Logout
        </ListItem>
      </List>
      {/* <Footer /> */}
    </Card>
  )
}
