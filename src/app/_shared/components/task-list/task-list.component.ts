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

  public updateStatus(task: Task): void {
    this.taskService.updateState(task.uuid)
  }

  public delete(task: Task): void {
    this.taskService.delete(task.uuid)
  }

  public handleOnReorder($event: CustomEvent<ItemReorderEventDetail>) {
    const updated: Task[] = $event.detail.complete(this.taskService.tasks);

    this.taskService.tasks$.next(updated)
  }
}
