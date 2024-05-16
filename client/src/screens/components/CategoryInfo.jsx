import React, { useEffect, useState } from 'react';
// import { CategoryData } from './Data';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryInfo = () => {
    const [editIndex, setEditIndex] = useState(-1);
    const [createMode, setCreateMode] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [CategoryData, setCategoryData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/api/v1/category/getall-categories')
            setCategoryData(response.data)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        // console.log(response.data)
    }

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    // const handleDelete = (index) => {
    //     // Implement delete functionality here
    // };

    const handleCreate = () => {
        setCreateMode(true);
    };

    const handleSubmitCreate = () => {
        // Implement create functionality here
        setCreateMode(false);
        setNewCategoryName('');
    };

    const handleCancelCreate = () => {
        setCreateMode(false);
        setNewCategoryName('');
    };

    const handleInputChange = (event) => {
        setNewCategoryName(event.target.value);
    };

    const handleEditCancel = () => {
        setEditIndex(-1);
    };

    const handleEditSubmit = () => {
        // Implement edit functionality here
        setEditIndex(-1);
    };

    const handleDelete = (index) => {
        setLoading(true);
        console.log(index)
        // axios
        //     .delete(`http://localhost:8080/api/v1/category/delete-category/${id}`)
        //     .then(() => {
        //         setLoading(false);
        //         navigate("/");
        //     })
        //     .catch((error) => {
        //         setLoading(false);
        //         alert("Error Occured");
        //         console.log(error);
        //     });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
            <div className="header flex justify-between items-center">
                <div>
                    <h1 className="poppins-5 text-lg py-5">Category</h1>
                </div>
                {!createMode ? (
                    <button onClick={handleCreate} className="btn poppins-4 text-sm text-blue-500">
                        Create Category
                    </button>
                ) : (
                    <div>
                        <input
                            type="text"
                            value={newCategoryName}
                            onChange={handleInputChange}
                            placeholder="Enter category name"
                            className="poppins-4 text-sm border border-gray-300 rounded-md px-2 py-1 mr-2"
                        />
                        <button onClick={handleSubmitCreate} className="btn poppins-4 text-sm text-green-500">
                            Submit
                        </button>
                        <button onClick={handleCancelCreate} className="btn poppins-4 text-sm text-red-500 ml-2">
                            Cancel
                        </button>
                    </div>
                )}
            </div>
            <div>
                <table className="text-[#667085] w-full">
                    <thead>
                        <tr className="h-10">
                            <th className="poppins-4 text-sm text-start">Name</th>
                            <th className="poppins-4 text-sm text-start">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CategoryData.map((item, index) => (
                            <tr key={index} className="poppins-5 text-sm border-t-2 h-16">
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            value={item.category}
                                            onChange={(e) => {
                                                // Implement onChange for edit field
                                            }}
                                            className="poppins-4 text-sm border border-gray-300 rounded-md px-2 py-1"
                                        />
                                    ) : (
                                        item.category
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <>
                                            <button onClick={handleEditSubmit} className="btn poppins-4 text-sm text-green-500 mr-2">
                                                Submit
                                            </button>
                                            <button onClick={handleEditCancel} className="btn poppins-4 text-sm text-red-500">
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEdit(index)} className="btn poppins-4 text-sm text-blue-500 mr-2">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelete(item._id)} className="btn poppins-4 text-sm text-red-500">
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
    );
};

export default CategoryInfo;