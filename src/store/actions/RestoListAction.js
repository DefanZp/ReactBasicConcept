export const ADD_RESTO = "ADD_RESTO";
export const DELETE_RESTO = "DELETE_RESTO";


export const add_Resto = (resto) => ({
    type : ADD_RESTO,
    payload : {
        resto,
    }
});

export const delete_Resto = (id) => ({
    type : DELETE_RESTO,
    payload : {
        id,
    }
})