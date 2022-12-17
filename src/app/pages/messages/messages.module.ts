import { ModuleWithProviders, NgModule, Type } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { MessageComponentModule } from 'src/app/pages/messages/components/message/message.module'

import { MessagesPage } from 'src/app/pages/messages/messages.page'
import { MessagesRoutingModule } from 'src/app/pages/messages/messages.routing'

const IMPORTS: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  CommonModule,
  FormsModule,
  IonicModule,
  MessageComponentModule,
  MessagesRoutingModule
]

const DECLARATIONS: Array<Type<any> | any[]> = [
  MessagesPage
]

@NgModule({
  imports: [ ...IMPORTS ],
  declarations: [ ...DECLARATIONS ]
})
export class MessagesPageModule {
}
