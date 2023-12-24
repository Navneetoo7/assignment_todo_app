import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTodo,
  editTodo,
  removeTodo,
  toggleDone,
} from '../actions/todoActions';
import {TodoState} from '../store/types';

const TodoApp: React.FC = () => {
  const [newItem, setNewItem] = useState('');
  const [editingTodo, setEditingTodo] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector((state: TodoState) => state.todos);
  console.log('todo', todos);

  // add new task
  const handleAddTodo = () => {
    if (newItem.trim() !== '') {
      dispatch(addTodo(newItem));
      setNewItem('');
    }
  };
  //update task
  const handleEditTodo = () => {
    if (editingTodo !== null && editedTodoText.trim() !== '') {
      dispatch(editTodo(editingTodo, editedTodoText));
      setEditingTodo(null);
      setEditedTodoText('');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={(test: string) => setNewItem(test)}
          placeholder="Enter a new todo"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.todoItem}>
            {editingTodo === item.id ? (
              <TextInput
                style={[styles.todoText, styles.editingText]}
                value={editedTodoText}
                onChangeText={text => setEditedTodoText(text)}
                placeholder="Edit todo"
              />
            ) : (
              <Text
                style={[styles.todoText, item.done ? styles.doneText : null]}>
                {item.text}
              </Text>
            )}
            {editingTodo === item.id ? (
              <TouchableOpacity
                style={styles.editButton}
                onPress={handleEditTodo}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  setEditingTodo(item.id);
                  setEditedTodoText(item.text);
                }}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => dispatch(removeTodo(item.id))}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => dispatch(toggleDone(item.id))}>
              <Text style={styles.buttonText}>
                {item.done ? 'Unmark' : 'Mark'} as Done
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  editingText: {
    backgroundColor: 'lightyellow',
  },
  editButton: {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  doneButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 5,
  },
});
export default TodoApp;
