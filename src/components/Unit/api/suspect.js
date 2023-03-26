import axios from "axios";

export  function getSuspect(){
    const unitId = localStorage.getItem('unitId')
    return axios
    .get(`api/suspect/${unitId}`).then(res=>res.data.data)
}

