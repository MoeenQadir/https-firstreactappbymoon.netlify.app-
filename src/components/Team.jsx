import React from "react";
import img from'../assets/img.png'
function Team(){
    return(
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial"
                                     className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                     src={img} ></img>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica
                                        stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui
                                        shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny
                                        pack vaporware.</p>
                                    {/*<span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>*/}
                                    {/*<h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN*/}
                                    {/*    CAULFIELD</h2>*/}
                                    {/*<p className="text-gray-500">Senior Product Designer</p>*/}
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial"
                                     className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                     src={img}></img>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica
                                        stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui
                                        shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny
                                        pack vaporware.</p>
                                    {/*<span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>*/}
                                    {/*<h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER*/}
                                    {/*    KAMU</h2>*/}
                                    {/*<p className="text-gray-500">UI Develeoper</p>*/}
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial"
                                     className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                     src={img}></img>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica
                                        stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui
                                        shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny
                                        pack vaporware.</p>
                                    {/*<span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>*/}
                                    {/*<h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY*/}
                                    {/*    LETHAM</h2>*/}
                                    {/*<p className="text-gray-500">CTO</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="max-w-2xl mx-auto my-6 text-center dark:text-gray-300 text-xl">
                    Now you can Download Free Wondershare Filmora 11.8.0 includes all the necessary files to run perfectly on your system, uploaded program contains all latest and updated files, it is full offline or standalone version of Wondershare Filmora .
                </p>
            </section>
        </>
    )
}
export default Team;