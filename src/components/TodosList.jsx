import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todosProps, delTodo, handleChange, setUpdate } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          handleChange={handleChange}
          delTodo={delTodo}
          itemProp={todo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;
