import { memo, useContext } from "react";
import { AppContext } from "../App";
import { cameraSvg, userSvg } from "../assets";

const Profile = () => {
  const { dummyUserObject, toggleNotAvailable, setOpenCreatePost, yourPost } =
    useContext(AppContext);
  return (
    <>
      <div className="container">
        <div className="border-b border-b-gray-400 h-[20rem] relative flex items-center justify-between">
          <div
            className={`lg:w-[15rem] md:w-[12rem] w-[8rem] aspect-square rounded-full border relative ${
              !dummyUserObject.img ? "bg-contain" : "bg-cover"
            } bg-no-repeat bg-center bg-zinc-400`}
            style={{
              backgroundImage: `url(${
                dummyUserObject.img ? dummyUserObject.img : userSvg
              })`,
            }}
          >
            <div
              className="h-12 aspect-square rounded-full bg-zinc-400 absolute p-2 bottom-3 right-3"
              onClick={toggleNotAvailable}
            >
              <img className="w-full h-full" src={cameraSvg} />
            </div>
          </div>
          <div className="flex justify-center flex-col items-end pr-4">
            <div className="md:h2 sm:h4 max-sm:text-[6vw] font-bold font-code uppercase">
              {dummyUserObject.names}
            </div>
            <p className="body-1 leading-none">{dummyUserObject.username}</p>
            <p className="body-1 leading-none">{dummyUserObject.email}</p>
          </div>
          <div className="absolute top-0 right-0 left-0 h-1/2 bg-gray-400 rounded-t-[2rem] -z-10">
            <div
              className="h-12 z-[100] aspect-square rounded-full bg-zinc-400 absolute p-2 top-2 right-2"
              onClick={() => console.log("not available")}
            >
              <img className="w-full h-full" src={cameraSvg} />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">{yourPost.title}</div>
      </div>
    </>
  );
};

export default memo(Profile);
