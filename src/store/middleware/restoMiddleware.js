export const successAddRestoMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === "ADD_RESTO") {
    setTimeout(() => {
      console.log("Berhasil menambahkan data resto!");
    }, 500);
  }

  return next(action);
};