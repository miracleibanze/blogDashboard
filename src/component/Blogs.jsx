import { memo, useContext, useEffect, useState, useTransition } from "react";
import ThumbsUp from "../assets/svgs/ThumbsUp";
import { blogs } from "./Constants";
import Button from "./designs/Button";
import { AppContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./designs/Card";
import { SearchSvg } from "../assets";

const Blogs = () => {
  const { dummyUserObject } = useContext(AppContext);
  const { param } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isPending, startTransition] = useTransition();
  const [resultPage, setResultPage] = useState(false);
  const [resultContent, setResultContent] = useState([]);

  useEffect(() => {
    if (param && param === "search") {
      setSearch(true);
    } else if (param && param === "all") {
      setSearch(false);
    } else {
    }
  });
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };
  const handleSearchText = (text) => {
    const Text = text.toLocaleLowerCase();
    startTransition(() => {
      setResultContent(
        blogs.filter((item) => {
          let lowerCase = item.name.toLowerCase();
          return lowerCase.includes(Text) && item;
        })
      );
    });
  };

  useEffect(() => {
    if (searchText !== "") {
      setResultPage(true);
      handleSearchText(searchText);
    } else {
      setResultContent(blogs);
    }
  }, [searchText]);
  return (
    <>
      <div className="w-full flex px-4 place-content-start">
        <span
          className={`body-1 font-semibold mr-2 py-2 hover:bg-zinc-400 px-3 rounded-md`}
          onClick={() => {
            navigate("/");
          }}
        >
          For you
        </span>
        <span
          className={`body-1 font-semibold border-b border-b-slate-700 hover:bg-zinc-400 py-2 px-3 rounded-md`}
          onClick={() => {
            navigate("/all/blogs");
          }}
        >
          More
        </span>
      </div>
      <h1 className="h1">Blogs</h1>
      {search && (
        <div className="flex place-content-between items-center mx-6 rounded-md max-w-sm bg-zinc-100">
          <input
            type="text"
            onChange={handleSearch}
            className=" outline-none w-full bg-transparent py-2 pl-4 flex-1"
            placeholder="Search ..."
          />
          <img
            src={SearchSvg}
            className="w-10 aspect-square border-l p-2 border-l-zinc-700/50"
          />
        </div>
      )}
      <div
        className={`container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-8 ${
          resultPage && "hidden"
        }`}
      >
        {Array(4)
          .fill("")
          .map((item, index) => (
            <div
              className={` min-w-full flex-1 p-1 flex flex-col  gap-y-8 ${
                index === 3 && "max-lg:hidden"
              } ${index === 0 || index === 1 ? "" : "max-md:hidden"}`}
              key={index}
            >
              {blogs.map((blogElement) => (
                <div
                  key={blogElement.id}
                  className={` hidden ${
                    (blogElement.id === index ||
                      blogElement.id === index + 4 ||
                      blogElement.id === index + 8 ||
                      blogElement.id === index + 12) &&
                    "lg:flex"
                  } ${
                    (blogElement.id === index ||
                      blogElement.id === index + 3 ||
                      blogElement.id === index + 6 ||
                      blogElement.id === index + 9 ||
                      blogElement.id === index + 12) &&
                    "max-lg:md:flex"
                  } ${
                    (index + blogElement.id) % 2 === 0 && "max-md:flex"
                  } flex flex-col text-start bg-slate-100 rounded-md py-2`}
                >
                  <Card
                    name={blogElement.name}
                    img={blogElement.img}
                    text={blogElement.description}
                    blogger={blogElement.blogger}
                    bloggerName={blogElement.bloggerName}
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
      <div
        className={`container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-8 ${
          !resultPage && "hidden"
        } ${
          resultContent.length === 0 &&
          "min-h-[50vh] bg-slate-400/50 bg-clip-content border-[2rem] border-transparent"
        }`}
      >
        <p
          className={`${
            resultContent.length === 0
              ? "flex items-center justify-center  col-span-4 border border-red-400"
              : "hidden"
          }`}
        >
          No blog much your search at the moment !
        </p>
        {Array(4)
          .fill("")
          .map((item, index) => (
            <div
              className={` min-w-full flex-1 p-1 flex flex-col  gap-y-8 ${
                index === 3 && "max-lg:hidden"
              } ${index === 0 || index === 1 ? "" : "max-md:hidden"}`}
              key={index}
            >
              {resultContent.map((blogElement, blogIndex) => (
                <div
                  key={blogIndex}
                  className={` hidden ${
                    (blogIndex === index ||
                      blogIndex === index + 4 ||
                      blogIndex === index + 8 ||
                      blogIndex === index + 12) &&
                    "lg:flex"
                  } ${
                    (blogIndex === index ||
                      blogIndex === index + 3 ||
                      blogIndex === index + 6 ||
                      blogIndex === index + 9 ||
                      blogIndex === index + 12) &&
                    "max-lg:md:flex"
                  } ${
                    (index + blogIndex) % 2 === 0 && "max-md:flex"
                  } flex flex-col text-start bg-slate-100 rounded-md py-2`}
                >
                  <Card
                    name={blogElement.name}
                    img={blogElement.img}
                    text={blogElement.description}
                    blogger={blogElement.blogger}
                    bloggerName={blogElement.bloggerName}
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default memo(Blogs);
