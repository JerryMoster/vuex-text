<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="todo-header">
      <input type="text" placeholder="请输入今天的任务清单，按回车键确认" v-model="title" @keyup.enter="addItem">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      title:''
    }
  },
  components: {
  },
  methods: {
    addItem () {
      // 1.首先，判断内容是否为空
      var title = this.title.trim() // 去掉首尾的空格
      if (!title) {
        alert('输入的内容不能为空！')
        return
      }
      // 2.生成一个 TODO 对象
      var todo = { title, finsished: false }
      // 3。将生成的 TODO 对象添加到 todos 数组中【这个方法是在父组件中写的，数据在父组件中】
      this.$store.dispatch('addTodo', todo)
      // 4、将输入框清空
      this.title = ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
