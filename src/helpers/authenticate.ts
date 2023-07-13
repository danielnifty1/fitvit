import { getItem } from '../core/utils/storage.helper';

const isAuthenticated = (): boolean => {

       if (getItem(import.meta.env.VITE_APP_ACCESSTK)) {

              return true
       }
       else return false
}
export default isAuthenticated