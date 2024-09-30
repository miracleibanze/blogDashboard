import { useState, useEffect } from "react";
import { logo, userSvg, WhiteADoubleRightSvg } from "../assets";
import Button from "./designs/Button";
import { menuItems } from "./Constants";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  dummyUserObject,
  toggleNotAvailable,
  setOpenCreatePost,
  yourPost,
}) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const promptCreate = () => {
    if (yourPost.title) {
      alert(
        "This web is still under build, you are allowed only one post, that means your last post will be erased !"
      );
      setOpenCreatePost(true);
    } else {
      setOpenCreatePost(true);
    }
  };

  window.onscroll = () => {
    if (menu) setMenu(false);
  };

  return (
    <header className="lg:pr-12 md:pr-8 z-[100] h-full max-w-screen-2xl w-full pr-3 flex items-center justify-between text-slate-100">
      <img
        src={logo}
        alt="logo"
        className="h-12 w-auto lg:ml-0 md:-ml-2 -ml-4"
      />
      <div className="relative flex place-content-center items-center gap-2">
        <Button light onClick={promptCreate}>
          create a blog
        </Button>
        <div
          className="bg-center bg-cover h-8 aspect-square rounded-full border"
          style={{
            backgroundImage: `url${
              dummyUserObject.imgUrl ? dummyUserObject.imgUrl : userSvg
            }`,
          }}
          onClick={toggleMenu}
        />
        <span className="md:flex hidden cursor-pointer" onClick={toggleMenu}>
          {dummyUserObject.username}
        </span>
        <div className="absolute top-full right-0 h-auto overflow-y-hidden">
          <ul
            className={` bg-zinc-800 p-2 min-w-[20rem] animate-menu -z-1 ${
              menu ? "flex" : "hidden"
            } flex-col items-start justify-start gap-2 pt-4`}
          >
            {menuItems.map((item) => (
              <li
                className={`px-4 py-2 text-start w-full flex items-center gap-2 hover:bg-white/40 ${
                  item.id !== menuItems.length - 1 &&
                  "border-b border-b-zinc-400"
                } `}
                key={item.id}
                onClick={() => {
                  item.link === "" ? toggleNotAvailable() : navigate(item.link);
                  setMenu(false);
                }}
              >
                <img src={WhiteADoubleRightSvg} className="w-4 aspect-square" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
