// 处理数据的方法的对象
import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODO, DELETE_FINISHED_TODO } from './mutations-type';
export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo);
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1);
  },
  [SELECT_ALL_TODO] (state, {isCheck}) {
    state.todos.forEach(function (todo) {
      todo.finished = isCheck;
    });
  },
  [DELETE_FINISHED_TODO] (state) {
    state.todos = state.todos.filter(todo => !todo.finished);
  }
}
