import React from "react";

const Portfolio = ({img ="img/portfolio/cake.png"}) =>
{
    return(
        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        <img className="img-fluid" src={img} alt="" />
    </div>
    )
}

export default Portfolio;