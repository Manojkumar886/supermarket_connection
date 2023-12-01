import axios from "axios";
const url="http://localhost:8082/Supermarket"

export const Loginperformance=async(object)=>
{
    const credentials=object.username+":"+object.password;

    const token=btoa (credentials);

    try{
        const t=await axios.get(`http://localhost:8082/Supermarket/list`,
    {
        headers:{
            "Authorization":`Basic ${token}`
        }
    })
    if(t.data)
    {
        sessionStorage.setItem("auth",token)
        return;
    }
    }
    catch(err)
    {
        alert(err);
    }
}


export const Displayallproductdetails=async()=>
{
    const t=await axios.get(`http://localhost:8082/Supermarket/list`);
    return t;
}


export const Createnewproduct=async(object)=>
{
    const t=await axios.post(`${url}/create`,object);
    alert(JSON.stringify(t.data)+" has been added in database")
    return t;
}

export const Readoneproduct=async(id)=>
{
    const t=await axios.get(`${url}/readone/${id}`)
    return t;
}

export const Updateproduct=async(object)=>
{
    const t=await axios.put(`${url}/update`,object);
    alert(JSON.stringify(t.data)+" has been updated in database")
    return t;
}
