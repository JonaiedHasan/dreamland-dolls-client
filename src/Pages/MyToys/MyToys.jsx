/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import TabelRow from './TabelRow';
import { AuthContext } from '../../Components/AuthProvider';

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);

     const [high , setHigh] = useState();
     const [low, setLow] = useState();
     const [change , setChange] = useState(true)

    useEffect( ()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[user])

    useEffect( ()=>{
        fetch(`http://localhost:5000/myToysHigh?userEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => setHigh(data))
    },[user])

    
    useEffect( ()=>{
        fetch(`http://localhost:5000/myToysLow?userEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => setLow(data))
    },[user])
   

    const handleWithHigh = () =>{
        setToys(high);
        setChange(true)
        
    };

    const handleWithLow = () =>{
        setToys(low)
        setChange(false)
    }
    

    const [dToys, setDtoys] = useState(toys)

    return (
        <div>
           <p className='text-center font-semibold text-5xl text-color my-10'>My Toys</p>
              <div className='text-center'>
                  <button className={`btn btn-outline ${ change && 'btn-primary'}`}
                  onClick={handleWithHigh}
                  >
                    High Price
                  </button>
                  <button  className={`btn btn-outline ${change && 'btn-primary'}`}
                  onClick={handleWithLow}>
                      Low price
                  </button>

              </div>
            <div className="overflow-x-auto w-full shadow-xl my-5">
                <table className=" table w-full h">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Image</th>
                            <th>Toy</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* row 1 */}

                        {
                            toys.map(toy => <TabelRow
                                 key={toy._id}
                                 toy={toy}
                                 toys={toys}
                                 setToys={setToys}
                            ></TabelRow>)
                        }
                    </tbody>
                   
                     
                </table>
               
            </div>
        </div>
    );
};

export default MyToys;