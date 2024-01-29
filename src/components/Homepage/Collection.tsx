import React from "react";

function Collection({ title, value, src }: { title: string, value: string, src: string }) {
    return (
        <div className="frame-25">
            <div className="frame-26">
                <img className="rectangle-3" alt="Rectangle" src={src} />
                <div className="text-wrapper-14">{title}</div>
            </div>
            <div className="frame-27">
                <img className="layer-2" alt="Layer" src="/img/layer-1-5.svg" />
                <div className="text-wrapper-15">{value}</div>
            </div>
        </div>
    );
}

export default Collection