// 所所有数据的存储地方
// 现将工具类引入
import localStorageUtil from './../utils/localStorageUtil' 
export default {
  todos: localStorageUtil.readTodos()
}
