import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup, ItemReorderEventDetail } from '@ionic/angular';
import { TaskService } from 'src/app/_shared/services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [ './task-list.component.scss' ],
  host: {
    class: 'content'
  }
})
export class TaskListComponent {
  constructor(
    public readonly taskService: TaskService
  ) {
  }

  public handleOnReorder($event?: any) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', this.taskService.tasks);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    const updated: Task[] = $event.detail.complete(this.taskService.tasks);
    this.taskService.tasks$.next(updated)

    // After complete is called the items will be in the new order
    console.log('After complete', this.taskService.tasks);
  }
}
