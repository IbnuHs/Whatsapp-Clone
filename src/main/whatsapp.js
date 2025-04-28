import { Client } from 'whatsapp-web.js'

let client

export function initWhatsapp(mainWindow) {
  console.log('tes')
  client = new Client({
    puppeteer: {
      headless: true,
      args: ['--no-sandbox']
    }
  })

  client.on('qr', (qr) => {
    console.log('qr generated')
    console.log(qr)
    if (mainWindow) {
      mainWindow.webContents.send('qr', qr)
    }
  })

  client.on('ready', () => {
    console.log('Whatsapp Ready')
    if (mainWindow) {
      mainWindow.webContents.send('Whatsapp Ready')
    }
  })
  client.on('authenticated', () => {
    console.log('Whatsapp Authenticated')
    if (mainWindow) {
      mainWindow.webContents.send('Whatsapp Authenticated')
    }
  })
  client.on('auth_failure', () => {
    console.log('Whatsapp Authenticated Failed')
    if (mainWindow) {
      mainWindow.webContents.send('Whatsapp Authenticated Failed')
    }
  })

  client.initialize()
}
export function getClient() {
  return client
}

// module.exports = { initWhatsapp, getClient }
