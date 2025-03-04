export const successAddRestoMiddleware = (storeAPI) => (next) => (action) => {
    if (action.type === "resto/addResto") {
      setTimeout(() => {
        console.log("Berhasil menambahkan data resto!");
      }, 500);
    }
  
    return next(action);
  };