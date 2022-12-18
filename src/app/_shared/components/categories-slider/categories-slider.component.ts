import { Component } from '@angular/core'
import { TaskService } from 'src/app/_shared/services/task.service'

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: [ './categories-slider.component.scss' ]
})
export class CategoriesSliderComponent {
  sliderConfig = {
    spaceBetween: 1,
    slidesPerView: 1.7
  }

  constructor(
    public taskService: TaskService
  ) {
  }

}
