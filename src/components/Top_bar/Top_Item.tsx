import React from "react";

function Top_Item({title,src,state}:{title:string, src:string, state: string}) {
    return (
      <div className="frame-7">
        <img className="coin-svgrepo-com" alt="Coin svgrepo com" src={src} />
        
        {state=="soon"?
            <div className="text-wrapper-5">{title}</div>       
            :
            <div className="text-wrapper-4">{title}</div>
            }
        {state=="soon"?

              <div className="frame-9">
                  <div className="text-wrapper-6">SOON</div>
              </div>
            :
              <></>   
                       }
    </div>
    );
}

export default Top_Item