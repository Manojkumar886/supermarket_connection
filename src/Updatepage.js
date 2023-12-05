import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Images.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Readoneproduct, Updateproduct } from './Connect';
export let Updating=()=>
{
    const {count}=useParams();
    const navi=useNavigate();
    const[process,setProcess]=useState({
        "productCount":0,
        "productCategory":"",
        "productBrand":"",
        "productName":"",
        "productPrice":0,
        "productOffer":0
    });

    useEffect(()=>
    {
        callreadingvalues();
    },[])

    const callreadingvalues=async()=>
    {
        const t=await Readoneproduct(count);
        setProcess(t.data);
    }
    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }   
    const reset=()=>
    {
        alert('Rejected successfully...!')
        alert(JSON.stringify(process));
    }
    const replace=async()=>
    {
        alert(JSON.stringify(process));
        const t=await Updateproduct(process);
        alert(t.data+" has updated in your database");
        navi("/ListallproductDetails");
    }   
    return(
        <>
           <div className="container mt-5" >
                <span id='center1'></span>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 " id="center">
                <h4 className="text-center mt-5 mb-5" id='center2'>ProductDetails Form</h4>
                    <div className="row justify-content-center " >
                        <div className="row">
                            <div className="col">
                                <label className="form-label" >productcount</label>
                                <input type="number" 
                                 name="productCount"
                                 onChange={track}
                                 value={process.productCount}
                                 className="form-control" />
                            </div>
                            <div className="col">
                                <label className="form-label" >productCategory</label>
                                <input type="text" 
                                name="productCategory"
                                onChange={track}
                                value={process.productCategory}
                                className="form-control" />
                            </div>
                        </div>
                    </div>  
                    <div className="mt-3">
                                <label className="form-label" >productBrand</label>
                                <input type="text" 
                                name="productBrand"
                                onChange={track}
                                value={process.productBrand}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >ProductName</label>
                                <input type="tel" 
                                name="productName"
                                onChange={track}
                                value={process.productName}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >productPrice</label>
                                <input type="number" 
                                name="productPrice"
                                onChange={track}
                                value={process.productPrice}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >productOffer</label>
                                <input type="number"
                                name="productOffer"
                                onChange={track}
                                value={process.productOffer}
                                className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={replace}  >UPDATE</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >CANCEL</button>
                    </div>
                </div>
                </div>
                </div>
        </>
    );
}