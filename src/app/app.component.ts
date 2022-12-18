import { Component } from '@angular/core'
import { Storage } from '@ionic/storage-angular'
import { Task } from 'src/app/_shared/models/task'
import { TaskService } from 'src/app/_shared/services/task.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private _storage: Storage,
    private _tasksService: TaskService
  ) {
    this._storage.create().then((storage: Storage) => {
      this._tasksService.storage = storage
      storage.get('what-to-do').then((tasks: Task[]) => {
        console.log('storage GET :: ', tasks)
        if (!tasks) {
          void storage.set('what-to-do', [])
        }

        this._tasksService.tasks = tasks || []
      })
    })
  }
}
