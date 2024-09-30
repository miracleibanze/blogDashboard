import { memo } from "react";

const Button = ({
  className,
  onClick,
  children,
  dark,
  cyan,
  red,
  light,
  rounded,
  hFull,
}) => {
  const classes = `button relative inline-flex items-center justify-center cursor-pointer transition-colors px-5 text-n-1 ${
    dark && "text-slate-100 bg-zinc-800 "
  } ${cyan && "text-zinc-800 bg-cyan-400"} ${
    red && "text-zinc-800 bg-pink-600"
  } ${light && "text-zinc-800 bg-slate-100"} ${
    rounded ? "rounded-full" : "rounded-md"
  }
  } ${className && ""} ${hFull ? "h-full" : "h-8"}`;

  const spanClasses = `relative z-10 flex gap-4 items-center`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  return renderButton();
};

export default memo(Button);
