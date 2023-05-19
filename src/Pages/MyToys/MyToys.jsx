/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import TabelRow from './TabelRow';
import { AuthContext } from '../../Components/AuthProvider';

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useEffect( ()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[user])

    const [dToys, setDtoys] = useState(toys)

    return (
        <div>
           <p className='text-center font-semibold text-5xl text-color my-10'>My Toys</p>

            <div className="overflow-x-auto w-full shadow-xl my-5">
                <table className="table w-full">
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
                    <tbody>
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