// 这里是处理属性的，相当于 computed 的功能

export default {
  // 任务总数量
  todoCount (state) {
    return state.todos.length;
  },
  // 已经完成的任务数量
  finishedCount (state) {
    return  state.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0);
  },
  // 判断是否是全选
  isCheck (getters) {
    return getters.finsihedCount === getters.todoCount && getters.todoCount > 0;
  }
}
