import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  today: number = Date.now()
  showPicker = false;
  dateValue = format(new Date(), 'MMM-dd-yyyy');

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss()
  }

  dateChanged(value:any){
    this.dateValue = value;
  }

}
