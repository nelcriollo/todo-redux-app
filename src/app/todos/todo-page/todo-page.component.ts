import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent implements OnInit {
  completado: boolean = false;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    console.log('thod not implemented.');
  }

  toggleAll() {
    // console.log('click1 :>> ', this.completado);
    this.completado = !this.completado;
    console.log('click2 :>> ', this.completado);

    this.store.dispatch(actions.toggleAll({ completado: this.completado }));
  }
}
