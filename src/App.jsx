import React, { Component, useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import { playlists } from "./constants";

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [current_song, set_current_song] = useState("88 Keys");
    const [current_artist, set_current_artist] = useState("Oatmello");
    const [current_src, set_current_src] = useState("88 Keys.mp3");
    const [duration, setduration] = useState(0);

    function played(title, artist, src) {
        if (current_song == title) {
            setIsPlaying(!isPlaying);
        } else {
            set_current_song(title);
            set_current_artist(artist);
            set_current_src(src);
            setIsPlaying(true);
        }
    }

    const ref = useRef(null);

        useEffect(() => {
            if (isPlaying) {
                ref.current.play();
            } else {
                ref.current.pause();
            }
        });

    // function AudioPlayer({ src, isPlaying, duration }) {
    //     const ref = useRef(null);

    //     useEffect(() => {
    //         if (isPlaying) {
    //             ref.current.play();
    //         } else {
    //             ref.current.pause();
    //         }
    //     });
       
    //     return <audio ref={ref} src={src} id="audios" onEnded={handleVideoEnded} />;
    // }
    
    const handleVideoEnded = () => {
        setIsPlaying(!isPlaying);
        console.log("-------");
    };

    setTimeout(() => {
        setduration(document.getElementById("audios").duration);
    }, 1500);




    return (
        <div className="App relative flex justify-center h-screen" >
            <div className="relative z-30 bg-[#000000d4] inline-table" >
                {/* App h-screen bg-center bg-cover bg-[url('./assets/bg.png')] min-w-[400px] */}
                <div className="">
                    <Header />
                    <div className="container mx-auto my-[60px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 content-center">
                            <div className="relative m-auto"> <img className="" src="../src/assets/left_picture.png" alt="" />
                                <div className="absolute bottom-[60px] right-[100px] bg-[#999999db] border-[#ffffff8a] rounded-full py-[0px] pl-[10px] pr-[25px]">
                                    <div className="flex items-center md:order-2">
                                        <span className="m-auto inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer ">
                                            <div className="relative">
                                                <img className="w-11 h-11 rounded-full" src="../src/assets/profile.png" alt="" />
                                                <button className="w-11 h-11 rounded-full absolute top-0 bg-[#000000a6]" onClick={() => played(current_song, current_artist, current_src)}>
                                                    {isPlaying ? <img className="rounded-full p-[10px]" src="../src/assets/pause.png" alt="" /> : <img className="rounded-full p-[10px]" src="../src/assets/play.png" alt="" />}
                                                </button>
                                            </div>
                                        </span>
                                        <div className="ml-[10px] align-middle min-w-[100px]">
                                            <span className=" text-white font-semibold text-[16px] block">{current_song}</span>
                                            <span className="text-white text-[13px] block">{current_artist}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center">
                                <div>
                                    <div className="inline-block align-middle m-auto box-border h-[27px] w-[130px] border-[1px] bg-[#B1FF0B] border-[#B1FF0B]"></div>
                                    <span className="ml-[10px] text-white font-semibold text-[18px] align-middle">
                                        MADE FOR CONTENT CREATORS AND ARTISTS
                                    </span>
                                    <span className="leading-[80px] text-white font-semibold text-[76px] align-middle justify-center justify-between flex">
                                        <div>LIVE</div> <div>YOUR</div> <div>DAY</div>
                                    </span>
                                    <span className="leading-[80px] text-white font-semibold text-[76px] align-middle justify-center justify-between flex">
                                        <div>WITH</div> <div className="w-[280px] bg-[#B1FF0B] text-fuchsia-900"><span>MUSIC</span></div>
                                    </span>
                                    <span className="text-white font-semibold text-[18px] align-middle justify-center justify-between flex">
                                        <div>Be</div> <div>known</div> <div>and</div> <div>Share</div> <div>your</div> <div>content</div> <div>with</div> <div>your</div> <div>communtity</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#3D3D3D] my-[60px] min-h-[400px] pt-[20px]"> <div className="container mx-auto">
                        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                            <li className="mr-2">
                                <a href="javascript:void(0)" className="inline-block py-2 px-5 text-fuchsia-900 bg-[#B1FF0B] active" aria-current="page">Live</a>
                            </li>
                            <li className="mr-2">
                                <a href="javascript:void(0)" className="inline-block py-2 px-5 hover:text-fuchsia-900 hover:bg-[#B1FF0B] dark:hover:bg-[#B1FF0B] dark:hover:text-white">Ended</a>
                            </li>
                            <li className="mr-2">
                                <a href="javascript:void(0)" className="inline-block py-2 px-5 hover:text-fuchsia-900 hover:bg-[#B1FF0B] dark:hover:bg-[#B1FF0B] dark:hover:text-white">Participated</a>
                            </li>
                            <li className="mr-2">
                                <a href="javascript:void(0)" className="inline-block py-2 px-5 hover:text-fuchsia-900 hover:bg-[#B1FF0B] dark:hover:bg-[#B1FF0B] dark:hover:text-white">My Live Auctions</a>
                            </li>
                        </ul>
                    </div>
                        <div className="container mx-auto">
                            {/* <AudioPlayer
                                isPlaying={isPlaying}
                                src={"./songs/" + current_src}
                                duration={duration}
                            /> */}
                            <audio ref={ref} src={"./songs/" + current_src} id="audios" onEnded={handleVideoEnded} />
                            <div className="grid grid-cols-4 gap-5 p-[25px]">
                                {playlists.map(function (item, i) {
                                    return <div className="p-[30px] m-auto">
                                        <div className="bg-[#390066] rounded-[25px]">
                                            <div className={"rounded-[25px] bg-blend-overlay bg-[#ffffffba] bg-cover bg-[url('./assets/songs_images/Call me_Cover (front)_e.jpg')]"} style={{
                                                backgroundImage: 'url("./songs_images/' + item.img_src + '")'
                                            }}>
                                                <div className="flex items-center order-2 px-[20px] py-[5px]">
                                                    <span data-dropdown-toggle="language-dropdown-menu " className="mr-[20px] inline-flex justify-center items-center p-2 text-[12px] text-black rounded cursor-pointer ">
                                                        <img className="w-5 h-5 rounded-full mr-[10px]" src="../src/assets/profile.png" alt="" />
                                                        1AZFAFASFASZ
                                                    </span>
                                                </div>
                                                <div className="relative px-[20px] my-[10px]">
                                                    <div className="w-[220px] m-auto">
                                                        <img className="h-[220px] w-[220px] rounded-[15px]" src={"./songs_images/" + item.img_src} alt="" />
                                                        <button className="h-[220px] w-[220px] rounded-[15px] absolute top-0 bg-[#000000a6]" onClick={() => played(item.title, item.artist, item.src)}>
                                                            {current_song == item.title && isPlaying ?
                                                                <img className="h-[80px] w-[80px] m-auto" src="../src/assets/pause.png" alt="" /> :
                                                                <img className="h-[80px] w-[80px] m-auto" src="../src/assets/play.png" alt="" />}

                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="relative px-[20px] pb-[15px]">
                                                    <strong className="block"> {item.artist} -  {item.title}</strong>
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
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <video
                autoplay="true"
                loop
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
                <source
                    src="./src/assets/bg_vid.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
