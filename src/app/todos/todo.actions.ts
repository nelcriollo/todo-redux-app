import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Crear Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editarTodo = createAction(
  '[TODO] Editar Todo',
  props<{ id: number; texto: string }>()
);

export const borrarTodo = createAction(
  '[TODO] Borrar Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll Todo',
  props<{ completado: boolean }>()
);

export const borrarTodosCompletados = createAction(
  '[TODO] BorrarTodosCompletados Todo'
);
