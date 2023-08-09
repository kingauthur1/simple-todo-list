import { ITask } from "./types/tasks";

const baseUrl  = 'http://localhost:3001';

export async function getAllTodos() {
   const response = await fetch(`${baseUrl}/tasks`);
   const data = await response.json();
   return data;
 }

export const addTodo = async (todo: ITask): Promise<ITask> => {
   const res = await fetch('${baseUrl}/tasks', {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(todo)
   })
   const newTodo = await res.json();
   return newTodo;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
   const res = await fetch('${baseUrl}/tasks/${todo.id}', {
      method: 'PUT',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(todo)
   })
   const updatedTodo = await res.json();
   return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
   await fetch('${baseUrl}/tasks/${id}', {
      method: 'DELETE',
   })
}