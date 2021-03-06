import React from 'react';
import profileImg from '../../../assets/images/default_profile.png';
import { BsFillCameraReelsFill } from 'react-icons/bs';
import { IoMdHappy } from 'react-icons/io';
import { AiFillCamera } from 'react-icons/ai';
import CreatePostModal from './CreatePostModal';

const InputBox = () => {
  const isOpen = true;

  return (
    <>
      <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
        <div className="flex space-x-4 p-4 items-center">
          <img
            src={profileImg}
            alt="profile-imag"
            className="rounded-full"
            width={40}
            height={40}
            layout="fixed"
          />
          <form className="flex flex-1">
            <input
              type="text"
              readOnly
              className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none cursor-pointer"
              placeholder={`What's on your mind,Sarah?`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            />
            {/* <button type='button'  data-bs-toggle="modal" data-bs-target="#exampleModalCenter">click me</button> */}
          </form>
        </div>
        <div className="flex justify-evenly p-3 border-t">
          <div className="inputIcon">
            <BsFillCameraReelsFill className="h-7 xl:w-10 md:w-6 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
          </div>
          <div className="inputIcon">
            <AiFillCamera className="h-7 xl:w-10 md:w-6 text-green-400" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          </div>
          <div className="inputIcon">
            <IoMdHappy className="h-7 xl:w-10 md:w-6 text-yellow-300" />
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
          </div>
        </div>
      </div>

      {isOpen && <CreatePostModal />}
    </>
  );
};

export default InputBox;
