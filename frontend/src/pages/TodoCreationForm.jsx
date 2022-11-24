import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api_root';


const TodoCreationForm = () => {
    const id = useParams().id
    const url = `/${id}/`
    const navigate = useNavigate();
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("")
    const [completed, setCompleted] = useState(false)

    const new_data = { title, description, completed }

    // const CreateTodo = (event) => {
    //     event.preventDefault();
    //     console.log(111, new_data)
    //     api.post("/", new_data
    //     ).then((response) => {
    //         settitle("");
    //         setdescription("");
    //         setCompleted(false);
    //         navigate('/')
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // };
    
    const[ApiData, setApiData] = useState([])
    useEffect(() => {
        getSingleTodo();
    }, []);
    const getSingleTodo = () => {
        try {
            api.get(url).then((response) => {
                setApiData(response.data);
                settitle(response.data.title);
                setdescription(response.data.description);
                setCompleted(response.data.status);
            })
        } catch (error) {
            console.log(error)
        }
    };
    console.log(111,id)


    const CreateAndUpdateTodo = (event) => {
        event.preventDefault();
        console.log(111, new_data)
        if(id===undefined){
            api.post("/", new_data
            ).then((response) => {
                settitle("");
                setdescription("");
                setCompleted(false);
                navigate('/')
            }).catch((error) => {
                console.log(error)
            })
        }else{
            api.put(url, new_data
            ).then((response) => {
                settitle("");
                setdescription("");
                setCompleted(false);
                navigate('/')
            }).catch((error) => {
                console.log(error)
            })
        }
    };


    return (
        <div className="container mx-auto">
            <p className='text-center text-2xl font-bold text-balck my-5'>Todo Item</p>
            <form className='px-10' onSubmit={CreateAndUpdateTodo} >
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none block w-full p-2.5" value={title} onChange={(e) => settitle(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <textarea col="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none block w-full p-2.5" value={description} onChange={(e) => setdescription(e.target.value)} />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value={completed} className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:outline-none" onClick={(e) => setCompleted(e.target.checked)} />
                    </div>
                    <label className="ml-2 text-sm font-medium text-gray-900 ">Completed</label>
                </div>
                <button className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 font-medium rounded text-sm px-5 py-1.5 mr-2 mb-2">Submit</button>
                
            </form>

        </div>
    )
}

export default TodoCreationForm