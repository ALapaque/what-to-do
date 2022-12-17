import { Component, Input } from '@angular/core';
import { Platform } from '@ionic/angular'
import Message from 'src/app/_shared/models/message.model'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message!: Message;

  constructor(private readonly _platform: Platform) {
  }

  get detailRoute(): string {
    return `/message/${this.message.uuid}`
  }

  get isIos(): boolean {
    return this._platform.is('ios')
  }
}
