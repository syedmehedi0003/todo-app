import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdateTask = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));

    }, [])


    const handleEditTask = event => {
        event.preventDefault();
        const task = event.target.task.value;

        const updateData = { task };

        //send data to the server
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
                alert('Added successfully');
                event.target.reset();
            })

    }


    return (
        <div className='text-center mt-5 text-xl'>
            <h2>Task: {user.task}</h2>

            <div className='flex justify-center items-center mt-5 text-xl'>
                <div className=' card w-1/2 bg-primary '>

                    <form onSubmit={handleEditTask}>
                        <input type="text" name="task" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs text-black font-normal my-4" required />

                        <input class="btn btn-sm btn-primary p-2" type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;