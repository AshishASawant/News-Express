import React ,{Component} from 'react'
export default class NewsItem extends Component{
  render(){
      const {title,description,imageUrl,readmore,author,publishedAt,source}=this.props
        return(
            <div className="card my-2" style={{color:"white",backgroundColor:"#110000",border:"1px solid white"}}>
  {imageUrl && <img src={imageUrl} className="card-img-top" alt='not found'/>}
  {!imageUrl && <img src='noimg.png' className="card-img-top" alt='not found'/>}
  <div className="card-body">
  <span className="badge text-bg-info my-2">{source}</span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
    <a href={readmore} target="_blank" rel="noreferrer" className="btn btn-sm btn-success">Read More</a>
  </div>
</div>
        )
    }
}