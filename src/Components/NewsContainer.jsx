import React, { useState, useEffect } from "react";
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./loader";
// import { defaults } from "gh-pages";

//declaration of classbased component
const NewsContainer = (props) => {

    const [article, setartical] = useState([])
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    const [country, setcountry] = useState('in')
    const [totalResult, settotalResult] = useState(0)
    console.log(loading);
    //  capitalizeFirstLetter(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }

    const updatedNews = async () => {
        props.setProgress(10);
        document.title = `Dailink - ${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`
        // console.log(`intial value of page is ${this.state.page}`)
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=7a22bd931c5545fab1140dc40866431f&page=${page}&pagesize=${props.pagesize}&category=${props.category}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setartical(parsedData.articles);
        setloading(true);
        settotalResult(parsedData.totalResults);

        props.setProgress(100);
        // console.log(`After fetching data value of page is ${this.state.page}`)
    }
    useEffect(() => {
        updatedNews();
         // eslint-disable-next-line 
    }, [])
    //we should pass country as a prob rather can using in state varible
    const changeCountry = () => {
        console.log(`currently set on ${country}`);
        if (country === 'in') {
            setcountry('us');
            updatedNews();
        }
        else {
            setcountry('in')
            updatedNews();
        }
        setTimeout(() => {
            console.log(`Updated country is ${country}`)
        }, 3000)
    }
    const fetchMoreData = async () => {

        document.title = `Dailink - ${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`
        // console.log(`intial value of page is ${this.state.page}`)
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=7a22bd931c5545fab1140dc40866431f&page=${page}&pagesize=${props.pagesize}&category=${props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setartical((article.concat(parsedData.articles)));
        setloading(false);
        settotalResult(parsedData.totalResults);
        setpage(page + 1)
    }

    return (
        <>
            <div className="sm:hidden bg-slate-300 min-h-screen h-auto pt-24 px-4 box-border flex flex-col flex-wrap " id="default css">
                <div className=" bg-slate-300 flex items-center justify-evenly p-4 flex-wrap">
                    <div className="flex items-center mr-4">
                        <input id="red-radio" type="radio" value="india" name="colored-radio" onClick={changeCountry} className="w-4 h-4  bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                        <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900">India</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input id="red-radio" type="radio" value="usa" name="colored-radio" onClick={changeCountry} className="w-4 h-4  bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900 ">United State</label>
                    </div>
                </div>
                <h1 className="text-lg font-bold mb-3">Dailink - {props.category === 'general' ? "Home" : `Top News in ${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`}</h1>
                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={((article.length !== totalResult) && (article.length <= totalResult))}
                    loader={<Loader />}
                >
                    <div className=" bg-slate-300 min-h-screen h-auto w-full box-border flex flex-row flex-wrap items-center ">
                        {article.map((element, index) => {
                            return <div key={index}>
                                <NewsItem img={element.urlToImage} title={element.title} url={element.url} publishDate={new Date(element.publishedAt)} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>

            <div className="hidden sm:block bg-slate-300 min-h-screen h-auto pt-[90px] py-10 px-32 box-border flex flex-col flex-wrap " id="breakpoint css">
                <div className=" bg-slate-300  flex items-center justify-evenly p-4 flex-wrap">
                    <div className="flex items-center mr-4">
                        <input id="red-radio" type="radio" value="india" name="colored-radio" onClick={changeCountry} className="w-4 h-4  bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                        <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900">India</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input id="red-radio" type="radio" value="usa" name="colored-radio" onClick={changeCountry} className="w-4 h-4  bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900 ">United State</label>
                    </div>
                </div>
                <h1 className="text-3xl font-bold mb-3">Dailink - {props.category === 'general' ? "Home" : `Top News in ${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`}</h1>
                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={((article.length !== totalResult) && (article.length <= totalResult))}
                    loader={<Loader />}
                >
                    <div className=" bg-slate-300  min-h-screen h-auto w-full box-border flex flex-row flex-wrap items-center ">
                        {article.map((element, index) => {
                            return <div key={index}>
                                <NewsItem img={element.urlToImage} title={element.title} url={element.url} publishDate={new Date(element.publishedAt)} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>

        </>
    );

}
export default NewsContainer;

















// componentDidUpdate(){
//     console.log("componentDidUpdate() Called in NewsContainer...");
// }
// componentWillUnmount(){
//     console.log("Newcontainer Will be destory soon...")
// }
// handleNextPg = async () => {
//     if (!(this.state.page + 1 > Math.ceil((this.state.totalResult / props.pagesize)))) {

//         this.setState({ page: this.state.page + 1 })
//         console.log(`Next is clicked and page is ${this.state.page}`)
//         updatedNews();
//     }
// }
// handlePreviousPg = async () => {

//     this.setState({ page: this.state.page - 1 })
//     console.log(`Previous Click and page is ${this.state.page}`)
//     updatedNews();
// }


/* <div className="flex flex-row justify-between px-8 w-full box-border">
                        <div>
                            <button className={`text-slate-100 bg-slate-800  h-12 w-24 rounded-md p-2 ${(this.state.page > 1) ? 'block' : 'hidden'}`} onClick={this.handlePreviousPg} >Previous </button>
                        </div>
                        <button className={`text-slate-100 bg-slate-800  h-12 w-24 rounded-md p-2 
                        ${(this.state.page + 1 > Math.ceil((this.state.totalResult / props.pagesize)) ? 'hidden' : 'block')}`} onClick={this.handleNextPg}>Next </button>

                    </div> */