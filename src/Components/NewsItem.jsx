import React from "react";
import logo from '../logo.png'
const NewsItem = (props) => {
    // constructor() {
    //     super();
    //     this.state = {
    //         title: "Hello world this React",
    //         body: "This is state in class based component in ReactJS",
    //         imageUrl:"https://external-preview.redd.it/4p_yjvzRb-If9ZX3jZphOSm0caaXVhXXNPFlT7ipays.jpg?width=640&crop=smart&auto=webp&s=12de4416e90802f7102530bd76cfee0f78dce95c",
    //     }
    // }
    // changeValue = () => {
    //     this.setState ({
    //         title: "You are no fire !!!!",
    //         body: "You change the value of state in class Based Conmponent.",
    //         imageUrl:"https://images.news18.com/telugu/uploads/2022/10/Rashmika-latest-df-8.jpg?im=Resize,width=904,aspect=fit,type=normal",
    //     })
    // }


    //destrcutor value else we need to write like that this.props.img and so on.
    let { img, title, url, publishDate, source } = props;
    return (
        <>
            <div className="sm:hidden relative min-h-fit h-80 w-[90vw] m-2 p-5 flex flex-col justify-between items-center bg-white border-gray-200 rounded-lg shadow-md dark:bg-gray-600 dark:border-gray-700" id="default css">
                <span className="bg-red-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-600 dark:text-white" id="source">{source}</span>
                {/*if the url is null in fetch data then we will display our logo */}
                <img className="rounded-lg h-[53%] w-full " src={img === null ? logo : img} alt="Dailink-News" />

                <div className="text-justify">
                    <p className="mb-3 font-normal text-sm  text-slate-200">{title === null ? 'Sorry detail not provided by source please click on Read More' : title}</p>
                </div>
                <p className="mb-3 font-normal text-xs text-slate-200">Published On :- {new Date(publishDate).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</p>
                <a href={url} className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                    Read More
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>

            <div className="hidden sm:block relative min-h-fit h-96 w-96 m-4  p-5 flex flex-col justify-between items-center bg-white border-gray-200 rounded-lg shadow-md dark:bg-gray-600 dark:border-gray-700" id="breakpoint css">
                
                <span className="bg-red-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-600 dark:text-white" id="source">{source}</span>
                {/*if the url is null in fetch data then we will display our logo */}
                <img className="rounded-lg h-3/5 w-full " src={img === null ? logo : img} alt="Dailink-News" />

                <div className="text-justify">
                    <p className="mb-3 font-normal text-slate-200">{title === null ? 'Sorry detail not provided by source please click on Read More' : title}</p>
                </div>
                <p className="mb-3 font-normal text-slate-200">Published On :- {new Date(publishDate).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</p>
                <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                    Read More
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>      
        </>
    );
}
export default NewsItem;