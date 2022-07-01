import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Task = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDeleting = id => {
        const proceed = window.confirm('Are u sure to delete?');
        if (proceed) {
            console.log('Delete task', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }

                })
        }
    }

    return (
        <div className='text-center my-10'>
            <h2 className='text-xl font-bold my-3'>Total Task: {users.length}</h2>


            <div className='flex justify-center items-center overflow-x-auto'>
                <table class="table w-1/2 text-left table table-zebra ">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Task</th>
                            <th>Check Box</th>
                            <th>Remove</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) =>
                                < tr >
                                    {/* key={user._id} */}
                                    <td>{index + 1}</td>
                                    <td>{user.task}</td>
                                    <td>
                                        <input className='font-bold text-2xl' type="checkbox" />
                                    </td>

                                    <td><button onClick={() => handleDeleting(user._id)}
                                        className='btn btn-primary btn-sm'
                                    >Remove</button> </td>

                                    <td> <Link to={`/update/${user._id}`}> <button
                                        className='btn btn-secondary btn-sm'
                                    >Edit</button></Link></td>



                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Task;