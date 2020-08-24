import React from "react";
import Portfolio from "./Portfolio";

const PortfolioSection = () =>
{
    return(
        <section class="page-section portfolio" id="portfolio">
        <div class="container">

            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
    
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>

            <div class="row">
         
                <div class="col-md-6 col-lg-4 mb-5">
                    <Portfolio img = "img/portfolio/cabin.png" />
                </div>
           
                <div class="col-md-6 col-lg-4 mb-5">
                    <Portfolio img ="img/portfolio/cake.png" />
 
                </div>
         
                <div class="col-md-6 col-lg-4 mb-5">
                <Portfolio img ="img/portfolio/circus.png" />
                </div>
 
                <div class="col-md-6 col-lg-4 mb-5">
                    <Portfolio img ="img/portfolio/game.png" />
                </div>
         
                <div class="col-md-6 col-lg-4 mb-5">
                 <Portfolio img ="img/portfolio/safe.png" />
                </div>
            
                <div class="col-md-6 col-lg-4 mb-5">
                <Portfolio img ="img/portfolio/submarine.png" />
               </div>
            </div>
        </div>
    </section>
    )
}


export default PortfolioSection;