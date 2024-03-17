import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import SkeletonLoading from "../SkeletonLoading";
import { toast } from "react-toastify";

const PostLists = ({ posts }) => {
  

  const copyPostLink = (postId) => {
    const postLink = `${window.location.origin}/blog-details/${postId}`; // Modify this based on your route structure
    navigator.clipboard.writeText(postLink);

    toast.success("link copied to clipboard!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className="container m-auto w-[100%] lg:w-full mt-20">
      <div>
        <h3 className="text-[2rem] font-semibold uppercase text-green-900">🖊️ All Posts</h3>
        <hr />

        <div className="mt-5 w-full flex gap-5 md:flex-col-reverse">
        <div className="flex-[8] grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-8 px-3 md:p-0 border-r-2 md:border-r-0 border-gray-200">
            {posts.length > 0 ? (
              posts.map((data) => (
                <div key={data._id}>
                  <BlogCard
                    key={data._id}
                    post={data}
                    copyPostLink={copyPostLink}
                  />
                </div>
              ))
            ) : (
              // Render SkeletonLoading components while data is loading
              <>
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
              </>
            )}
          </div>

          <div className=" flex-[2] flex flex-col gap-5 p-3 bg-gray-50  md:hidden">
            <div className=" space-y-4 md:hidden">
              <h3 className=" uppercase text-center text-xl font-semibold text-gray-800">
                About us
              </h3>
              <hr />
              <img
              loading="lazy"
                className=" w-fit object-cover"
                src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p className=" text-justify text-gray-700">              
                Welcome to The GroC\co Blog, your ultimate destination for fresh ideas and food inspiration. From seasonal produce highlights to expert cooking tips and diverse recipe roundups, we've got everything you need to elevate your culinary experience. Whether you're a novice cook or a seasoned chef, our blog offers something for everyone, including health and wellness tips, community stories, and seasonal specials. Join us as we explore the world of food together and unleash your creativity in the kitchen!
              </p>
            </div>
            <div className=" space-y-3 md:hidden">
              <h3 className=" uppercase text-center text-xl font-semibold text-gray-800">
                follow us
              </h3>
              <hr />
              <div className=" flex items-center justify-center gap-3">
                <AiFillFacebook size={25} />
                <AiFillTwitterSquare size={25} />
                <FaInstagramSquare size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLists;
