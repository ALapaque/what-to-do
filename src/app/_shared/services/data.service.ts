import { Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable } from 'rxjs'
import { MESSAGES } from 'src/app/_shared/datasources/messages.datasource'
import Message from 'src/app/_shared/models/message.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _messages$: BehaviorSubject<Message[]>

  constructor() {
    this._messages$ = new BehaviorSubject<Message[]>(MESSAGES)
  }

  public getMessages(): Observable<Message[]> {
    return this._messages$.asObservable()
  }

  public getMessageByUUID(uuid: string): Observable<Message | undefined> {
    return this._messages$
      .pipe(
        map((messages: Message[]) => {
          return messages.find((message: Message) => message.uuid === uuid)
        })
      )
  }
}
