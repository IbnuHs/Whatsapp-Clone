import React from 'react'
import { Card, Typography } from '@material-tailwind/react'

export const Table = (data) => {
  const headTable = ['Nama', 'No Hp', 'Status']
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
    }
    // {
    //   nama: 'Irfan Maulana',
    //   noHp: '085712345678',
    //   status: 'valid'
    // },
    // {
    //   nama: 'Jihan Amelia',
    //   noHp: '089900112233',
    //   status: 'tidak valid'
    // }
    // {
    //   nama: 'Irfan Maulana',
    //   noHp: '085712345678',
    //   status: 'valid'
    // },
    // {
    //   nama: 'Jihan Amelia',
    //   noHp: '089900112233',
    //   status: 'tidak valid'
    // }
    // {
    //   nama: 'Irfan Maulana',
    //   noHp: '085712345678',
    //   status: 'valid'
    // },
    // {
    //   nama: 'Jihan Amelia',
    //   noHp: '089900112233',
    //   status: 'tidak valid'
    // }
  ]

  return (
    <Card className="w-full h-full box-content rounded-md border-2 border-red-700 overflow-y-scroll mt-4">
      <table className="w-full h-full min-w-max text-left table-auto overflow-scroll h-fit">
        <thead>
          {headTable.map((i) => (
            <th key={i} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-semibold leading-none ">
                {i}
              </Typography>
            </th>
          ))}
        </thead>
        <tbody>
          {example.map((row, index) => {
            console.log(index % 2)
            const bg = index % 2 ? 'bg-blue-gray-50' : ''
            const classes = 'p-3 '
            return (
              <tr className="h-fit">
                <td className={`${bg} ${classes}`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-sm font-semibold px-2"
                  >
                    {row.nama}
                  </Typography>
                </td>
                <td className={`${bg} ${classes}`}>
                  <Typography variant="small" color="blue-gray" className="text-xs">
                    {row.noHp}
                  </Typography>
                </td>
                <td className={`${bg} ${classes} capitalize`}>
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
