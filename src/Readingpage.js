import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Readoneproduct } from './Connect';

export const Reading=()=>
{
    const [customervalues,setCustomervalues]=useState({})
    const {myid}=useParams();

    useEffect(()=>
    {
        callreadingvalues();
    })

    const callreadingvalues=async()=>
    {
        const t=await Readoneproduct(myid);
        setCustomervalues(t.data);
    }

    return(
        <>
        <div className="container row justify-content-center">
            <div className="card col-lg-8 col-md-10 col-sm-12 bg-primary">
                <div className="card-body">
                    <h1>{customervalues.productCount}</h1>
                    <h1>
                        {
                            customervalues.productCategory
                        }
                    </h1>
                    <h1>
                        {
                            customervalues.productBrand
                        }
                    </h1>
                    <h1>
                        {
                            customervalues.productName
                        }
                        </h1>
                        <h1>
                        {
                            customervalues.productPrice
                        }
                    </h1>
                    <h1>
                        {
                            customervalues.productOffer
                        }
                    </h1>
                </div>
            </div>
        </div>
        </>
    );
}