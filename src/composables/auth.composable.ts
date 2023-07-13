// imports
import { ref } from "vue";

import { notify } from "@kyvg/vue3-notification";

// variables

const success = ref("");
const error = ref("");
export const useAuth = (store: any, loading: { value: boolean }): any => {
  error.value = "";
  success.value = "";
  const data = ref()
  loading.value = true;
  return store
    .then((res: any) => {
      console.log(res)
      success.value = res.data.message;
      data.value = res.data.data;
     
      // set the loading notice to false
      setTimeout(() => {
        loading.value = false;
      }, 1000);
      //   send out notification to tell that the signup was successful
      notify({
        type: "success",
        title: "Success",
        text: res.data.message,
      });
      return [error, success,data];
    })
    .catch((err: any) => {
      console.log(err);
      setTimeout(() => {
        loading.value = false;
      }, 1000);

      error.value = err;
      notify({
        type: "error",
        title: "Error",
        text: err.data ? err.data.Error : "...ooops something went wrong",
      });

      return [error, success, data];
    });
};
