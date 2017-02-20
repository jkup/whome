const ipify = require('ipify')
const getmac = require('getmac')

const macAddress = getmac.getMac((err, address) => {
    if (err) throw err
    console.log(`Your MAC address is: ${address}`)
})

const ipAddress = ipify((err, ip) => {
    if (err) throw err
    console.log(`Your IP address is: ${ip}`)
})