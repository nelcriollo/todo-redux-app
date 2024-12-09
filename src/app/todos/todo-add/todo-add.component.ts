import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss',
})
export class TodoAddComponent implements OnInit {
  txtInput!: FormControl;
  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }
  ngOnInit(): void {
    console.log('object :>> ', 'object');
  }

  agregar() {
    if (this.txtInput.invalid) {
      return;
    }
    // console.log('this.input.value :>> ', this.txtInput.value);
    // console.log('this.input.value :>> ', this.txtInput.valid);

    this.store.dispatch(actions.crearTodo({ texto: this.txtInput.value }));

    this.txtInput.reset();
  }
}
