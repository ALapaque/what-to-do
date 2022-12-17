import { Component } from '@angular/core'
import { RefresherCustomEvent } from '@ionic/angular'
import { Observable } from 'rxjs'
import Message from 'src/app/_shared/models/message.model'

import { DataService } from 'src/app/_shared/services/data.service'

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.page.html',
  styleUrls: [ 'messages.page.scss' ]
})
export class MessagesPage {
  public readonly messages$: Observable<Message[]>

  constructor(private data: DataService) {
    this.messages$ = data.getMessages()
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete()
    }, 3000)
  }
}
