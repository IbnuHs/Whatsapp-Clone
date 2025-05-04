import { data } from 'autoprefixer'
import { useState } from 'react'
import * as XLSX from 'xlsx'
export default function useExcel() {
  const [array, setArray] = useState(null)
  const readExcel = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const binarystr = e.target.result
        const workbook = XLSX.read(binarystr, { type: 'binary' })
        const sheetNames = workbook.SheetNames[0]
        const workSheet = workbook.Sheets[sheetNames]
        const data = XLSX.utils.sheet_to_json(workSheet)
        resolve(data)
      }
      reader.readAsArrayBuffer(file)
    })
  }

  return { readExcel, array }
}
