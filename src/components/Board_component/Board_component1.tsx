import React from "react";

function Board_component1({src,title,content,btn_name}:{src:string,title:string,content:string,btn_name:string}) {
    return (
        <div className="frame-29">
        <div className="div-2">
          <img className="image-3" alt="Image" src={src} />
        </div>
        <div className="frame-30">
          <div className="frame-31">
            <div className="frame-32">
              <div className="text-wrapper-17">{title}</div>
              <p className="text-wrapper-18">
                {content}
              </p>
            </div>
          </div>
          <div className="frame-33">
            <div className="text-wrapper-19">{btn_name}</div>
          </div>
        </div>
      </div>
    );
}

export default Board_component1