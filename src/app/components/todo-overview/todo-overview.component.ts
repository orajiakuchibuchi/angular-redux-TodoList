import { REMOVE_ALL_TODOS } from './../../action/actions';
import { IAppState } from './../../store/store';
import { NgRedux, select } from '@angular-redux/store';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
  }
  clearTodos(){
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }
}
