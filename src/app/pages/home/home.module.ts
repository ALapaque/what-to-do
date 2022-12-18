import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CategoriesSliderComponent } from 'src/app/_shared/components/categories-slider/categories-slider.component'
import { CategorySliderComponent } from 'src/app/_shared/components/category-slider/category-slider.component'
import { NewTaskComponent } from 'src/app/_shared/components/new-task/new-task.component'
import { TaskFormComponent } from 'src/app/_shared/components/task-form/task-form.component'
import { TaskListComponent } from 'src/app/_shared/components/task-list/task-list.component'
import { TaskItemComponent } from 'src/app/_shared/components/task-item/task-item.component'
import { TaskModalComponent } from 'src/app/_shared/components/task-modal/task-modal.component'
import { HomePage } from 'src/app/pages/home/home.page'

import { HomePageRoutingModule } from 'src/app/pages/home/home-routing.module'
import { HeaderComponent } from '../../_shared/components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    TaskFormComponent
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskItemComponent,
    CategoriesSliderComponent,
    NewTaskComponent,
    TaskModalComponent,
    CategorySliderComponent
  ]
})
export class HomePageModule {
}
