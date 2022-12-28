import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CategoriesSliderComponent } from 'src/app/_shared/components/categories/categories-slider/categories-slider.component'
import { CategorySliderComponent } from 'src/app/_shared/components/categories/category-slider/category-slider.component'
import {
  NewCategoryTriggerComponent
} from 'src/app/_shared/components/categories/new-category-trigger/new-category-trigger.component'
import { HeaderComponent } from 'src/app/_shared/components/header/header.component'
import { NewTaskTriggerComponent } from 'src/app/_shared/components/new-task-trigger/new-task-trigger.component'
import { NewTaskComponent } from 'src/app/_shared/components/new-task/new-task.component'
import { TaskFormComponent } from 'src/app/_shared/components/task-form/task-form.component'
import { TaskListComponent } from 'src/app/_shared/components/task-list/task-list.component'
import { TaskModalComponent } from 'src/app/_shared/components/task-modal/task-modal.component'
import { HomePage } from 'src/app/pages/home/home.page'

import { HomePageRoutingModule } from 'src/app/pages/home/home-routing.module'


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
    CategoriesSliderComponent,
    NewCategoryTriggerComponent,
    CategorySliderComponent,
    TaskListComponent,
    TaskFormComponent,
    NewTaskComponent,
    TaskModalComponent,
    NewTaskTriggerComponent
  ]
})
export class HomePageModule {
}
