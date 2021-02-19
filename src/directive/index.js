import Vue from 'vue'

Vue.directive('dir', {
  // e1:dom元素   binding:绑定对象 vnode:虚拟dom节点
  bind: function(el, binding, vnode) {
    console.log('bind', binding)
    console.log('自定义指令绑定数据', binding.expression)
    console.log('input v-model 绑定值 val', vnode.context.val)
    console.log('获取绑定click函数', vnode.data.on.click.fns())

    // 阻止点击事件
    el.style.pointerEvents = 'none'
  },
  unbind: function(el, binding, vnode) {
    console.log('unbind', binding)
  },
  inserted: function(el, binding, vnode) {
    console.log('inserted', binding)
  },
  update: function(el, binding, vnode) {
    console.log('update', binding)
  },
  componentUpdated: function(el, binding, vnode) {
    console.log('componentUpdated', binding)
  }
})


