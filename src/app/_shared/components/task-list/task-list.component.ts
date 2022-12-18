import { Component } from '@angular/core'
import { TaskService } from 'src/app/_shared/services/task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [ './task-list.component.scss' ]
})
export class TaskListComponent {

  constructor(
    public readonly taskService: TaskService
  ) {
  }
}
