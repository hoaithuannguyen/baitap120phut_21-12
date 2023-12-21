import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Products() {
    const [allTodo, setAllTodo] = useState([]);
    const [todo, setTodo] = useState({
        name: "",
    });
    const [isEdit, setIsEdit] = useState(false);
    
    const handleGetTodo = async () => {
        try {
            const response = await axios.get("http://localhost:5693/api/v1/todoList");
            setAllTodo(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        handleGetTodo();
    }, []);


    const handleValueInput = (e) => {
        const { name, value } = e.target
        setTodo({
            ...todo,
            [name]: value
        })
    }
    //
    const handleAdd = async () => {
        try {
            const response = await axios.post("http://localhost:5693/api/v1/todoList", {
                ...todo,
            });
            setAllTodo(response.data);
            setTodo({
                name: "",
            });
        } catch (error) {
            console.log("lỗi rồi11111111111111");
        }
    };
    //
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:5693/api/v1/todoList/${id}`
            );
            setAllTodo(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    //
    const handleEdit = async (item) => {
        setTodo(item);
        setIsEdit(true);
    };
    const handleSave = async () => {
        try {
            const response = await axios.put(
                `http://localhost:5693/api/v1/todoList/${todo.id}`,
                todo
            );
            setAllTodo(response.data);
            setTodo({
                name: "",
            });
        } catch (error) {
            alert(error.response.data.message);
        }
        setIsEdit(false);
    };
    return (
        <>
           
            <table border={1} cellPadding={5} cellSpacing={5}>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>status</th>
                    <th>Action</th>
                </tr>
                {allTodo.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.status}</td>
                        <td>
                            <button onClick={() => handleEdit(item)}>Edit</button>
                            <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                })}
            </table>
            <div>
                <label htmlFor="">name</label>
                <input type="text"
                    name="name"
                    onChange={handleValueInput}
                    value={todo.name}
                /> <br />
            </div>
            <div>
                <button
                    onClick={isEdit ? handleSave : handleAdd}
                >
                    {isEdit ? "Save" : "Add"}
                </button>
            </div>
        </>
    )
}
