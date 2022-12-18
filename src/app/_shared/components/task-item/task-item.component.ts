import { Component, Input } from '@angular/core'
import { Task } from 'src/app/_shared/models/task'
import { TaskService } from 'src/app/_shared/services/task.service'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: [ './task-item.component.scss' ]
})
export class TaskItemComponent {
  @Input() task!: Task

  constructor(
    private readonly _todoService: TaskService
  ) {
  }

  public updateStatus(): void {
    this._todoService.updateState(this.task.uuid)
  }

  public delete(): void {
    this._todoService.delete(this.task.uuid)
  }
}
