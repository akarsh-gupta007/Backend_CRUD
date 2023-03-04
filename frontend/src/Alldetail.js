import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./App.css"
import { useParams } from 'react-router-dom';
const Alldetail = () => {

    const [storedata, setStoredata] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:9000/getalldetails")
            .then((res) => res.data)
            .then(res => { setStoredata(res) })
    }, [storedata])
    console.log(storedata)
    const editfun = () => {

        console.log(id)
        axios.patch("http://localhost:9000/update/:_id")
            .then((res) => res.data)
            .then(res => { console.log(res) })
        console.log("clicked the edit btn")
    }
    const deletemanyfunc = () => {
        alert("All The Data Will be Deleted");
        fetch('http://localhost:9000/deletemany', {
            method: 'DELETE'
        })
            .then((response) => response.json())
    }
    const deletefunc = () => {
        alert("All The Data Will be Deleted");
        fetch('http://localhost:9000/deletemany', {
            method: 'DELETE'
        })
            .then((response) => response.json())
    }



    return (

        <div>
            <h1>all details</h1>
            <button onClick={deletemanyfunc}>Delete the all the user</button>
            <table border="2px" width="100%">
                <tr>
                    <th>Name</th>
                    <th>Phone No.</th>
                    <th>Email I'D</th>
                    <th>Query</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {storedata.map((e) => {
                    return (
                        <>
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.ranking}</td>
                                <td>{e.email}</td>
                                <td>{e.tech}</td>
                                <td><button onClick={editfun}>Edit</button></td>
                                <td><button onClick={deletefunc}>Delete</button></td>
                            </tr>


                        </>
                    )
                })}


            </table>


        </div>
    )
}

export default Alldetail