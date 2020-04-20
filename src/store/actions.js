// 处理异步请求，只能在这个里面，【将异步请求转化成同步的】
import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODO, DELETE_FINISHED_TODO } from './mutations-type';
export default {
  addTodo ({ commit }, todo) {
    commit(ADD_TODO, { todo });
  },
  deleteTodo ({ commit }, index) {
    commit(DELETE_TODO, { index });
  },
  selectAllTodo ({ commit }, isCheck) {
    commit(SELECT_ALL_TODO, { isCheck });
  },
  delFinishedTodo ({ commit }) {
    commit(DELETE_FINISHED_TODO);
  },
}
