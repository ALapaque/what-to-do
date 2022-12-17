import { ModuleWithProviders, NgModule, Type } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'
import { MessageComponent } from 'src/app/pages/messages/components/message/message.component'

const IMPORTS: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  CommonModule,
  FormsModule,
  IonicModule,
  RouterModule
]
const DECLARATIONS: Array<Type<any> | any[]> = [ MessageComponent ]
const EXPORTS: Array<Type<any> | any[]> = [ MessageComponent ]

@NgModule({
  imports: [ ...IMPORTS ],
  declarations: [ ...DECLARATIONS ],
  exports: [ ...EXPORTS ]
})
export class MessageComponentModule {
}
