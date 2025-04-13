import { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import TodoItem from '../components/TodoItem';
import mockTodos from '../data/mockTodos';
import { GetServerSideProps } from 'next';

export default function Home({ initialTodos }: { initialTodos: string[] }) {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState<string[]>(initialTodos); 

  const handleAddTodo = () => {
    if (todoText.trim()) {
      setTodos([todoText, ...todos]);
      setTodoText('');
    }
  };
  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  console.log(initialTodos);
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom >
        Todo App
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="New Todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleAddTodo}>
          Add
        </Button>
      </Box>

      {todos.map((todo, i) => (
        <TodoItem key={i} text={todo} onDelete={() => handleDeleteTodo(i)} />
      ))}
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = mockTodos; // <-- this must be an array of strings
  return {
    props: {
      initialTodos: data,
    },
  };
};