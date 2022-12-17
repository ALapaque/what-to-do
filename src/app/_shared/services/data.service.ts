import { Injectable } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { BehaviorSubject, map, Observable, tap } from 'rxjs'
import { MESSAGES } from 'src/app/_shared/datasources/messages.datasource'
import Message from 'src/app/_shared/models/message.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _messages$: BehaviorSubject<Message[]>

  constructor(
    private readonly _toastController: ToastController
  ) {
    this._messages$ = new BehaviorSubject<Message[]>(MESSAGES)
  }

  public getMessages(): Observable<Message[]> {
    return this._messages$
      .pipe(
        tap(() => {
          this._toastController.create({
            animated: true,
            translucent: true,
            message: 'Data restored successfully',
            duration: 1000,
            position: 'bottom'
          }).then((toastr: HTMLIonToastElement) => {
            void toastr.present()
          })
        })
      )
  }

  public getMessageByUuid(uuid: string): Observable<Message | undefined> {
    return this._messages$
      .pipe(
        map((messages: Message[]) => {
          return messages.find((message: Message) => message.uuid === uuid)
        }),
        tap(() => {

        })
      )
  }
}
