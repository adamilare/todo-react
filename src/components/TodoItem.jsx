import { useState, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';
import { useAuthContext } from '../context/AuthContext';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);
  const { user } = useAuthContext();
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {user && (
          <>
            <button type="button" onClick={handleEditing}>
              <AiFillEdit />
            </button>
            <button type="button" onClick={() => delTodo(itemProp.id)}>
              <FaTrash />
            </button>
            {' '}
          </>
        )}
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        // value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        ref={editInputRef}
        defaultValue={itemProp.title}
        // onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  delTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  itemProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
