import { Injectable } from '@angular/core'
import { Storage } from '@ionic/storage-angular'
import { BehaviorSubject, from, map, Observable, of, tap } from 'rxjs'
import { Task } from 'src/app/_shared/models/task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public readonly tasks$: BehaviorSubject<Task[]>
  public storage: Storage | undefined

  constructor(
    private _storage: Storage
  ) {
    this.tasks$ = new BehaviorSubject<Task[]>([
      { uuid: '1', done: false, name: 'test 1', category: 'business' },
      { uuid: '2', done: true, name: 'test 2', category: 'business' },
      { uuid: '3', done: false, name: 'test 3', category: 'personal' },
      { uuid: '4', done: true, name: 'test 4', category: 'personal' },
      { uuid: '5', done: false, name: 'test 1', category: 'business' },
      { uuid: '6', done: true, name: 'test 2', category: 'business' },
      { uuid: '7', done: false, name: 'test 3', category: 'personal' },
      { uuid: '8', done: true, name: 'test 4', category: 'personal' },
      { uuid: '9', done: false, name: 'test 1', category: 'business' },
      { uuid: '10', done: true, name: 'test 2', category: 'business' },
      { uuid: '11', done: false, name: 'test 3', category: 'personal' },
      { uuid: '12', done: true, name: 'test 4', category: 'personal' }
    ])
  }

  get tasks(): Task[] {
    return this.tasks$.getValue()
  }

  set tasks(tasks: Task[]) {
    this.tasks$.next(tasks)
    this._initTasksListener()
  }

  // read
  getOne(uuid: string): Observable<Task | undefined> {
    return this.tasks$.pipe(
      map((tasks: Task[]) => tasks.find((task: Task) => task.uuid === uuid))
    )
  }

  // update done or not done
  updateState(uuid: string): void {
    const tasks: Task[] = this.tasks

    tasks.map((task: Task) => {
      if (task.uuid == uuid) {
        task.done = !task.done
      }

      return task
    })

    this.tasks$.next(tasks)
  }

  // create
  create(task: Task): void {
    this.tasks$.next([
      ...this.tasks,
      task
    ])
  }

  // update
  update(uuid: string, task: Task): void {
    const tasks: Task[] = this.tasks

    tasks.map((t: Task) => {
      if (t.uuid == uuid) {
        t = task
      }

      return t
    })

    this.tasks$.next(tasks)
  }

  // delete
  delete(uuid: string): void {
    const tasks: Task[] = this.tasks
    const index: number = tasks.findIndex((task: Task) => task.uuid === uuid)

    tasks.splice(index, 1)

    this.tasks$.next(tasks)
  }

  getCategoryTodoCount(category: string): Observable<number> {
    return this.tasks$.pipe(
      map((tasks: Task[]) => {
        const todoTasks: Task[] = tasks.filter((task: Task) => {
          if (task.category === category && !task.done) {
            return task
          }

          return
        })

        return todoTasks.length
      })
    )
  }

  getCategoryProgressCount(category: string): Observable<number> {
    return this.tasks$.pipe(
      map((tasks: Task[]) => {
        const categoriesTasks: Task[] = tasks.filter((task: Task) => {
          if (task.category !== category) {
            return
          }

          return task
        })


        return categoriesTasks.length / tasks.length
      })
    )
  }

  private _initTasksListener(): void {
    this.tasks$.subscribe((tasks: Task[]) => {
      this._saveState()
    })
  }

  private _saveState(): void {
    void this._storage?.set('what-to-do', this.tasks)
  }
}
