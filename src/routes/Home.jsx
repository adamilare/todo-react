import Header from '../components/Header';
import TodosLogic from '../components/TodosLogic';

const Home = () => (
  // <div className="wrapper">
  <div className="todos">
    <Header
      style={{
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
      }}
    >
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </Header>
    <TodosLogic />
  </div>
  // </div>
);
export default Home;
