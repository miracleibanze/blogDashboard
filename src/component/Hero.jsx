import { useLocation, useNavigate, useParams } from "react-router-dom";
import { blogs } from "./Constants";
import Button from "./designs/Button";
import {
  ADoubleRightSvg,
  fullScreenIcon,
  fullScreenOffIcon,
  grid,
  pen,
  shareSvg,
  userSvg,
} from "../assets";
import { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import ThumbsUp from "./../assets/svgs/ThumbsUp";
import ThumbsDown from "./../assets/svgs/ThumbsDown";
import Card from "./designs/Card";

const Hero = () => {
  const { blog } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { primaryBlog, setPrimaryBlog, dummyUserObject } =
    useContext(AppContext);
  const [showComment, setShowComment] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  let comment = "";

  const toggleComment = () => {
    setShowComment(!showComment);
  };

  const addComment = (event) => {
    comment = event.target.value;
  };

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  const handleAddComment = () => {
    if (comment !== "") primaryBlog.comment = [...primaryBlog.comment, comment];
    console.log(comment);
  };
  useEffect(() => {
    blogs.filter((item, index) => {
      if (item.name === blog) {
        setPrimaryBlog(blogs[index]);
      }
    });
  }, [location.pathname]);

  return (
    <div className="container">
      <div className="relative flex items-center justify-between">
        <div>
          <span
            className={`body-1 font-semibold mr-2 py-2 ${
              !blog && "border-b border-b-slate-700"
            } hover:bg-zinc-400 py-2 px-3 rounded-md`}
            onClick={() => {
              navigate("/");
            }}
          >
            For you
          </span>
          <span
            className={`body-1 font-semibold ${
              blog && "border-b border-b-slate-700"
            } hover:bg-zinc-400 py-2 px-3 rounded-md`}
            onClick={() => {
              navigate("/all/blogs/all");
            }}
          >
            More
          </span>
        </div>
        <span
          className="body-2 font-semibold mr-2 hover:bg-zinc-400 py-2 px-3 rounded-md"
          onClick={() => alert("Post saved to your Profile successfully!")}
        >
          Save
        </span>
      </div>
      <div className="flex md:flex-row flex-col my-3 gap-8 relative">
        <div className="lg:min-w-[60%] md:min-w-[55%] w-full flex flex-col gap-3">
          <div
            className={` ${
              fullScreen
                ? "fixed inset-0 bg-contain z-[100]"
                : "w-full aspect-video rounded-2xl bg-contain relative"
            } group bg-slate-700/80 bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${primaryBlog.img})` }}
          >
            <div
              className={` ${
                fullScreen
                  ? "fixed z-[1000]"
                  : "absolute  hidden group-hover:flex"
              } h-8 w-8 bg-cover bg-center bottom-4 right-4 shadow-2xl shadow-white`}
              onClick={toggleFullScreen}
              style={{
                backgroundImage: `url(${
                  fullScreen ? fullScreenOffIcon : fullScreenIcon
                })`,
              }}
            />
          </div>
          <div className="w-full flex items-center justify-between px-4">
            <span className="flex items-center gap-2">
              <img
                src={primaryBlog.blogger}
                alt="user"
                className="w-8 aspect-square rounded-full border-2 border-zinc-500 object-cover object-center"
              />
              {primaryBlog.bloggerName}
            </span>
            <span className="w-24 flex items-center gap-2 ">
              <ThumbsUp
                fill="#22d3ee"
                className="min-h-8 max-h-8 aspect-square"
              />
              <ThumbsDown
                fill="#22d3ee"
                className="min-h-8 max-h-8 aspect-square"
              />
              <img
                src={shareSvg}
                alt="share"
                className="min-h-8 max-h-8 aspect-square"
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-[38%] relative">
          <div className="flex flex-col justify-center items-start gap-4 max-h-full relative overflow-y-scroll scrollDesign">
            <h1 className="h1 px-0 text-start leading-none ">
              {primaryBlog.name}
            </h1>
            <p className="body-1 text-start font-medium leading-6">
              {primaryBlog.description}
            </p>
            <div className="grid grid-cols-2 w-full gap-3">
              <Button dark rounded onClick={() => navigate("/all/blogs/all")}>
                Read more
              </Button>
              <Button cyan rounded onClick={toggleComment}>
                Read comments
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full h-11 flex gap-2 md:max-w-[70%] flex-wrap my-4">
        <textarea
          name="comment"
          onChange={addComment}
          placeholder="Comment"
          className="h-full outline-none px-3 flex-1 w-auto rounded-md py-2"
        ></textarea>
        <Button dark onClick={handleAddComment} hFull>
          Add comment
        </Button>
      </div>

      <div
        className={`${
          showComment ? "flex" : "hidden"
        } w-full flex flex-col md:w-[70%]`}
      >
        {primaryBlog.comment.map((item, index) => (
          <span
            key={index}
            className="w-full flex border-b border-b-zinc-700 pb-4 items-start"
          >
            <img
              src={
                index === 0
                  ? primaryBlog.blogger
                  : dummyUserObject.imgUrl || userSvg
              }
              className="min-w-12 max-w-12 aspect-square m-2 object-cover object-center rounded-full bg-conic-gradient"
            />
            <p className="text-start">{item}</p>
          </span>
        ))}
      </div>

      <div className="relative grid lg:grid-cols-11 md:grid-cols-9 sm:grid-cols-7 grid-cols-2 gap-2 w-full mt-8">
        <div
          className="row-span-4 col-span-3 bg-zinc-100 rounded-md gap-2 flex sm:flex-col max-sm:grid max-sm:grid-cols-2 bg-cover bg-blend-overlay"
          style={{ backgroundImage: `url(${grid})` }}
        >
          <div className="w-full">
            <h2 className="h2 font-bold pt-3">Read more</h2>
            <p className="body-1 text-zinc-700/60 font-semibold">
              Live blog synch
            </p>
            <div className="flex relative h-max place-content-center sm:mt-12 mb-4 w-full">
              <div className="  flex text-zinc-800/50 flex-col justify-between px-2">
                <div className="h-full">90</div>
                <div className="h-full">80</div>
                <div className="h-full">70</div>
                <div className="h-full">55</div>
                <div className="h-full">45</div>
                <div className="h-full">30</div>
              </div>
              <div
                className="w-[80%] aspect-square bg-cover relative"
                style={{ backgroundImage: `url(${grid})` }}
              />
            </div>
          </div>
          <div className="flex relative h-max place-content-center mt-12 mb-4 w-full p-2">
            <div
              className="relative sm:max-w-10 max-w-8  min-w-6 bg-center bg-no-repeat aspect-[6/70] bg-contain"
              style={{ backgroundImage: `url(${pen})` }}
            />
            <div className="flex-1 aspect-square max-w-full overflow-hidden">
              <h5 className="h5 font-code font-bold uppercase leading-none">
                A&nbsp;Comment live&nbsp;Markdown
              </h5>
              <div className="flex flex-wrap gap-x-2 gap-y-4 ml-4 mt-3 mr-3 w-[90%] place-content-start">
                {Array(16)
                  .fill("")
                  .map((item, index) => (
                    <div className="h-5 aspect-square rounded-badly bg-zinc-500/50"></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <h3 className="h3 relative bg-slate-100 lg:col-span-8 md:col-span-6 sm:col-span-4 col-span-4 ">
          More blogs
        </h3>
        <>
          {Array(5)
            .fill("")
            .map((item, index) => (
              <div
                className={`w-full sm:col-span-2 col-span-1 p-1 flex flex-col gap-y-8 ${
                  index === 3 && "hidden"
                } ${index === 4 && "md:max-lg:hidden"} ${
                  index === 0 || index === 1 ? "" : "max-md:hidden"
                }`}
              >
                {blogs.map((itemb) => (
                  <div
                    className={`${
                      itemb.id === index || itemb.id === index + 5
                        ? "md:flex"
                        : "md:hidden"
                    } ${
                      itemb.id === index ||
                      itemb.id === index + 3 ||
                      itemb.id === index + 5
                        ? "max-md:flex"
                        : "max-md:hidden"
                    } flex flex-col text-start bg-slate-100 rounded-md py-2`}
                  >
                    <Card
                      img={itemb.img}
                      name={itemb.name}
                      text={itemb.description}
                      blogger={itemb.blogger}
                      key={itemb.id}
                    />
                  </div>
                ))}
              </div>
            ))}
        </>
      </div>
      <div className="w-full flex place-content-end py-4">
        <Button cyan onClick={() => navigate("/all/blogs/all")}>
          See more
        </Button>
      </div>
    </div>
  );
};

export default memo(Hero);
