import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api_root';


const TodoCreationForm = () => {
    const id = useParams().id
    const url = `/${id}/`
    const navigate = useNavigate();
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("")
    const [status, setStatus] = useState(false)

    const new_data = { title, description, status }

    
    const[apiData, setApiData] = useState([])
    useEffect(() => {
        getSingleTodo();
    }, []);
    const getSingleTodo = () => {
        try {
            api.get(url).then((response) => {
                setApiData(response.data);
                settitle(response.data.title);
                setdescription(response.data.description);
                setStatus(response.data.status);
                console.log("server bata aayeko status",response.data.status)
            })
        } catch (error) {
            console.log(error)
        }
    };


    const CreateAndUpdateTodo = (event) => {
        event.preventDefault();
        console.log(111, new_data)
        if(id===undefined){
            api.post("/", new_data
            ).then((response) => {
                settitle("");
                setdescription("");
                setStatus(false);
                navigate('/')
            }).catch((error) => {
                console.log(error)
            })
        }else{
            api.put(url, new_data
            ).then((response) => {
                settitle("");
                setdescription("");
                setStatus(false);
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
                        <input id="completed" type="checkbox" value={status} className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:outline-none" onClick={(e) => setStatus(e.target.checked)} />
                    </div>
                    <label className="ml-2 text-sm font-medium text-gray-900 ">Completed</label>
                </div>
                <button type='submit' className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 font-medium rounded text-sm px-5 py-1.5 mr-2 mb-2">Submit</button>
                
            </form>

        </div>
    )
}

export default TodoCreationForm