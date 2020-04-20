<template>
  <div id="foot">
    <div class="todo-footer">
      <label for="">
        <input type="checkbox" v-model="selectedAllOrNot">
      </label>
      <span>
        <span>已选中{{finishedCount}}件</span>/ 总计{{todoCount}}件
      </span>
      <button class="btn btn-waring" @click="delFinishedTodo">清除已完成的任务</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Foot',
  data () {
    return {
    }
  },
  components: {

  },
  computed: {
    ...mapGetters(['todoCount', 'finishedCount', 'isCkeck']),
    selectedAllOrNot:{
      get () {
        return this.isCheck
      },
      set (value) {
        this.selectAllTodo(value)
      }
    }
  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    ...mapActions(['selectAllTodo', 'delFinishedTodo'])
  }
}
</script>

<style lang="scss" scoped>
</style>