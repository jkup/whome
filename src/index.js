import getMAC from 'getmac'
import publicIp from 'public-ip'
import { internalIpV4 } from 'internal-ip'

export const ipInfo = async () => {
  const mac = getMAC()
  const ip = await publicIp.v4()
  const local = await internalIpV4()
  return {
    ip,
    local,
    mac
  }
}

const cli = ipInfo().then(({ ip, local, mac }) => {
  console.log(`Your MAC Address is: ${mac}`)
  console.log(`Your IP Address is: ${ip}`)
  console.log(`Your local IP Address is: ${local}`)
})

export default cli
