// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CategoryData } from './Data'
// import axios from 'axios';

// const CategoryInfo = ({ toggle, setToggle }) => {
//     return (
//         <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
//             <div className="header flex justify-between items-center">
//                 <div>
//                     <h1 className="poppins-5 text-lg py-5">Category</h1>
//                 </div>
//                 <div className="flex gap-3">
//                     <button
//                         className="btn bg-[#1366D9] text-white"
//                         onClick={() => setToggle(!toggle)}
//                     >
//                         Add Category
//                     </button>
//                 </div>
//             </div>
//             <div>
//                 <table className="text-[#667085] w-full">
//                     <tr className="h-10"
//                     >
//                         <th className="poppins-4 text-sm text-start">Name</th>
//                         <th className="poppins-4 text-sm text-start"> ID</th>
//                     </tr>

//                     {
//                         CategoryData.slice(0, 8).map(item => {
//                             return (
//                                 <tr className="poppins-5 text-sm border-t-2 h-16">
//                                     <td>{item.name}</td>
//                                     <td>{item.id}</td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default CategoryInfo;

import React, { useState } from 'react';
import { CategoryData } from './Data';
import { Link } from 'react-router-dom';

const CategoryInfo = () => {
    const [editIndex, setEditIndex] = useState(-1);
    const [createMode, setCreateMode] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        // Implement delete functionality here
        console.log(index); 
    };

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
                        {CategoryData.slice(0, 8).map((item, index) => (
                            <tr key={index} className="poppins-5 text-sm border-t-2 h-16">
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            value={item.name}
                                            onChange={(e) => {
                                                // Implement onChange for edit field
                                            }}
                                            className="poppins-4 text-sm border border-gray-300 rounded-md px-2 py-1"
                                        />
                                    ) : (
                                        item.name
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
                                            <button onClick={ () => handleDelete(index)} className="btn poppins-4 text-sm text-red-500">
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

export default CategoryInfo;