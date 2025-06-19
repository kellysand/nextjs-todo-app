import React from 'react'
import {  IconButton, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Props ={
    text: string;
    onDelete: () => void;
}
function TodoItem({ text, onDelete }: Props) {
  return (
    <Paper sx={{ p: 2, my: 1, display: 'flex', justifyContent: 'space-between' }}>
    <Typography>{text}</Typography>
    <IconButton onClick={onDelete} color="error">
      <DeleteIcon />
    </IconButton>
  </Paper>
  )
}

export default TodoItem