import {
  children,
  childSvg,
  classView,
  computer,
  Cultural,
  fileSvg,
  homeSvg,
  languageSvg,
  laptopCodeSvg,
  newspaperSvg,
  phoneSvg,
  prayingSvg,
  schoolAttention,
  schoolBoys,
  schoolGate,
  usersSvg,
  S6ComputerScienceBook,
  S6ComputerScienceSylabus,
  S6EconomicsBook,
  S6MathBook,
  S6MathSylabus,
  facebookSvg,
  githubSvg,
  linkedInSvg,
} from "../assets";

export const pages = [
  {
    id: "0",
    name: "Home",
    favSlide: 0,
    iconUrl: homeSvg,
    routerLink: "/",
  },
  {
    id: "1",
    name: "News&Events",
    favSlide: 1,
    iconUrl: newspaperSvg,
    routerLink: "/news&events",
  },
  {
    id: "2",
    name: "Education",
    favSlide: 2,
    iconUrl: usersSvg,
    routerLink: "/education",
  },
  {
    id: "3",
    name: "About",
    favSlide: 3,
    iconUrl: fileSvg,
    routerLink: "/about",
  },
  {
    id: "4",
    name: "Contact",
    favSlide: 0,
    iconUrl: phoneSvg,
    routerLink: "/contact",
  },
];

export const designerSacials = [
  {
    id: "0",
    name: "Github",
    iconUrl: githubSvg,
    linkUrl: "https://github.com/miracleibanze/",
  },
  {
    id: "0",
    name: "Facebook",
    iconUrl: facebookSvg,
    linkUrl: "https://facebook.com/MiracleCode/",
  },
  {
    id: "0",
    name: "LinkedIn",
    iconUrl: linkedInSvg,
    linkUrl: "https://www.linkedin.com/in/ibanze-miracle-a203b6270",
  },
];

export const slides = [
  {
    url: schoolAttention,
  },
  {
    url: schoolBoys,
  },
  {
    url: classView,
  },
  {
    url: schoolGate,
  },
];

export const prevSlide = () => {
  const isFirstSlide = slideIndex === 0;
  const newSlideIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1;
  setSlideIndex(newSlideIndex);
};
export const nextSlide = () => {
  let isLastSlide = slideIndex === slides.length - 1;
  let newSlideIndex = isLastSlide ? 0 : slideIndex + 1;
  setSlideIndex(newSlideIndex);
};
export const goToIndex = (index) => {
  setSlideIndex(index);
};

export const goUp = () => {
  window.scrollTo(top);
};

export const aboutParagraph =
  "Mukingi Secondary school is mixed (boys and girls) secondary school for quality education in advanced level and ordinary level, and its academic program is entirely based on Rwandan National Carriculum, also enhancing science and culture.";

export const Academics = [
  {
    id: 0,
    title: "Senior 1",
    ChemBookLink: "#",
    ChemSylabusLink: "#",
    BioBookLink: "#",
    BioSylabusLink: "#",
    PhysicsBookLink: "#",
    PhysicsSylabuskLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
    EntBookLink: "#",
    EntSylabuskLink: "#",
    KinyarwandaBookLink: "#",
    KinyarwandaSylabuskLink: "#",
    GeoBookLink: "#",
    GeoSylabuskLink: "#",
    HistoryBookLink: "#",
    HistorySylabuskLink: "#",
    EnglishBookLink: "#",
    EnglishSylabuskLink: "#",
  },
  {
    id: 1,
    title: "Senior 2",
    ChemBookLink: "#",
    ChemSylabusLink: "#",
    BioBookLink: "#",
    BioSylabusLink: "#",
    PhysicsBookLink: "#",
    PhysicsSylabuskLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
    EntBookLink: "#",
    EntSylabuskLink: "#",
    KinyarwandaBookLink: "#",
    KinyarwandaSylabuskLink: "#",
    GeoBookLink: "#",
    GeoSylabuskLink: "#",
    HistoryBookLink: "#",
    HistorySylabuskLink: "#",
    EnglishBookLink: "#",
    EnglishSylabuskLink: "#",
  },
  {
    id: 2,
    title: "Senior 3",
    ChemBookLink: "#",
    ChemSylabusLink: "#",
    BioBookLink: "#",
    BioSylabusLink: "#",
    PhysicsBookLink: "#",
    PhysicsSylabuskLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
    EntBookLink: "#",
    EntSylabuskLink: "#",
    KinyarwandaBookLink: "#",
    KinyarwandaSylabuskLink: "#",
    GeoBookLink: "#",
    GeoSylabuskLink: "#",
    HistoryBookLink: "#",
    HistorySylabuskLink: "#",
    EnglishBookLink: "#",
    EnglishSylabuskLink: "#",
  },
  {
    id: 3,
    title: "Senior 4 MCE",
    ComputerBookLink: "#",
    ComputerSylabusLink: "#",
    EconomicsBookLink: "#",
    EconomicsSylabusLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
  },
  {
    id: 4,
    title: "Senior 4 LFK",
    kinyarwandaBookLink: "#",
    kinyarwandaSylabusLink: "#",
    FrenchBookLink: "#",
    FrenchSylabusLink: "#",
    LiteratureBookLink: "#",
    LiteratureSylabuskLink: "#",
  },
  {
    id: 5,
    title: "Senior 5 MCE",
    ComputerBookLink: "#",
    ComputerSylabusLink: "#",
    EconomicsBookLink: "#",
    EconomicsSylabusLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
  },
  {
    id: 6,
    title: "Senior 5 LFK",
    kinyarwandaBookLink: "#",
    kinyarwandaSylabusLink: "#",
    FrenchBookLink: "#",
    FrenchSylabusLink: "#",
    LiteratureBookLink: "#",
    LiteratureSylabuskLink: "#",
  },
  {
    id: 7,
    title: "Senior 6 MCE",
    ComputerBookLink: S6ComputerScienceBook,
    ComputerSylabusLink: S6ComputerScienceSylabus,
    EconomicsBookLink: S6EconomicsBook,
    EconomicsSylabusLink: "#",
    MathBookLink: S6MathBook,
    MathSylabuskLink: S6MathSylabus,
  },
  {
    id: 8,
    title: "Senior 6 LFK",
    kinyarwandaBookLink: "#",
    kinyarwandaSylabusLink: "#",
    FrenchBookLink: "#",
    FrenchSylabusLink: "#",
    LiteratureBookLink: "#",
    LiteratureSylabuskLink: "#",
  },
];
