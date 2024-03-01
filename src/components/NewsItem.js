import React, { Component } from "react";

const NewsItem =(props)=> {
  
 
    let {title, description, imageUrl,newsUrl, author, date,source} = props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107272250-1689590132264-gettyimages-1514461503-20230708_city_greenwich_view_002.jpeg?v=1707977812&w=740&h=416&ffmt=webp&vtcrop=y":imageUrl} 
          className="card-img-top" alt="..." />
          <div className="card-body">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>{source}</span>
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel= "norefral" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
