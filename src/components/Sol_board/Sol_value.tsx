import React from "react";

function Sol_value({title,value,src}:{title:string, value:string, src:string}) {
    return (
        <div className="frame-2">
              <div className="value">{title}</div>
              <div className="frame-18">
                <div className="text-wrapper-10">{value}</div>
                <img
                  className="img-2"
                  alt="Element sol"
                  src={src}
                />
              </div>
            </div>
    );
}

export default Sol_value