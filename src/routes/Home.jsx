import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

const Home = () => {
  return (
    // <div className="wrapper">
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
    // </div>
  );
};
export default Home;
