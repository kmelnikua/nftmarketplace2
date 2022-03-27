import React from "react";

export const Shop=()=>{
        
        return(<div class="container-fluid store pb-5">
        <div class="container">
            <div class="row row-cols-2 row-cols-md-4 g-4 mt-5">
                <div class="col mt-4">
                    <div class="card h-100 px-3 py-2">
                        <img src="./img/products/SYZYGY47.jpg" class="card-img-top" alt="./img/products/SYZYGY #47.jpg"/>
                        <div class="card-body d-flex flex-column p-0 mt-3">
                            <span class="card-title DM-Sans fw-bold">adidas Originals: Into the Metaverse (Phase 1)</span>
                            <p class="card-text">1$</p>
                        </div>

                    </div>
                </div>
                

            </div>
            <div class="text-center mt-5">
                <button class="load-more-btn mx-auto py-2 px-4 fw-bold">Load More</button>
            </div>

        </div>
        </div>)
        
}