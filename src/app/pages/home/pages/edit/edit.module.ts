import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'
import { HomePageModule } from 'src/app/pages/home/home.module'
import { EditPageRoutingModule } from 'src/app/pages/home/pages/edit/edit-routing.module'
import { EditPage } from 'src/app/pages/home/pages/edit/edit.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPageRoutingModule,
    HomePageModule
  ],
  declarations: [ EditPage ]
})
export class EditPageModule {
}
