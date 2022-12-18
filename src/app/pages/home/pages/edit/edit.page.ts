import { Location } from '@angular/common'
import { Component, OnDestroy } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, Subject, takeUntil, tap } from 'rxjs'
import { Task } from 'src/app/_shared/models/task'
import { TaskService } from 'src/app/_shared/services/task.service'

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit.component.html'
})
export class EditPage implements OnDestroy {
  private _destroy$: Subject<void> = new Subject<void>()

  constructor(
    public todoService: TaskService,
    public location: Location
  ) {
  }

  public ngOnDestroy() {
    this._destroy$.next()
  }

  goBack() {
    this.location.back()
  }

  updateTodo(task: Task) {
    this.todoService.update(task.uuid, task)
    this.goBack()
  }
}
