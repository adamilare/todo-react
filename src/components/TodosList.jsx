import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, delTodo, handleChange, setUpdate,
}) => (
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

TodosList.propTypes = {
  delTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TodosList;
