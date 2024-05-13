import React, { useRef, useState } from 'react'

const AddProduct = () => {

    const handleOndragOver = () => { }
    const handleOnDrop = () => { }

    const [previewUrl, setPreviewUrl] = useState("");
    const fileInput = useRef(null); 


    return (
        <form id="form" action="" className='absolute  left-[40%]'>
            <div className=" flex justify-center items-center rounded-lg h-screen top-[122px] left-96">
                <div className="w-full p-6 shadow-lg bg-white rounded-md">
                    <h1 className=" w-full h-8 poppins-6 text-center" htmlFor="">Place Order</h1>

                    <div className="flex justify-center gap-5 items-center my-5 mb-10">
                        <div>
                            <div
                                className="drag w-[81px] h-[81px] border-2 border-dashed rounded-lg overflow-hidden object-cover"
                                onDragOver={handleOndragOver}
                                onDrop={handleOnDrop}
                                onClick={e => handleFile(e.target.files[0])}
                            >
                                {previewUrl && (
                                    <div className="image">
                                        <img src={previewUrl} alt="image" className="" />
                                    </div>
                                )}
                            </div>
                            {previewUrl && <span>{image.name}</span>}
                        </div>

                        <div className="flex flex-col items-center poppins-4 text-[#858D9D] text-sm">
                            <p>Drag image here</p>
                            <p>or</p>
                            <label htmlFor="imageInput" className="text-[#448DF2] hover:cursor-pointer">Browse image</label>
                            <input
                                type="file"
                                accept='image/*' hidden
                                ref={fileInput}
                                onChange={e => handleFile(e.target.files[0])}
                                id="imageInput"
                            />
                        </div>
                    </div>

                    <div className="mt-4 mb-7">
                        <label for="username" className=" text-base mb-2">Product Name </label>
                        <input type="text" id="username" className=" float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter product name" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="username" className=" text-base mb-2">Product Id</label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Product Id" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="username" className=" text-base mb-2">Category</label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Category" />
                    </div>
                    {/* <div className="mt-3 mb-7">
                        <label for="username" className=" text-base mb-2">Product Img </label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Drop image" />
                    </div> */}
                    <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
                        <button className="btn">Discard</button>
                        <button className="btn bg-[#1366D9] text-white">
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddProduct