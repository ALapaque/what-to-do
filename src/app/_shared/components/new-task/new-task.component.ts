import { Component, OnDestroy } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { Subject } from 'rxjs'
import { Task } from 'src/app/_shared/models/task'
import { TaskService } from 'src/app/_shared/services/task.service'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html'
})
export class NewTaskComponent implements OnDestroy {
  private readonly _destroy$: Subject<void> = new Subject<void>()

  constructor(
    public modalController: ModalController,
    private readonly _taskService: TaskService
  ) {
  }

  public ngOnDestroy() {
    this._destroy$.next()
  }

  public createNewTask(task: Task): void {
    this._taskService.create(task)
    void this.modalController.dismiss()
  }
}
