import { Card } from '@material-tailwind/react'
import React from 'react'

export const Action = () => {
  return (
    <Card className="w-[80%] mx-auto rounded-md flex flex-row justify-around p-10 bg-gray-300">
      <button type="button" className="border-2 border-gray-600 rounded-md px-2 bg-gray-200">
        Show Data
      </button>
      <button type="button" className="border-2 border-gray-600 rounded-md px-2 bg-gray-200">
        Show Data
      </button>
      {/* <button>Download</button> */}
    </Card>
  )
}
