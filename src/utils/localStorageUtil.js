const Data = 'data';
export default {
  readTodos () {
    return JSON.parse(localStorage.getItem(Data) || '[]');
  },
  saveTodos (todos) {
    console.log(todos);
    localStorage.setItem(Data, JSON.stringify(todos));
  }
}
