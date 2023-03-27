import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todosProps, delTodo, handleChange } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          handleChange={handleChange}
          delTodo={delTodo}
          itemProp={todo}
        />
      ))}
    </ul>
  );
};
export default TodosList;
