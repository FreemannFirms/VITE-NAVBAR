import { useState } from "react"

export const NavBar = () => {
    const [open, setOpen] = useState(false)

    return(
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center p-2 bg-white">
                    <div className="flex items-center justify-between lg:ml-9">
                        <div className="flex items-center justify-between p-1 w-full text-base">
                            <a href="#" className="">
                                <img className="w-auto h-10 sm:h-7" src="" alt="IMAGE" />
                            </a>
                            <h1 className="hidden md:block p-1 text-primaryColor uppercase font-extrabold " >
                                NAV HEADER
                            </h1>
                        </div>


                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button onClick={() => setOpen(!open)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`${open ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full '}` + "absolute inset-x-0 z-20 flex-1 px-6 lg:px-0 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-1 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-around w-full text-base "}>
                        <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:-mx-2 lg:flex-row lg:items-center">
                            <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-grao-200" >LINK</a>
                            <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-gray-200" >LINK</a>
                            <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-gray-200" >LINK</a>
                            <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-gray-200" >LINK</a>
                            <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-gray-200" >LINK</a>
                        </div>

                        <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2 items-center">
                            <div className="flex items-center mt-2 lg:mt-0">
                                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                                    SOCIAL LINK
                                </a>
                                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                                    SOCIAL LINK
                                </a>
                                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                                    SOCIAL LINK
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </nav >
    )
}