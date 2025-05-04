import React, { useEffect, useState } from 'react'
import { Card, IconButton, Typography } from '@material-tailwind/react'
import { IoClose } from 'react-icons/io5'
import useExcel from '../../hooks/useExcel'

export const Table = ({ setShow, data, showTable }) => {
  const headTable = ['Nama', 'No Hp', 'Status']
  function closeTable() {
    setShow(false)
  }
  const example = [
    {
      nama: 'Andi Saputra',
      noHp: '081234567890',
      status: 'valid'
    },
    {
      nama: 'Budi Santoso',
      noHp: '085612345678',
      status: 'tidak valid'
    },
    {
      nama: 'Citra Dewi',
      noHp: '082198765432',
      status: 'valid'
    },
    {
      nama: 'Dina Kurnia',
      noHp: '087812341234',
      status: 'valid'
    },
    {
      nama: 'Eka Prasetya',
      noHp: '089901234567',
      status: 'tidak valid'
    },
    {
      nama: 'Farhan Rizki',
      noHp: '083811223344',
      status: 'valid'
    },
    {
      nama: 'Gina Novita',
      noHp: '081323456789',
      status: 'valid'
    },
    {
      nama: 'Hendra Wijaya',
      noHp: '082244556677',
      status: 'tidak valid'
    },
    {
      nama: 'Irfan Maulana',
      noHp: '085712345678',
      status: 'valid'
    },
    {
      nama: 'Jihan Amelia',
      noHp: '089900112233',
      status: 'tidak valid'
    },
    {
      nama: 'Irfan Maulana',
      noHp: '085712345678',
      status: 'valid'
    },
    {
      nama: 'Jihan Amelia',
      noHp: '089900112233',
      status: 'tidak valid'
    },
    {
      nama: 'Irfan Maulana',
      noHp: '085712345678',
      status: 'valid'
    },
    {
      nama: 'Jihan Amelia',
      noHp: '089900112233',
      status: 'tidak valid'
    },
    {
      nama: 'Jihan Amelia',
      noHp: '089900112233',
      status: 'tidak valid'
    },
    {
      nama: 'Irfan Maulana',
      noHp: '085712345678',
      status: 'valid'
    },
    {
      nama: 'Jihan Amelia',
      noHp: '089900112233',
      status: 'tidak valid'
    },
    {
      nama: 'Jihan Amelia',
      noHp: '089900112233',
      status: 'tidak valid'
    },
    {
      nama: 'Irfan Maulana',
      noHp: '085712345678',
      status: 'valid'
    },
    {
      nama: 'Jihan Amelia',
      noHp: '089900112233',
      status: 'tidak valid'
    },
    {
      nama: 'Jihan Amelia',
      noHp: '089900112233',
      status: 'tidak valid'
    },
    {
      nama: 'Irfan Maulana',
      noHp: '085712345678',
      status: 'valid'
    },
    {
      nama: 'Jihan Amelia',
      noHp: '089900112233',
      status: 'tidak valid'
    }
  ]

  // useEffect(() => {
  //   // const excel = await
  //   if (data) {
  //     console.log(data)
  //   } else {
  //     console.log('Loading...')
  //   }
  // }, [])
  return (
    <Card
      className={`h-full overflow-hidden w-full relative  rounded-md overflow-y-scroll scrollbar-style`}
    >
      {/* <IconButton type="button" variant="text" size="sm" className="absolute z-10 right-0">
        <IoClose className="text-[20px]" />
      </IconButton> */}
      <button
        type="button"
        className="absolute right-0 hover:bg-gray-300 rounded-md transition-all p-1"
        onClick={closeTable}
      >
        <IoClose className="text-[20px]" />
      </button>
      <table className="w-full h-full border-2 min-w-max text-left">
        <thead>
          <tr>
            {headTable.map((i) => (
              <th key={i} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold leading-none"
                >
                  {i}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, index) => {
              const classes = 'py-2'
              return (
                <tr key={index} className="even:bg-blue-gray-50/50 p-4">
                  <td className={` ${classes}  `}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-xs font-semibold px-2 py-0"
                    >
                      {row.nama}
                    </Typography>
                  </td>
                  <td className={` ${classes}`}>
                    <Typography variant="small" color="blue-gray" className="text-xs">
                      {row.noHp}
                    </Typography>
                  </td>
                  <td className={` ${classes} capitalize`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`text-xs font-semibold ${row.status === 'valid' ? 'text-green-700' : 'text-red-700'}`}
                    >
                      {row.status}
                    </Typography>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </Card>
  )
}
