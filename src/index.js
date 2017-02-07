const ipify = require('ipify')
const getmac = require('getmac')

const macAddress = getmac.getMac((err, address) => {
    if (err) throw err
    console.log(address)
})

const ipAddress = ipify((err, ip) => {
    if (err) throw err
    console.log(ip)
})