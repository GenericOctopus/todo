import { AddNewTaskPage } from './../add-new-task/add-new-task.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor(public modalCtrl:ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    return await modal.present()
  }

}
