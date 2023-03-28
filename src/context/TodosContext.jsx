import { createContext } from 'react';
import PropTypes from 'prop-types';

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => (
  <TodosContext.Provider value="todos data">{children}</TodosContext.Provider>
);

TodosProvider.propTypes = {
  children: PropTypes.elementType,
};

TodosProvider.defaultProps = {
  children: null,
};

export { TodosContext };
