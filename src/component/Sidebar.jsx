import { useNavigate } from "react-router-dom";
import { navLinks } from "./Constants";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex fixed md:left-0 md:top-11 z-[90] bg-zinc-100 md:pt-4 md:flex-col w-[4.2rem] items-center max-md:bottom-0 max-md:w-full md:justify-start justify-evenly gap-4 md:h-screen max-md:px-4 md:border-r border-zinc-500 text-slate-900 md:shadow-2xl">
      {navLinks.map((item) => (
        <div
          className={`flex flex-col items-center max-md:w-1/6 max-md:h-[4.2rem] max-md:pt-3  ${
            location.pathname === item.link &&
            "max-md:bg-zinc-800/30 rounded-t-3xl"
          }
          ${item.id === navLinks.length - 1 && "md:absolute bottom-12"}`}
          key={item.id}
          onClick={() => navigate(item.link)}
        >
          <div
            className={`md:rounded-full md:border lg:p-3 md:p-1.5 flex items-center place-content-center border-zinc-800 ${
              location.pathname === item.link && "md:bg-zinc-800/50"
            }`}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="lg:h-6 aspect-square md:h-5 h-6"
            />
          </div>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
