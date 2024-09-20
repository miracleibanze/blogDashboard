import Section from "./designs/Section";
import Heading from "./designs/Heading";
import Button from "./designs/Button";
import {
  ADoubleLeftSvg,
  ADoubleRightSvg,
  ALeftSvg,
  ARightSvg,
  arrowRight,
  assemble,
  DOD,
  eyeSlash,
  headMaster,
  parental,
  person1,
  refectory,
  S6Graduates,
  schoolBoys,
  schoolGate,
} from "../assets";
import { useContext, useState } from "react";
import Tagline from "./designs/Tagline";
import About from "./About";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { AppContext } from "../App";

const Hero = () => {
  const {
    pages,
    courses,
    setPageIndex,
    aboutParagraph,
    setSlideIndex,
    setNewsType,
    Motto_Vission,
    vission,
    goUp,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const [highlightIndex, setHIghlightIndex] = useState(0);
  const [testimonyIndex, setTestmonyIndex] = useState(0);

  const activities = [
    {
      id: "0",
      name: "Hands-On Electronics",
      description:
        "In Computer Science, Students does not only engage in theory learning but also get to experience in practical knowledge like electronic disassembly.",
      imageUrl: eyeSlash,
    },
    {
      id: "1",
      name: "Laboratory activities",
      description:
        "In Ordinary, Students starts experimenting what they learn in sciences, the get chance to understand what they face in upcoming lessons.",
      imageUrl: eyeSlash,
    },
    {
      id: "2",
      name: "Community work",
      description:
        "As Mukingi Secondary school base on true Rwandan culture students are trained with the passion of national services, that our priority.",
      imageUrl: DOD,
    },
  ];

  const weHave = [
    {
      id: "0",
      name: "Learners",
      Number: "684",
    },
    {
      id: "1",
      name: "Teachers",
      Number: "45",
    },
    {
      id: "2",
      name: "Computer rooms",
      Number: "3",
    },
  ];

  const Highlights = [
    {
      url: parental,
      caption: "In Meeting with parents",
      Date: "12 June, 2024",
    },
    {
      url: assemble,
      caption: "Preparing to go for upcoming 'ITORERO' Festival",
      Date: "02 February, 2024",
    },
    {
      url: refectory,
      caption:
        "Following the notification from Director Of Displine about Lunch time ",
      Date: "24 june, 2024",
    },
    {
      url: S6Graduates,
      caption: "Students who have just finished their studies in Senior Six",
      Date: "31 August, 2024",
    },
  ];

  const nextHighlight = () => {
    const isLastHightlight = highlightIndex === Highlights.length - 1;
    const newHightlightIndex = isLastHightlight ? 0 : highlightIndex + 1;
    setHIghlightIndex(newHightlightIndex);
  };
  const prevHighlight = () => {
    const isFirstHightlight = highlightIndex === 0;
    const newHightlightIndex = isFirstHightlight
      ? Highlights.length - 1
      : highlightIndex - 1;
    setHIghlightIndex(newHightlightIndex);
  };

  const testimonies = [
    {
      id: "0",
      year: "Student, 2024",
      names: "IBANZE Miracle",
      avatar: person1,
      content:
        "I found that E.S Mukingi was the best in all aspect, When I got myself compared to other, I was proud of this school because I found I was the first, and now I am still the best thank to E.S Mukingi.",
    },
    {
      id: "1",
      year: "Student 2023",
      names: "MUGISHA Fabrice",
      avatar: eyeSlash,
      content:
        "When I remember how there was all I needed to prepare my future dreams, I can't hestate to send my relatives to get that too, I think it is the best for any child.",
    },
    {
      id: "2",
      year: "Student 2023",
      names: "ISHIMWE Emelyne",
      avatar: eyeSlash,
      content:
        "I am a business woman thanks to Mukingi secondary school in which I found opportunities to experience outdoor activities that equiped me with enhanced skills of this world, hope it's the choice you deserve.",
    },
    {
      id: "3",
      year: "Staff",
      names: "MUKAMANA Emerance",
      avatar: eyeSlash,
      content:
        "I like working on this school because there is always happy mood, care we give students keeps them friendly to us, this is the most thing I like on them as they turn out to be generous everyday more.",
    },
  ];

  const prevTestimonial = () => {
    const isFirsTestmonial = testimonyIndex === 0;
    const newTestimonyIndex = isFirsTestmonial
      ? testimonies.length - 1
      : testimonyIndex - 1;
    setTestmonyIndex(newTestimonyIndex);
  };
  const nextTestimonial = () => {
    const isLastTestimony = testimonyIndex === testimonies.length - 1;
    const newTestimonyIndex = isLastTestimony ? 0 : testimonyIndex + 1;
    setTestmonyIndex(newTestimonyIndex);
  };

  return (
    <>
      <Section id="courses" className="p-2">
        <Heading
          tag="welcome To our school"
          title="Ecole"
          span="Secondaire"
          title2="De"
          span2="Mukingi"
        />
        <div className="container relative">
          <div className="flex flex-wrap items-center justify-center gap-8 content-evenly max-[880px]:gap-4">
            {courses.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`w-[20rem] max-[695px]:w-[25rem] h-[28rem] p-[.0625rem] rounded-3xl max-[880px]:w-[18rem] border border-n-1/30 ${
                  item.colorful ? "bg-conic-gradient" : ""
                }`}
              >
                <div
                  className="w-full h-full bg-n-8/95 rounded-3xl bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${item.bgUrl ? item.bgUrl : ""})`,
                  }}
                >
                  <div className="w-full relative h-full p-4 pb-6 bg-n-7/80 rounded-3xl flex flex-col justify-between">
                    <img
                      className="h-[6rem] mx-auto bg-cyan-bottom p-2"
                      src={item.coverUrl}
                    />
                    <h3 className="h3 ">{item.name}</h3>
                    <div className="body-1 text-n-2">
                      {item.full || item.content}
                    </div>
                    <div className="w-full flex justify-center">
                      <Button
                        onClick={() => {
                          setSlideIndex(2);
                          setPageIndex(2);
                          goUp();
                          navigate("/education");
                        }}
                      >
                        Read about ...
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section light id="about">
        <div className="relative flex justify-center flex-wrap gap-12">
          <div className=" md:w-[20rem] sm:w-[20rem] lg:w-[20rem] h-[40rem] flex flex-col justify-between item">
            <Heading
              title="About"
              span="Us"
              tag="How we are unique"
              className="ml-0 mb-8"
            />
            <img
              src={schoolGate}
              className="w-full h-[14rem] rounded-lg border border-color-4 -translate-y-8"
            />
            <p className="body-2 text-justify">{aboutParagraph}</p>
            <Button
              onClick={() => {
                setSlideIndex(3);
                setPageIndex(3);
                goUp();
                navigate("/about");
              }}
            >
              About Us
            </Button>
          </div>
          <div className="lg:w-[20rem] md:w-[18rem] h-[32rem] sm:max-w-[20rem]  translate-y-[10rem] max-[1200px]:translate-y-12 max-md:translate-y-0 flex flex-col justify-between">
            {Motto_Vission}
          </div>
          <div className="lg:w-[20rem] md:w-[18rem] sm:max-w-[20rem] h-[35rem] flex flex-col justify-between translate-y-[8rem] max-[1200px]:translate-y-0">
            {vission}
          </div>
        </div>
      </Section>

      <Section id="activities">
        <Heading
          title="Activities"
          span="highlight"
          tag="Why choose our school"
        />

        <div className="container relative">
          <div className="w-full h-full flex flex-wrap items-center justify-center gap-12">
            {activities.map((item) => (
              <div
                key={item.id}
                className="w-[20rem] h-[30rem] relative bg-conic-gradient p-[0.0625rem]"
              >
                <div className="w-full h-full bg-slate-900 p-4 flex flex-col justify-between">
                  <div>
                    <h5 className="h5 text-center">{item.name}</h5>
                    <img
                      className="w-full object-cover h-[13rem] border mt-4"
                      src={item.imageUrl}
                    />
                  </div>
                  <p className="body-2 text-justify pb-8">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full text-end pt-8 px-8">
            <Button
              onClick={() => {
                setPageIndex(2);
                setSlideIndex(1);
                setNewsType(0);
                goUp();
                navigate("/education");
              }}
            >
              Read in News & Events
            </Button>
          </div>
        </div>
      </Section>

      <Section
        id="we-have"
        className=" bg-cover h-[700px] bg-center"
        style={{ backgroundImage: `url(${headMaster})` }}
      >
        <div className="container absolute w-full h-full flex flex-col justify-center gap-4 items-center bg-gradient-to-b from-n-6/0 to-n-6/70">
          <h3 className="h3 -translate-y-32 lg:-translate-y-1/2">We have :</h3>
          <div className="flex gap-8 flex-wrap justify-evenly w-full">
            {weHave.map((item) => (
              <div
                key={item.id}
                className="w-[10rem] text-center overflow-visible "
              >
                <h1 className="h1 text-[5rem] border-t-8 font-code border-red-600 pt-8">
                  {item.Number}
                </h1>
                <h2 className="h2">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="outdoor">
        <div className="container relative flex flex-col items-start max-md:items-center justify-between gap-8">
          <Heading title="Outdoors" span="Activities" className="w-full" />
          <div className="flex items-center max-md:flex-col-reverse justify-between gap-32  xl:h-[15rem] lg:h-[18rem] md:h-[20rem] max-md:h-auto overflow-visible max-md:gap-8">
            <p className="mt-0 body-1 max-md:text-justify">
              Join us for Outdoor Adventures, where students will engage in a
              series of skills building activities and explore the great
              community situations. This experience is all about fostering their
              ability of teamwork, leadership and love for nature in the out of
              school world, These helps students connect their academic
              knowledge to real-world situations, enhancing their averall
              learning journey.
              <br />
              Activities are mentioned <i>new & Events</i>{" "}
            </p>

            <div className="h-[23rem] min-w-[40%] relative">
              <img
                src={eyeSlash}
                className="w-full md:blueShadow rounded-3xl h-full object-cover"
                alt="Students in activities"
              />
            </div>
          </div>
          <Button
            onClick={() => {
              setPageIndex(2);
              goUp();
              navigate("/education");
            }}
          >
            Go to News & Activities
          </Button>
        </div>
      </Section>

      <Section id="picture-highlight" light>
        <div className="container flex flex-col items-center justify-center xl:px-[10rem] lg:px-[6rem] md:px-[3rem] px-[1rem]">
          <Heading
            title="Picture"
            span="Highlights"
            tag="our everyday activities in pictures"
          />
          <div
            className="relative w-full xl:h-[550px] lg:h-[500px] md:h-[400px] h-[300px] blueShadow border border-color-1 bg-cover"
            style={{
              backgroundImage: `url(${Highlights[highlightIndex].url})`,
            }}
          >
            <Tagline className="absolute top-4 left-0 bg-n-8/60 px-4">
              {Highlights[highlightIndex].Date}
            </Tagline>

            <div className="body-2 absolute bottom-4 right-32 left-32 py-8 text-center bg-n-8/50">
              {Highlights[highlightIndex].caption}
            </div>

            <div className="absolute z-1  bottom-0 left-0">
              <Button blue onClick={() => prevHighlight()}>
                <img src={ADoubleLeftSvg} className="w-8 h-8" />
              </Button>
            </div>
            <div className="absolute z-1  bottom-0 right-0">
              <Button blue onClick={() => nextHighlight()}>
                <img src={ADoubleRightSvg} className="w-8 h-8" />
              </Button>
            </div>
          </div>
          <div className="relative w-full py-4 mt-4">
            <Button
              onClick={() => {
                setPageIndex(1);
                setSlideIndex(2);
                setNewsType(1);
                goUp();
                navigate("./news&events");
              }}
            >
              See more
            </Button>
          </div>
        </div>
      </Section>

      <Section id="testimonials">
        <div className="container relative">
          <Heading
            title="Our"
            span="Testimony"
            text="This is why Our school is the best choise, Read experiences from students, parents and Staff"
          />
          <div className="grid w-full md:grid-cols-2 gap-8">
            <div className="w-[25rem] h-full flex flex-col items-end max-md:w-max max-md:mx-auto">
              <div className="w-full h-auto flex md:gap-2 gap-8 md:flex-row flex-col items-center justify-start relative left-0">
                <img
                  className="w-[10rem] h-[10rem] rounded-full bg-n-7 border-8 border-color-1 object-cover object-center relative z-10"
                  src={testimonies[testimonyIndex].avatar}
                />
                <div className="md:bg-color-1 md:text-n-8 text-n-1 md:translate-x-[5rem] absolute max-md:relative top-0 px-[5rem] h-[5rem] md:pr-4 rounded-br-[3rem] ">
                  <div className="h5 font-bold">
                    {testimonies[testimonyIndex].names}
                  </div>
                  <div className="body-2">
                    {testimonies[testimonyIndex].year}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 h5 text-center">
              "{testimonies[testimonyIndex].content}"
            </div>
          </div>
          <div className="pt-12 flex justify-between">
            <Button className="rounded-full" onClick={() => prevTestimonial()}>
              <img className="w-8 h-8" src={ALeftSvg} />
            </Button>
            <Button className="rounded-full" onClick={() => nextTestimonial()}>
              <img className="w-8 h-8" src={ARightSvg} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
