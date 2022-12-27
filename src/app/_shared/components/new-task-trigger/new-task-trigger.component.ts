import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-new-task-trigger',
  templateUrl: './new-task-trigger.component.html',
  styleUrls: ['./new-task-trigger.component.scss'],
})
export class NewTaskTriggerComponent implements OnInit {
  @Input() public readonly useFabButton?: boolean = false

  public readonly id: string = 'new-task-trigger'

  constructor() { }

  ngOnInit() {}

}
