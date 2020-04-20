<template>
    <div id="list">
      <ul class="todo-main">
        <Item :todos="todo" v-for="(todo, index) in todos" :key='index' :index='index'/>
      </ul>
    </div>
</template>

<script>
import Item from './Item.vue'
import { mapState } from 'vuex'
import localStorageUtil from './../utils/localStorageUtil.js'
export default {
  name: 'List',
  data() {
    return {

    }
  },
  components: {
    Item
  },
  computed: {
    ...mapState (['todos'])
  },
  created() {

  },
  mounted() {

  },
  watch: {
    todos: {
      deep: true,
      handler: localStorageUtil.saveTodos
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
