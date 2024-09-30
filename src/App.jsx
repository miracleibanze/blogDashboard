import {
  createContext,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Preloader from "./component/designs/Preloader";
import { blogs } from "./component/Constants";
import Blogs from "./component/Blogs";
import Profile from "./component/Profile";
import CreatePost from "./component/CreatePost";
import useLocalStorage from "./component/designs/useLocalStorage";

const Hero = lazy(() => import("./component/Hero"));
const SignIn = lazy(() => import("./component/SignIn"));
const NotFound = lazy(() => import("./component/NotFound"));

export const AppContext = createContext();

const App = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [signUp, setSignUp] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [formData, setFormData] = useState({
    names: "",
    username: "",
    password: "",
    email: "",
    imgUrl: "",
  });
  const [dummyUserObject, setDummyUserObject] = useState({
    names: "",
    username: "",
    password: "",
    email: "",
    imgUrl: "",
  });
  let [primaryBlog, setPrimaryBlog] = useState(blogs[0]);
  const [invalid, setInvalid] = useState(false);
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [post, setPost] = useState({
    title: "",
    description: "",
    imgUpload: dummyUserObject.imgUrl,
    imgUrl: "",
  });
  const [yourPost, setYourPost] = useState({
    title: "",
    description: "",
    imgUpload: dummyUserObject.imgUrl,
    imgUrl: "",
  });

  const toggleNotAvailable = useCallback(
    () => alert("Not available at the moment !"),
    []
  );

  const persistData = useCallback((user) => {
    localStorage.setItem("user", JSON.stringify({ dummyUserObject: user }));
    console.log(dummyUserObject);
  }, []);

  const handleAddUser = (event) => {
    console.log(formData);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  useEffect(() => {
    window.scrollTo(top);
  }, [location]);

  const handleLogin = useCallback(() => {
    if (signUp) {
      console.log(formData.names);
      console.log(formData);
      dummyUserObject.names = formData.names;
      dummyUserObject.username = formData.username;
      dummyUserObject.email = formData.email;
      dummyUserObject.password = formData.password;
      dummyUserObject.imgUrl = formData.imgUrl;
      persistData(dummyUserObject);
      setIsLogged(true);
      alert("Account created successfully !");
      navigate("/");
    } else if (
      !signUp &&
      formData.email === dummyUserObject.email &&
      formData.password === dummyUserObject.password
    ) {
      alert("login successful!");
      setIsLogged(true);
      navigate("/");
    } else {
      setInvalid(true);
      console.log(formData);
      console.log(dummyUserObject);
    }
  }, [formData]);

  const postDetails = (event) => {
    setPost((prevPostData) => {
      return {
        ...prevPostData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const persistPost = (item) => {
    localStorage.setItem("yourPost", JSON.stringify({ yourPost: item }));
    console.log(yourPost);
  };
  const handleCreatePost = () => {
    yourPost.title = post.title;
    yourPost.description = post.description;
    yourPost.imgUpload = post.imgUpload;
    yourPost.imgUrl = post.imgUrl;
    persistPost(yourPost);
    console.log(post);

    setOpenCreatePost(false);
    alert("Post created successfully!");
  };
  useLayoutEffect(() => {
    if (!localStorage) {
      return;
    }
    let localuser = localStorage.getItem("user");
    if (!localuser) {
      setIsLogged(false);
    } else {
      localuser = JSON.parse(localuser).dummyUserObject;
      dummyUserObject.names = localuser.names;
      dummyUserObject.email = localuser.email;
      dummyUserObject.password = localuser.password;
      dummyUserObject.imgUrl = localuser.imgUrl;
      dummyUserObject.username = localuser.username;
      setIsLogged(true);
    }
    if (dummyUserObject.names === "") {
      setIsLogged(false);
    }
    let localPost = localStorage.getItem("yourPost");
    if (!localPost) {
      setIsLogged(false);
    } else {
      localPost = JSON.parse(localPost).yourPost;
      yourPost.title = localPost.title;
      yourPost.description = localPost.description;
      yourPost.imgUpload = localPost.imgUpload;
      yourPost.imgUrl = localPost.imgUrl;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(top);
  }, [location]);

  return (
    <>
      <div className="w-full z-[10] h-11 fixed flex place-content-center bg-zinc-800">
        <Navbar
          dummyUserObject={dummyUserObject}
          toggleNotAvailable={toggleNotAvailable}
          setOpenCreatePost={setOpenCreatePost}
          yourPost={yourPost}
        />
      </div>
      <Sidebar />
      {openCreatePost && (
        <CreatePost
          setOpenCreatePost={setOpenCreatePost}
          handleCreatePost={handleCreatePost}
          postDetails={postDetails}
          post={post}
        />
      )}

      <div id="routes" className="w-full h-auto md:pl-[4.2rem] pt-11 px-2 ">
        <Suspense fallback={<Preloader />}>
          <AppContext.Provider
            value={{
              handleAddUser,
              handleLogin,
              invalid,
              setInvalid,
              signUp,
              setSignUp,
              toggleNotAvailable,
              primaryBlog,
              setPrimaryBlog,
              dummyUserObject,
              setOpenCreatePost,
              yourPost,
            }}
          >
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route path="/blogs/:blog" element={<Hero />} />
              <Route path="/all/blogs/:param" element={<Blogs />} />
              <Route
                path="/profile"
                element={
                  dummyUserObject.names ? (
                    <Profile />
                  ) : (
                    <Navigate replace to={"/sign_in/auth"} />
                  )
                }
              />
              <Route path="/sign_in/:state" element={<SignIn />} />
              <Route element={<NotFound />} path="*" />
            </Routes>
          </AppContext.Provider>
        </Suspense>
      </div>
    </>
  );
};

export default App;
