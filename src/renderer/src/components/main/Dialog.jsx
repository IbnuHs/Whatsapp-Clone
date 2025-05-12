import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography
} from '@material-tailwind/react'
import { useNavigate } from 'react-router'

export const LogoutDialog = ({ open, setOpen }) => {
  function onClose() {
    setOpen(false)
  }
  const navigate = useNavigate()
  const logout = async () => {
    // window.api.logout().then((res) => {
    //   console.log(res)
    // })
    console.log('Berhasil logout')
    setOpen(false)
    navigate('/login')
  }
  return (
    <Dialog size="xs" open={open} className="outline-none border-2 py-4">
      <DialogHeader className="justify-center p-0">
        <Typography variant="h5">Apakah Anda yakin ingin mengakhiri sesi saat ini?</Typography>
      </DialogHeader>
      <DialogBody className="justify-center">
        <Typography variant="paragraph" className="text-center">
          Tindakan ini akan mengeluarkan Anda dari sistem dan memutuskan koneksi WhatsApp. Tetap
          Lanjutkan?
        </Typography>
      </DialogBody>

      <DialogFooter className="flex justify-center gap-4 p-0">
        <Button
          type="button"
          variant="text"
          color="green"
          onClick={logout}
          className="border-2 border-green-800 hover:bg-green-800 hover:text-white"
          size="sm"
        >
          Iya
        </Button>
        <Button
          type="button"
          variant="text"
          color="red"
          className="border-2 border-red-800 hover:bg-red-800 hover:text-white"
          onClick={onClose}
          size="sm"
        >
          Tidak
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
