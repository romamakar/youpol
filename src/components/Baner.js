import React, { useState } from 'react';
import './Baner.css';

const Baner = () => {
    return (
        <div>
            <div>
                <button className="commonButton">All of them</button>
                <button className="commonButton">Music</button>
                <button className="commonButton">Live Stream</button>
                <button className="commonButton">Cooking shows</button>
                <button className="commonButton">Games</button>
                <button className="commonButton">News</button>
                <button className="commonButton">Mixes</button>
                <button className="commonButton">Sitcoms</button>
                <button className="commonButton">Recent downloads</button>
                <button className="commonButton">you watched</button>
                <button className="commonButton">News for you</button>
            </div>
           {/* <iframe width="966" height="543" src="https://www.youtube.com/embed/83fCmfBqX3Y" title="Oggy and the Cockroaches 😂 COCKROACH OR CAT - Full Episodes HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/}
        </div>
    );
};

export default Baner;
