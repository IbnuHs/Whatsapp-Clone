import { Client, LocalAuth } from 'whatsapp-web.js'

let client
let isAuthenticated = false
export function initWhatsapp(mainWindow) {
  // console.log('tes')
  try {
    client = new Client({
      authStrategy: new LocalAuth(),
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
        isAuthenticated = true
        mainWindow.webContents.send('ready')
      }
    })
    client.on('authenticated', () => {
      console.log('Whatsapp Authenticated')
      if (mainWindow) {
        isAuthenticated = true
        mainWindow.webContents.send('authenticated')
      }
    })
    client.on('auth_failure', (message) => {
      console.log('Whatsapp Authenticated Failed: ', message)
      if (mainWindow) {
        isAuthenticated = false
        mainWindow.webContents.send('auth_failure', message)
      }
    })
    client.on('disconnected', (message) => {
      console.log('Whatsapp Disconnected : ', message)
      if (mainWindow) {
        isAuthenticated = false
        mainWindow.webContents.send('diconnected', message)
      }
    })

    client.initialize()
  } catch (error) {
    console.log(error)
  }
}
export function getClient() {
  return client
}

export function CheckSession() {
  return isAuthenticated
}
// module.exports = { initWhatsapp, getClient }
