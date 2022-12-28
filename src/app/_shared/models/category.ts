import Nameable from 'src/app/_shared/models/nameable'
import Uuid from 'src/app/_shared/models/uuid'

export default interface Category extends Uuid, Nameable {
  color: string;
}
