import React from 'react'

const Branch = () => {
    return (
        <div>
            <div className="w-full bg-white rounded-lg float-right py-5">
                <div className=' ml-5 '>
                    <h1 className='float-left text-lg font-medium text-[#383E49]'>Manage Branch</h1>
                    <button class="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded float-right mr-4 text-sm">
                        Add Store
                    </button>
                </div>
                <div class="w-10/12 ml-10 mt-16 bg-white rounded-lg relative">
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full h-40">
                        <div class="relative w-full md:w-64 h-96 md:h-40">
                            <img class="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg bg-slate-100 text-center opacity-80" src="https://www.hollywoodreporter.com/wp-content/uploads/2015/12/got-iconic-images-18_2.jpg?w=3000" alt="Singular branch" />
                            <div class="absolute inset-0 flex items-center justify-center">
                                <h5 class="text-xl tracking-tight text-white poppins-5">Singular Branch</h5>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-xl tracking-tight text-[#5D6679] poppins-5">Lisy Store</h5>
                            <p class="mb-3 text-gray-700 dark:text-gray-400 poppins-4">1A/Krihnarajapuram, 3rd street sulur</p>
                            <p class="mb-3 text-gray-700 dark:text-gray-400 poppins-4">Coimbatore - 6313403</p>
                            <p class="mb-3 text-gray-700 dark:text-gray-400 poppins-4">044-653578</p>
                        </div>
                        <button class="absolute top-4 right-4 bg-white hover:bg-gray-100 text-blue-500 font-semibold py-1 px-6 border border-gray-400 rounded shadow mr-5 ml-auto">
                            Edit
                        </button>
                    </a>
                </div>

                <div className="w-10/12 ml-10 mt-10 bg-white rounded-lg relative">
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full h-40 ">
                        <div className="relative w-full md:w-64 h-96 md:h-40">
                            <img className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg bg-slate-100 text-center opacity-80" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Singular branch" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h5 className="text-xl tracking-tight text-white poppins-5">Slur Branch</h5>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-xl tracking-tight text-[#5D6679] poppins-5">Lisy Store</h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400 poppins-4">54 Ramani colony, 3 rd street sulur</p>
                            <p className="mb-3 text-gray-700 dark:text-gray-400 poppins-4">Coimbatore - 63133452</p>
                            <p className="mb-3 text-gray-700 dark:text-gray-400 poppins-4">044- 653763</p>
                        </div>
                        <button className="absolute top-4 right-4  bg-white hover:bg-gray-100 text-blue-500 font-semibold py-1 px-6 border border-gray-400 rounded shadow mr-5 ml-auto ">
                            Edit
                        </button>
                    </a>
                </div>

                <div className="w-10/12 ml-10 mt-10 bg-white rounded-lg relative">
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full h-40 ">
                        <div className="relative w-full md:w-64 h-96 md:h-40">
                            <img className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg bg-slate-100 text-center opacity-80" src="https://ml17qxtnn7dq.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/f:best/https://starstuffscience.com/wp-content/uploads/2019/07/Drogon-Melting-Throne.jpg" alt="Singular branch" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h5 className="text-xl tracking-tight text-white poppins-5">Gaandipuram Branch</h5>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-xl tracking-tight text-[#5D6679] poppins-5">Lisy Store</h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400 poppins-4">32/ Venkatasamy layout, 3 rd street sulur</p>
                            <p className="mb-3 text-gray-700 dark:text-gray-400 poppins-4">Coimbatore - 6313403</p>
                            <p className="mb-3 text-gray-700 dark:text-gray-400 poppins-4">044- 653578</p>
                        </div>
                        <button className="absolute top-4 right-4  bg-white hover:bg-gray-100 text-blue-500 font-semibold py-1 px-6 border border-gray-400 rounded shadow mr-5 ml-auto ">
                            Edit
                        </button>
                    </a>
                </div>
        </div>
        </div>


    )
}

export default Branch