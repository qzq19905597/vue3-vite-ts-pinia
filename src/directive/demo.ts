import { DirectiveBinding } from 'vue'

export default {
  // 在绑定元素的父组件被挂载后调用。
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener('click', () => {
      console.log('demo')
    })
  },
}
