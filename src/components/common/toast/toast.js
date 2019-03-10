import Vue from 'vue'
import ToastVue from './toast.vue'

var ToastConstructor = Vue.extend(ToastVue)

var instance

var initInstance = function () {
  if (!instance) {
    instance = new ToastConstructor({
      el: document.createElement('div')
    })
  }
}

function Toast (options) {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  initInstance()
  instance.visible = true
  instance.message = options.message

  setTimeout(() => {
    instance.visible = false
  }, 3000)

  document.body.appendChild(instance.$el)
}

export default Toast
export {
  Toast
}