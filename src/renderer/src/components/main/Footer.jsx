import React from 'react'
import { Typography } from '@material-tailwind/react'

export const Footer = () => {
  return (
    <div className="px-6 py-4">
      <Typography color="black" className="text-xs font-semibold text-center">
        &copy; HasyimDev
      </Typography>
      <Typography color="black" className="text-xs text-center font-normal   ">
        This app is powered by whatsapp-web.js library (MIT License)
      </Typography>
    </div>
  )
}
