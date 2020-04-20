<template>
  <div id="item">
    <li :style="{background:bgColor}" @mouseenter="dealShow(true)" @mouseleave="dealShow(false)">
      <label for="">
        <input type="checkbox" v-model="todos.finished"/>
        <span>{{todos.title}}</span>
      </label>
      <button class="btn btn-waring" v-show="isShowDelButton" @click="DeleteItem(index)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    todos: Object,
    index: Number
  },
  data () {
    return {
      isShowDelButton: false,
      bgColor: '#fff'
    }
  },
  components: {

  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    dealShow (isShow) {
      this.isShowDelButton = isShow
      this.bgColor = isShow ? '#ccc' : '#fff'
    },
    DeleteItem (index) {
      // console.log(index)
      if(window.confirm(`确定要删除当前“${this.todos.title}”任务吗？`)){
        // 确定删除，直接调用APP 中的删除方法
        this.$store.dispatch('deleteTodo', this.index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  height: 40px;
  line-height: 40px;
  text-align: left;
  border: 1px solid #ccc;
}

label {
  margin-right: 10px;
}

button {
  float: right;
  width: 60px;
  height: 30px;
  margin-top: 5px;
  margin-right: 10px;
  border: none;
}
</style>
