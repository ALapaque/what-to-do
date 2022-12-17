import { Component } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public isMessageDetailPage$: Observable<boolean>

  constructor(private readonly _activatedRoute: ActivatedRoute) {
    this.isMessageDetailPage$ = this._activatedRoute
      .paramMap
      .pipe(
        map((paramMap: ParamMap) => !!paramMap.get('uuid'))
      )
  }

}
