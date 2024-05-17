import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { ProductData } from "./Data";
import axios from "axios"

const ProductInfo = ({toggle, setToggle}) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [ProductData, setProductData] = useState([]);

    const ProductPerPage = 7;
    const startIndex = pageIndex * ProductPerPage;
    const endIndex = (pageIndex + 1) * ProductPerPage;
    const VisibleProduct = ProductData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(ProductData.length / ProductPerPage);

    const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get('http://localhost:8080/api/v1/product/getall-product');
          console.log(res.data)
          setProductData(res.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

    const handleNextClick = () => {
        if (pageIndex < totalPages - 1) setPageIndex(pageIndex + 1);
    };
    const handlePrevClick = () => {
        if (pageIndex > 0) setPageIndex(pageIndex - 1);
    };
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
            <div className="header flex justify-between items-center">
                <div>
                    <h1 className="poppins-5 text-lg py-5">Products Information</h1>
                </div>
                <div className="flex gap-3">
                    <button
                        className="btn bg-[#1366D9] text-white"
                        onClick={() => setToggle(!toggle)}
                    >
                        Add Product
                    </button>
                </div>

            </div>
            <div>
                <table className="text-[#667085] w-full">
                    <tr className="h-10"
                    >
                        <th className="poppins-4 text-sm text-start">Product name</th>
                        <th className="poppins-4 text-sm text-start">Product ID</th>
                        <th className="poppins-4 text-sm text-start">category</th>
                        <th className="poppins-4 text-sm text-start">Product img</th>
                    </tr>

                    {
                        VisibleProduct.map(item => {
                            return (
                                <tr className="poppins-5 text-sm border-t-2 h-20">
                                    <td>{item.productName}</td>
                                    <td>{item.productID}</td>
                                    <td>{item.category.category}</td>
                                    <td className="text-[#10A760]">
                                        <div className="drag w-[80px] h-[80px] rounded-lg p-2 border-[#9D9D9D]">
                                            <img src={item.productImg} alt="img" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            <div>
                <div className="flex  justify-between pt-3 poppins-5 text-sm text-[#48505E]">
                    <button className="btn" onClick={handlePrevClick}>
                        Previous
                    </button>
                    <p className="">
                        Page {pageIndex + 1} of {totalPages}
                    </p>
                    <button className="btn" onClick={handleNextClick}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;
