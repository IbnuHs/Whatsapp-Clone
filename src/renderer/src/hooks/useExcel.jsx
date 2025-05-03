import * as XLSX from 'xlsx'
function useExcel(file) {
  const readExcel = () => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const workbook = XLSX.read(file, { type: 'binary' })
      const sheetNames = workbook.SheetNames[0]
      const workSheet = workbook.Sheets(sheetNames)
      const data = XLSX.utils.sheet_to_json()
    }
  }
}
