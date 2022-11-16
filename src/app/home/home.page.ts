import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemName: 'Build Ionic App Front',
    itemDueDate: '11-17-2022',
    itemPriority: 'high',
    itemCategory: 'Code'
  },
  {
    itemName: 'Ionic App Backend',
    itemDueDate: '11-18-2022',
    itemPriority: 'medium',
    itemCategory: 'Code'
  },
  {
    itemName: 'Publish Ionic App',
    itemDueDate: '11-19-2022',
    itemPriority: 'low',
    itemCategory: 'Code'
  },
]

  today: number = Date.now()
  constructor() {}

}
