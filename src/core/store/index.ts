import useAuthStore from "./modules/auth.store";

import user from "./modules/user.store";
import contactus from "./modules/contactus.store";


// import all store modules here and equally export them ( to avoid importing files individually in components)
export { useAuthStore, user,contactus };
