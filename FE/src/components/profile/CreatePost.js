import React from 'react';
import defaultPic from "../../assets/images/default_pic.png";
import { MdPhotoLibrary } from 'react-icons/md';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { BsFillFlagFill } from 'react-icons/bs';


function CreatePost() {
    return (
        <div className="bg-white my-3 p-4 rounded-xl w-full">
            <div className="flex gap-2.5">
                <img src={defaultPic} alt="ptofilePic" className="rounded-full w-12 h-12"></img>
                <input placeholder="What's on your mind?" className="bg-slate-200 rounded-3xl w-11/12 p-3"></input>
            </div>
            <hr className="my-3"></hr>
            <div className="flex justify-around my-0.5 p-4 h-10">
                <div className="text-gray-600 font-semibold">
                    <BsFillCameraVideoFill className="inline mx-2 text-red-500 text-3xl"/>
                    Live Video
                </div>
                <div className="text-gray-600 font-semibold">
                    <MdPhotoLibrary className="inline mx-2 text-green-500 text-3xl"/>
                    Photo/Video
                </div>
                <div className="text-gray-600 font-semibold lg:flex sm:hidden">
                    <BsFillFlagFill className="inline mx-2 text-blue-500 text-2xl"/>
                    Life event
                </div>
            </div>
        </div>
    )
}

export default  CreatePost;