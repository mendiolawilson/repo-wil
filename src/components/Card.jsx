import React, { useState, useRef, useEffect } from "react"; 
// import { App } from "../App";


function card({ title, artist, album, track, year, img_src, src }) {
   
    function played(title) { 
        console.log(title+ " "+window.isplay);
        if(title==window.playing){ 
            if (window.isplay) {
                window.isplay = false;
            } else {
                window.isplay = true;
            }
        }else{  
            window.isplay = true;
            window.playing = title;
        } 
    }

    return (
        <div className="p-[30px] m-auto">
            <div className="bg-[#390066] rounded-[25px]">
                <div className={"rounded-[25px] bg-blend-overlay bg-[#ffffffba] bg-cover bg-[url('./assets/songs_images/Call me_Cover (front)_e.jpg')]"} style={{
                    backgroundImage: 'url("../src/assets/songs_images/' + img_src + '")'
                }}>
                    <div className="flex items-center order-2 px-[20px] py-[5px]">
                        <span data-dropdown-toggle="language-dropdown-menu " className="mr-[20px] inline-flex justify-center items-center p-2 text-[12px] text-black rounded cursor-pointer ">
                            <img className="w-5 h-5 rounded-full mr-[10px]" src="../src/assets/profile.png" alt="" />
                            1AZFAFASFASZ {window.playing+" "+window.isplay}
                        </span>
                    </div>
                    <div className="relative px-[20px] my-[10px]">
                        <div className="w-[220px] m-auto">
                            <img className="h-[220px] w-[220px] rounded-[15px]" src={"../src/assets/songs_images/" + img_src} alt="" />
                            <button className="h-[220px] w-[220px] rounded-[15px] absolute top-0 bg-[#000000a6]" onClick={() => played(title)}>
                                  {window.playing == title && window.isplay ?
                                    <img className="h-[80px] w-[80px] m-auto" src="../src/assets/pause.png" alt="" /> :
                                    <img className="h-[80px] w-[80px] m-auto" src="../src/assets/play.png" alt="" />}  
                            </button>
                        </div>
                    </div>

                    <div className="relative px-[20px] pb-[15px]">
                        <strong className="block"> {artist} -  {title}</strong>
                        <strong className="block mt-[5px]">Ending In</strong>
                        <span>
                            <strong>4</strong> hour  <strong>32</strong> minutes  <strong>40</strong> sec
                        </span>
                    </div>
                </div>
                <div className="bg-[#390066] w-full py-[10px] px-[20px] text-white rounded-b-[25px]">
                    <div class="grid grid-cols-2">
                        <div className="items-start"> <span className="inline-block font-semibold">STARTING BID</span> </div>
                        <div className="items-end text-right">
                            <img className="h-[20px] w-[20px] rounded-[15px] inline-block" src="../src/assets/crypto_icon.png" alt="" />
                            <span className="inline-block font-medium mr-[10px] ml-[5px]">1</span>
                            <span className="inline-block font-normal">$ 43.42</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card