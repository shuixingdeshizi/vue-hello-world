export const loadImg = (url) => {
  let img = new Image()
  img.src = url
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img)
    }
    img.onerror = (e) => {
      reject(e)
    }
  })
}

export const loadAllImg = (arr) => {
  let result = []
  arr.forEach(item => {
    let p = loadImg(item)
    result.push(p)
  })
  return Promise.all(result)
}