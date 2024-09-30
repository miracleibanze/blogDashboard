import { useNavigate } from "react-router-dom";
import ThumbsUp from "../../assets/svgs/ThumbsUp";
import Button from "./Button";
import { memo } from "react";

const Card = ({ name, img, text, blogger }) => {
  const navigate = useNavigate();
  return (
    <>
      <img src={img} alt={name} className="w-full h-auto rounded-md" />
      <div className="p-1 relative">
        <p className="body-1 font-semibold leading-none">{name}</p>
        <p className={`text-xs overflow-y-hidden pt-2 leading-none`}>{text}</p>
        <div className="flex justify-between items-center pt-4">
          <img
            src={blogger}
            loading="lazy"
            className="w-6 aspect-square rounded-full border bg-zinc-800"
          />
          <Button dark onClick={() => navigate(`/blogs/${name}`)}>
            Read
          </Button>
          <ThumbsUp fill="#db2777" className="h-5 w-5" />
        </div>
      </div>
    </>
  );
};

export default memo(Card);
