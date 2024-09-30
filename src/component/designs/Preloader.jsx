import { blackSpinnerSvg, spinnerSvg } from "../../assets";

const Preloader = () => {
  return (
    <div className="flex-1 absolute inset-0 flex flex-col gap-2 items-center justify-center bg-slate-300 dark:bg-slate-900 dark:text-slate-100">
      <div
        className="bg-contain hidden dark:flex bg-center h-8 aspect-square rounded-full animate-spin"
        style={{ backgroundImage: `url(${spinnerSvg})` }}
      />
      <div
        className="bg-contain dark:hidden bg-center h-8 aspect-square rounded-full animate-spin"
        style={{ backgroundImage: `url(${blackSpinnerSvg})` }}
      />
      Please wait ...
    </div>
  );
};

export default Preloader;
