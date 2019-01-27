export const counterFormatDate = (times, callback) => {
  let day,
  hours,
  minutes,
  seconds,
  result

  times = times / 1000
  day = Math.floor(times / (24 * 60 * 60))
  hours = Math.floor((times % (24 * 60 * 60)) / (60 * 60))
  minutes = Math.floor((times % (24 * 60 * 60) % (60 * 60)) / 60)
  seconds = Math.floor(((times % (24 * 60 * 60) % (60 * 60)) % 60) % 60)

  result = `${day}天${hours}时${minutes}分${seconds}秒`
  return result
}
