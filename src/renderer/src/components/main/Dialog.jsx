import React, { useState } from 'react'
import { Dialog, DialogBody, DialogHeader, Typography } from '@material-tailwind/react'

export const LogoutDialog = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className="">
      <Dialog size="sm" open={open} className="max-w-[60%] outline-none border-2 border-red-500">
        <DialogHeader>Logout?</DialogHeader>
        <DialogBody>Are You Sure Want To logout?</DialogBody>
      </Dialog>
    </div>
  )
}
