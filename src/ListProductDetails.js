import { useEffect, useState } from 'react';
import './Images.css'
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const ListallproductDetails=()=>
{
    const navi=useNavigate();
    const[allvalues,setAllvalues]=useState([])

    const productvalue=async()=>
    {
    }

    useEffect(()=>
    {
        productvalue();
    })

  
    return(
                <>
                <div className="container mt-5 bg-primary " >
                    <div className="row justify-content-center">
                                <div className="table-responsive-lg">
                                    <table className="col-lg-8 col-md-10 col-sm-12 table table-striped ">
                                        <thead id="texting">
                                            <tr>
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
                                                allvalues.map((data)=>(
                                                    <tr>
                                                        <td>
                                                            <a href=" " className="btn btn-outline-primary">{data.productCount}</a>
                                                        </td>
                                                        <td>{data.productCategory}</td>
                                                        <td>{data.productBrand}</td>
                                                        <td>{data.productName}</td>
                                                        <td>{data.productOffer}</td>
                                                        <td>{data.productPrice}</td>
                                                        <td>
                                                            <a className="btn btn-outline-secondary" href=''>UPDATE</a>
                                                            <button className="btn btn-outline-danger">
                                                                Delete
                                                            </button>
                                                         </td>
                                                    </tr>

                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
                </>
            );
}