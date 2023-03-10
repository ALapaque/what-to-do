import Nameable from 'src/app/_shared/models/nameable'
import Uuid from 'src/app/_shared/models/uuid'


export interface Task extends Uuid, Nameable {
  done: boolean
  category: string
}


