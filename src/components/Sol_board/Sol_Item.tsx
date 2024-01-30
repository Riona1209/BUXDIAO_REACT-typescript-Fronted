import React from "react";

function Sol_Item({title,value,currency}:{title:string, value:string, currency:string}) {
    return (
        <div className="frame-19">
              <div className="text-wrapper-11">{title}</div>
              <div className="frame-20">
                <div className="text-wrapper-12">{value}</div>
                <div className="frame-21">
                  <div className="text-wrapper-13">{currency}</div>
                </div>
              </div>
            </div>
    );
}

export default Sol_Item