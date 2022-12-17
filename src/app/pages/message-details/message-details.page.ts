import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular'
import { Observable } from 'rxjs'
import Message from 'src/app/_shared/models/message.model'
import { DataService } from 'src/app/_shared/services/data.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.page.html',
  styleUrls: ['./message-details.page.scss'],
})
export class MessageDetailsPage {
  public message$: Observable<Message | undefined>;

  constructor(
    private _data: DataService,
    private _activatedRoute: ActivatedRoute,
    private _platform: Platform
  ) {
    const uuid: string = this._activatedRoute.snapshot.paramMap.get('uuid') as string

    this.message$ = this._data.getMessageByUUID(uuid)
  }

  get backButtonText(): string {
    return this._platform.is('ios') ? 'Inbox' : '';
  }
}
