import { ModuleWithProviders, NgModule, Type } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MessageDetailsPage } from 'src/app/pages/message-details/message-details.page'

import { IonicModule } from '@ionic/angular'
import { MessageDetailsPageRoutingModule } from 'src/app/pages/message-details/message-details.routing'

const IMPORTS: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  CommonModule,
  FormsModule,
  IonicModule,
  MessageDetailsPageRoutingModule
]

const DECLARATIONS: Array<Type<any> | any[]> = [ MessageDetailsPage ]

@NgModule({
  imports: [ ...IMPORTS ],
  declarations: [ ...DECLARATIONS ]
})
export class MessageDetailsPageModule {
}
