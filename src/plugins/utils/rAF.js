
const DEFAULT_INTERVAL = 1000 / 60
export const requestAnimationFrame = () => {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame || 
    function (callback) {
      setTimeout(callback, callback.interval || DEFAULT_INTERVAL)
    }
}

export const cancelAnimationFrame = () => {
  return window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    function (id) {
      window.clearTimeout(id)
    }
}