import React, { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const imgs = [
  "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613408181923-f058a1b0e00c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Hero = () => {
  const [randomImgSrc, setRandomImgSrc] = useState(
    imgs[Math.floor(Math.random() * imgs.length)]
  );
  const [authDetails, setAuthDetails] = useState(null);
  const auth = JSON.parse(localStorage.getItem("auth"));
  // console.log('ok');
  useEffect(() => {
    if (auth && auth.data && auth.data.others && !authDetails) {
      setAuthDetails(auth.data.others);
    }
  }, [auth, authDetails]); // Include 'authDetails' as a dependency

  console.log(authDetails);

  return (
    <div className="relative w-full h-[100vh] md:h-[650px] overflow-hidden bg-gray-400">
      <LazyLoad height={800} offsetVertical={500}>
        <img
        loading="lazy"
          className="w-full h-[100vh] md:h-[800px] object-cover"
          src={randomImgSrc}
          alt=""
        />
      </LazyLoad>
      <div className="w-[90%] flex gap-5 flex-col items-center justify-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[#202020] text-center ">
        <div className="flex gap-5 flex-col items-center justify-center h-full border-1 border-white rounded-md px-2 py-8" style={{
          backgroundColor: "rgba(0,20,0,0.9)"
        }}>
          <div>
            {authDetails && (
              <h2 className=" text-white font-semibold text-3xl">
                Hi {authDetails && authDetails.username} ! 👋
              </h2>
            )}

            <h2 className="text-6xl md:text-4xl font-semibold text-white">
              🌟 Welcome To Groco Blog !
            </h2>
          </div>

          <p className="w-[40%] md:w-full text-center text-[1.4rem] md:text-[1.23rem] text-white">
            “ Awesome place to make oneself productive and entertained through
            daily updates. ”
          </p>
          <Link
            to="/post"
            className="w-fit flex items-center justify-center gap-2 p-3 rounded-3xl bg-white hover:bg-gray-100"
          >
            <BsFillPlusCircleFill size={25} />
            <p className="font-semibold">Create Post</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
