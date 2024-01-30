import React from "react";

    function SlideComponent1({title}:{title:string}){
        return(
            <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                    <p className="all-artwork-is">{title}</p>
                    <img className="solana-logo" alt="Solana logo" src="/img/solana-logo.png" />
                </div>
            </div>
        );

    }

export default SlideComponent1