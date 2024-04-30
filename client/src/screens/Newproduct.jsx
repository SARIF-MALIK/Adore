import React, { useRef, useState } from "react";

function Newproduct() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInput = useRef(null); 

  const handleFile = (file) => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  const handleOndragOver = (e) => {
    e.preventDefault();
  };
  const handleOnDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let imageFile = e.dataTransfer.files[0];
    handleFile(imageFile);
  };
  return (
    <div className="absolute top-[8%] left-[40%]">
      <div className="bg-white w-[450px] h-[650px] p-5 rounded-lg">
        <h1 className="poppins-5 text-xl text-[#383E49]">New Product</h1>
        <div className="flex justify-center gap-5 items-center my-5 mb-10">
          <div>
          <div
            className="drag w-[81px] h-[81px] border-2 border-dashed rounded-lg overflow-hidden object-cover"
            onDragOver={handleOndragOver}
            onDrop={handleOnDrop}
            onClick={e=>handleFile(e.target.files[0])}
          >
            {previewUrl && (
              <div className="image">
                <img src={previewUrl} alt="image" className=""/>
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
        
        <div>
          <form
            action=""
            className="flex flex-col gap-3 poppins-5 text-[#48505E] text-sm"
          >
            <div className="flex justify-between items-center">
              <label htmlFor="prodName">Product Name</label>
              <input
                type="text"
                id="proName"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter product name"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodId">Product ID</label>
              <input
                type="text"
                id="prodId"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter product id"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodCat">Category</label>
              <input
                type="text"
                id="prodCat"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter product category"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodPrice">Buying Price</label>
              <input
                type="number"
                id="prodPrice"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter buying price"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodQty">Quantity</label>
              <input
                type="text"
                id="prodQty"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter quantity"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodUnit">Unit</label>
              <input
                type="text"
                id="prodUnit"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter product unit"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodExp">Expiry Date</label>
              <input
                type="text"
                id="prodExp"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="DD/MM/YY"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodThval">Threshold Value</label>
              <input
                type="text"
                id="prodThval"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter threshold value"
              />
            </div>

            <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
              <button className="btn">Discard</button>
              <button className="btn bg-[#1366D9] text-white">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newproduct;
