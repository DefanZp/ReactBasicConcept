export const Fetch_success = "Fetch_success";
export const Fetch_error = "Fetch_error";
export const Change = "Change"; 

export const fetch_Success = (data) => ({
    type : Fetch_success,
    payload : data,
})

export const fetch_Error = (error) => ({
    type : Fetch_error,
    payload : error,
})

export const change_Index = (index) => ({
    type : Change,
    payload : index,
})
