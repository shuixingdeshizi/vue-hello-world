import Vue from 'vue'
import MessageBoxVue from './message-box.vue'

let instance

let MessageBoxConstructor = Vue.extend(MessageBoxVue)

let initInstance = function () {
  if (!instance) {
    instance = new MessageBoxConstructor({
      el: document.createElement('div')
    })
  }
}

function MessageBox (options) {
  initInstance()
  instance.message = options.message
  instance.visible = true

  document.body.appendChild(instance.$el)
  return new Promise((resolve, reject) => {
    instance.resolve = resolve
    instance.reject = reject
  })
}

export default MessageBox
export {
  MessageBox
}