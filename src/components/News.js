import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./loading";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

  constructor(){
    super();
    this.state={
      article:[],
      load:false,
      page:1,
      result:0
    }
  }
  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
    this.props.setprogress(30)
    this.setState({load:true})
    let data= await fetch(url)
    let parsedata=await data.json();
    this.props.setprogress(70)
    console.log(parsedata);
    this.setState({article:parsedata.articles,
    result:parsedata.totalResults,load:false})
    this.props.setprogress(100)
  }

  fetchMoreData=async ()=>{
    this.setState({page:this.state.page + 1});
    let url= await `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
    this.setState({load:true})
    let data= await fetch(url)
    let parsedata=await data.json();
    this.setState({article:this.state.article.concat(parsedata.articles),
    load:false})
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{marginTop:"70px"}}>Top Headlines</h1>
        {this.state.load && <Loading/>}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.result}
          loader={<Loading/>}
        >
          <div className="container">
        <div className="row">
        {this.state.article.map((element)=>{
          return(
            <div key={element.url} className="col-md-4 my-1">
            <NewsItem
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              readmore={element.url}
              author={element.author}
              publishedAt={element.publishedAt}
              source={element.source.name}
              />
          </div>
          )
        })} 
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}
