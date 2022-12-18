interface UUID<T = string> {
  uuid: T
}

interface Nameable<T = string> {
  name: T
}

export interface Task extends UUID, Nameable {
  done: boolean
  category: string
}


