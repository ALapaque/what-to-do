import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/_shared/models/task'
import { TaskService } from 'src/app/_shared/services/task.service'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: [ './task-item.component.scss' ]
})
export class TaskItemComponent {
  @Input() public task!: Task

  constructor(
    private readonly _tasksService: TaskService
  ) {
  }

  public updateStatus(): void {
    this._tasksService.updateState(this.task.uuid)
  }

  public delete(): void {
    this._tasksService.delete(this.task.uuid)
  }
}
