import { Component, Input } from '@angular/core'
import { TaskService } from 'src/app/_shared/services/task.service'

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: [ './category-slider.component.scss' ]
})
export class CategorySliderComponent {
  @Input() category!: string

  constructor(
    public readonly taskService: TaskService
  ) {
  }

}
