import React from 'react'
import { Card, Typography, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import { FaClipboardCheck } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'

export const Sidebar = () => {
  return (
    <Card className="h-screen border max-w-[16rem] rounded-none bg-[#3b4252] border-gray-700 ">
      <div className="p-4 border-b">
        <Typography variant="h5" color="white">
          Whatsapp Clone
        </Typography>
      </div>
      <List className="flex justify-between h-full mb-2">
        <ListItem className="font-semibold text-white" color="white">
          <ListItemPrefix>
            <FaClipboardCheck />
          </ListItemPrefix>
          Check Contact
        </ListItem>
        <ListItem className="font-semibold text-white" color="white">
          <ListItemPrefix>
            <IoLogOut />
          </ListItemPrefix>
          Logout
        </ListItem>
      </List>
    </Card>
  )
}
