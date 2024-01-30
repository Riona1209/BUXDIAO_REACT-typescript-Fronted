import React from "react";

    function Arrow_cursor({title,class_name}:{title:string,class_name:string}){
        return(
            <div className="group-6">
              <p className="compete-in-monthly">{title}</p>
              <img className="layer" alt="Layer" src="/img/layer-1.svg" />
            </div>
        );

    }

export default Arrow_cursor