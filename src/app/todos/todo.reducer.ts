import { createReducer, on } from '@ngrx/store';
import {
  borrarTodo,
  borrarTodosCompletados,
  crearTodo,
  editarTodo,
  toggle,
  toggleAll,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Salvar a Thanos'),
  new Todo('Comprar traje de Ironman'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),

  on(borrarTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: completado,
      };
    });
  }),

  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),

  on(editarTodo, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),

  on(borrarTodosCompletados, (state) =>
    state.filter((todo) => !todo.completado)
  )
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
