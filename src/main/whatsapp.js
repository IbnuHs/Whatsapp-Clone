import { Client, LocalAuth } from 'whatsapp-web.js'

let client
let isAuthenticated = false
export function initWhatsapp(mainWindow) {
  try {
    client = new Client({
      authStrategy: new LocalAuth(),

      puppeteer: {
        headless: true,
        args: ['--no-sandbox']
      }
    })

    client.on('qr', (qr) => {
      if (mainWindow) {
        mainWindow.webContents.send('qr', qr)
      }
    })

    client.on('ready', async () => {
      console.log('Whatsapp Ready')
      const data = {
        username: client.info.pushname,
        numberphone: client.info.wid.user
      }
      try {
        data.imgurl = await client.getProfilePicUrl(client.info.wid._serialized)
      } catch (error) {
        data.imgurl = null
      }
      console.log('username : ', client.info.pushname)
      console.log('number phone : ', client.info.wid.user)
      if (mainWindow) {
        isAuthenticated = true
        mainWindow.webContents.send('ready', isAuthenticated)
        mainWindow.webContents.send('user-info', data)
      }
    })
    client.on('authenticated', () => {
      console.log('Whatsapp Authenticated')
      if (mainWindow) {
        isAuthenticated = true
        mainWindow.webContents.send('authenticated', isAuthenticated)
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
    // client.on('lo', (message) => {
    //   console.log('Whatsapp Disconnected : ', message)
    //   if (mainWindow) {
    //     isAuthenticated = false
    //     mainWindow.webContents.send('diconnected', message)
    //   }
    // })

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
export async function logout(mainWindow) {
  try {
    // console.log(client)
    if (client) {
      // await client.Logout()
      console.log('tes')
      isAuthenticated = false
      console.log(isAuthenticated)
      await mainWindow.webContents.send('logout', isAuthenticated)
    }
  } catch (error) {
    console.log(error)
  }
}
// module.exports = { initWhatsapp, getClient }
