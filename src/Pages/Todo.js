import React from 'react';

const Todo = () => {

    const handleAddTask = event => {
        event.preventDefault();
        const task = event.target.task.value;

        const user = { task };

        //send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
                alert('Added successfully');
                event.target.reset();
            })

    }

    return (
        <div className='text-center text-3xl font-bold my-10'>


            <div className='flex justify-center items-center mt-5'>
                <div class="card w-96 bg-neutral text-neutral-content ">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">To-Do App</h2>

                        <form onSubmit={handleAddTask}>
                            <input type="text" name="task" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs text-black font-normal" required />
                            <input class="btn btn-sm btn-primary" type="submit" value="Add" />
                        </form>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Todo;