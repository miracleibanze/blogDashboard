import { arrowUpRight } from "../assets";
import Button from "./designs/Button";

const CreatePost = ({
  setOpenCreatePost,
  postDetails,
  handleCreatePost,
  post,
}) => {
  return (
    <div className="absolute inset-0 z-[100] sm:border-[3rem] border-[2rem] border-slate-800/70 bg-zinc-200 bg-clip-padding flex flex-col items-center p-4 gap-3">
      <h1 className="h1 font-code tracking-tight leading-none mt-4 uppercase">
        Create a post
      </h1>
      <div
        className="absolute top-0 right-0 flex items-center"
        onClick={() => setOpenCreatePost(false)}
      >
        <u className="text-cyan-400">Skip</u>
        <img src={arrowUpRight} alt="close" className="w-8 h-8" />
      </div>
      <input
        onChange={postDetails}
        type="text"
        className="input mt-5"
        name="title"
        placeholder="Title for your post"
        required
      />
      <textarea
        onChange={postDetails}
        name="description"
        placeholder="Description ..."
        className="input"
        rows={5}
        required
      ></textarea>
      <div className="flex items-center w-full max-w-md flex-wrap">
        <input
          onChange={postDetails}
          type="file"
          name="imgUpload"
          className="py-2 w-[6.5rem]"
        />
        <input
          onChange={postDetails}
          type="text"
          name="imgUrl"
          className="flex-1 px-4 py-2 max-md:input min-w-[10rem]"
          placeholder="or valid img url"
        />
      </div>
      {post.imgUpload && (
        <img src={post.imgUpload} className="w-full max-w-md h-auto" />
      )}
      <div className="absolute bottom-8 w-full max-w-md flex justify-end">
        <Button cyan onClick={handleCreatePost}>
          Post
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
