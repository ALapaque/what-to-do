import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { BehaviorSubject, map, Observable } from 'rxjs'
import Category from 'src/app/_shared/models/category'

const INITIAL_CATEGORIES: Category[] = [
  {
    uuid: 'UUID-PERSONNAL',
    name: 'Personnal',
    color: ''
  },
  {
    uuid: 'UUID-BUSINESS',
    name: 'Business',
    color: ''
  }
]

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public readonly categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(INITIAL_CATEGORIES)
  public storage: Storage | undefined

  constructor(
    private readonly _storage: Storage
  ) { }

  get categories(): Category[] {
    return this.categories$.getValue()
  }

  getOne(uuid: string): Observable<Category | undefined> {
    return this.categories$.pipe(
      map((categories: Category[]) => categories.find((category: Category) => category.uuid === uuid))
    )
  }

  // create
  create(category: Category): void {
    this.categories$.next([
      ...this.categories,
      category
    ])
  }

  // update
  update(uuid: string, category: Category): void {
    const categories: Category[] = this.categories;
    const index: number = categories.findIndex((cateogry: Category) => cateogry.uuid === uuid)

    if (index !== -1) {
      categories[index] = {
        ...category
      }
    }


    this.categories$.next(categories)
  }
}
