import Header from './Header';
import TodosLogic from './TodosLogic';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header
          style={{
            padding: '20px 0',
            lineHeight: '1.5em',
            color: '#aeadad',
            textAlign: 'center',
          }}
        />
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;
