import { useEffect, useState } from 'react';
import './Images.css'
import { useNavigate, useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Deleteproduct, Displayallproductdetails } from './Connect';

export const ListallproductDetails=()=>
{
    const {count}=useParams();
    const navi=useNavigate();
    const[allvalues,setAllvalues]=useState([])

    const productvalue=async()=>
    {
       const temp=await Displayallproductdetails();
       setAllvalues(temp.data);
    }

    useEffect(()=>
    {
        productvalue();
    })

  
    return(
                <>
                    <div className="row justify-content-center mt-5 bg-warning">
                        <div className="table-responsive">
                            <table className="col-lg-8 col-md-10 col-sm-12 table table-striped table-warning ">
                                <thead id="texting">
                                    <tr id='head'>
                                        <th>productCount</th>
                                        <th>productCategory</th>
                                        <th>productBrand</th>
                                        <th>ProductName</th>
                                        <th>productOffer</th>
                                        <th>productPrice</th>  
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        allvalues.map((da)=>(
                                            <tr>
                                                <td>
                                                    <a href={`reading/${da.productCount}`} className="btn btn-outline-dark">{da.productCount}</a>
                                                </td>
                                                <td>{da.productCategory}</td>
                                                <td>{da.productBrand}</td>
                                                <td>{da.productName}</td>
                                                <td>{da.productOffer}</td>
                                                <td>{da.productPrice}</td>
                                                <td>
                                                    <a className="btn btn-dark" href={`updating/${da.productCount}`}>UPDATE</a>
                                                    <button className="btn btn-light text-dark"
                                                    onClick={
                                                        async()=>
                                                        {
                                                            const t=await Deleteproduct(da.productCount);
                                                            alert(t.data+" has been deleted successfully");
                                                            navi("/ListallproductDetails")
                                                        }
                                                    }>REMOVE
                                                    </button>            
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            );
}