import React, { Component } from "react";
import NewsItem from './NewsItem'
export default class NewsContainer extends Component {
    constructor() {
        super();
        // console.log("I am Constructor and i always runs first");
        this.state = {
            article: [],
            page: 1,
            loading: false,
            country: 'in',
        }
    }
    updatedNews = async () => {
        console.log(`intial value of page is ${this.state.page}`)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=8b20c3b93f15436f84dc5cda33e2629f&page=${this.state.page}&pagesize=${this.props.pagesize}&category=${this.props.category}`;

        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: parsedData.articles,
            loading: true,
            totalResult: parsedData.totalResults,
        })
        console.log(`After fetching data value of page is ${this.state.page}`)
    }
    async componentDidMount() {
        // console.log("ComponentDidMount Run after the render method");
        this.updatedNews();
    }
    handleNextPg = async () => {
        if (!(this.state.page + 1 > Math.ceil((this.state.totalResult / this.props.pagesize)))) {

            this.setState({ page: this.state.page + 1 })
            console.log(`Next is clicked and page is ${this.state.page}`)
            this.updatedNews();
        }
    }
    handlePreviousPg = async () => {

        this.setState({ page: this.state.page - 1 })
        console.log(`Previous Click and page is ${this.state.page}`)
        this.updatedNews();
    }
    //we should pass country as a prob rather can using in state varible
    changeCountry = () => {
        console.log(`currently set on ${this.state.country}`);
        if (this.state.country === 'in') {
            this.setState({ country: 'us',})
            this.updatedNews();
        }
        else { 
             this.setState({country: 'in', }) 
             this.updatedNews();
            }
        setTimeout(() => {

            console.log(`Updated country is ${this.state.country}`)
        }, 3000)
    }
    render() {

        return (

            <>
                <div className="flex flex-wrap">
                    <div className="flex items-center mr-4">
                        <input id="red-radio" type="radio" value="india" name="colored-radio" onClick={this.changeCountry} className="w-4 h-4  bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                        <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">India</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input id="red-radio" type="radio" value="usa" name="colored-radio" onClick={this.changeCountry} className="w-4 h-4  bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">United State</label>
                    </div>
                </div>
                <div className="bg-slate-300 min-h-screen h-auto  py-10 px-32 box-border flex flex-row flex-wrap ">

                    <h1 className="text-3xl font-bold mb-3">Dailink - {this.props.category === 'general' ? "Home" : `Top News in ${this.props.category}`}</h1>
                    <div className="bg-slate-300 min-h-screen h-auto w-fit box-border flex flex-row flex-wrap items-center ">

                        {/* adding loading spinner while news is loading... if this.page.loading is false then sppiner will be displayed */}
                        {this.state.loading ? this.state.article.map((element) => {
                            return <div key={element.url}>
                                <NewsItem img={element.urlToImage} title={element.title} url={element.url} publishDate={new Date(element.publishedAt)} source={element.source.name} />
                            </div>
                        }) : <div className="h-full w-full box-border bg-slate-300 text-9xl flex items-center justify-center"><div className="lds-dual-ring"></div></div>}

                    </div>
                    <div className="flex flex-row justify-between px-8 w-full box-border">
                        <div>
                            <button className={`text-slate-100 bg-slate-800  h-12 w-24 rounded-md p-2 ${(this.state.page > 1) ? 'block' : 'hidden'}`} onClick={this.handlePreviousPg} >Previous </button>
                        </div>
                        <button className={`text-slate-100 bg-slate-800  h-12 w-24 rounded-md p-2 
                        ${(this.state.page + 1 > Math.ceil((this.state.totalResult / this.props.pagesize)) ? 'hidden' : 'block')}`} onClick={this.handleNextPg}>Next </button>

                    </div>

                </div>

            </>
        );
    }
}
