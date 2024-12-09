import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  todoNew!: Todo;

  chkCompletado!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;

  constructor(private sotore: Store<AppState>) {}

  ngOnInit(): void {
    // console.log('object :>> ', this.todo);
    // const todoMutable = { ...this.todo };
    // console.log('todoMutable :>> ', todoMutable);
    //  todoMutable.completado = true;
    // this.todo = todoMutable;
    // console.log('object :>> ', this.todo);
    // Clona el objeto si necesitas manipular 'completado'.

    // this.todoNew = { ...this.todo };
    // this.todoNew.completado = true;

    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe((valor) => {
      console.log('valor :>> ', valor);
      this.sotore.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.texto) return;

    this.sotore.dispatch(
      actions.editarTodo({
        id: this.todo.id,
        texto: this.txtInput.value,
      })
    );
  }

  borrar() {
    this.sotore.dispatch(actions.borrarTodo({ id: this.todo.id }));
  }
}
