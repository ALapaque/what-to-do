import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Platform } from '@ionic/angular'
import { Observable } from 'rxjs'
import Message from 'src/app/_shared/models/message.model'
import { DataService } from 'src/app/_shared/services/data.service'

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.page.html',
  styleUrls: [ './message-details.page.scss' ]
})
export class MessageDetailsPage {
  public readonly message$: Observable<Message | undefined>

  constructor(
    private readonly _data: DataService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _platform: Platform
  ) {
    this.message$ = this._data.getMessageByUuid(String(this._activatedRoute.snapshot.paramMap.get('uuid')))
  }
}
