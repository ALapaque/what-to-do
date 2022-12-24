import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subject, takeUntil, tap } from 'rxjs';
import { Task } from 'src/app/_shared/models/task';
import { TaskService } from 'src/app/_shared/services/task.service';
import { v4 as generateUUID } from 'uuid';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: [ './task-form.component.scss' ]
})
export class TaskFormComponent implements OnDestroy {
  @Output() public onSubmitEmitter: EventEmitter<Task> = new EventEmitter<Task>();

  taskForm: FormGroup = new FormGroup({
    uuid: new FormControl(generateUUID(), [ Validators.required ]),
    category: new FormControl('personal', [ Validators.required ]),
    name: new FormControl('', [ Validators.required, Validators.minLength(1) ]),
    done: new FormControl(false)
  });

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly _modalController: ModalController,
    private readonly _taskService: TaskService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _location: Location
  ) {
    const uuid: string | null = this._activatedRoute.snapshot.paramMap.get('uuid');

    if (uuid) {
      this._fetchOneTask(uuid);
    }
  }

  public ngOnDestroy() {
    this._destroy$.next();
  }

  public toggleCategory(): void {
    const actualValue: string = this.taskForm.get('category')?.value;

    this.taskForm.patchValue({
      category: actualValue === 'personal' ? 'business' : 'personal'
    });
  }

  public handleOnSubmit(): void {
    this.onSubmitEmitter.emit(this.taskForm.value);
  }

  private _fetchOneTask(uuid: string): void {
    this._taskService.getOne(uuid)
        .pipe(
          takeUntil(this._destroy$),
          tap((task: Task | undefined) => {
            if (!task) {
              return;
            }

            this.taskForm.setValue({
              ...task
            });
          })
        )
        .subscribe();
  }
}
