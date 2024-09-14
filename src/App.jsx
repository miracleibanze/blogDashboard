import React, { useState } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import Education from './component/Education'
import Contact from './component/Contact'
import About from './component/About'
import Carousel from './component/Carousel.jsx'
import Footer from './component/Footer.jsx'
import { children, childSvg, classView, computer, Cultural, fileSvg, homeSvg, languageSvg,  laptopCodeSvg, newspaperSvg, phoneSvg, prayingSvg, schoolAttention, schoolBoys, schoolGate, usersSvg, WhiteADoubleRightSvg } from './assets/index.js'
import Hero from './component/Hero.jsx'

const App = () => {

  const [ pageIndex, setPageIndex ] = useState(0)

  const [slideIndex, setSlideIndex] = useState(0)

  const [ educationPartIndex, setEducationPartIndex ] = useState(0)

  const [ newsType, setNewsType ] = useState(0)

  const [ upScrollButton, setUpScrollButton ] = useState(false)

  const slides = [
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
  ]
  const prevSlide = () => {
    const isFirstSlide = slideIndex === 0
    const newSlideIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1
    setSlideIndex(newSlideIndex)
  }
  const nextSlide = () => {
    let isLastSlide = slideIndex === slides.length -1
    let newSlideIndex = isLastSlide ? 0 : slideIndex + 1
    setSlideIndex(newSlideIndex)
  }
  const goToIndex = (index) => {
    setSlideIndex(index)
  }

  const Motto_Vission = <>
            <div>
              <div className=' flex flex-col gap-4'>
                <h4 className="h4 relative font-bold">Moto & <span className='text-color-1'>Mission</span></h4>
                <p className="h5 font-bold">Motto:&nbsp;<span className='h6 font-thin'>Perform More and Quick</span></p>
                <p className="h5 font-bold">Mission:&nbsp;<span className='h6 font-thin'>Mikingi secondary school is committed to being the leader in transforming the you to the requirement of our country's development, in science excellency and culture.</span></p>
              </div>
              <p className="h5 font-bold">Core Values:&nbsp;<span className='h6 font-thin'>
                <ul>
                  <li>&#9998;&nbsp;Respect</li>
                  <li>&#9998;&nbsp;Culture</li>
                  <li>&#9998;&nbsp;Excellence</li>
                </ul>
                </span></p>
            </div>
  </>
  
  window.onscrollend = () => {
    setUpScrollButton(!upScrollButton)
  }

  const vission = <>
    <div className='flex flex-col gap-4'>
        <div>
          <h4 className="h4 relative font-bold mb-4">Vission <span className='relative text-color-1'>Statement</span></h4>
          <p>"With optimum guidance of students in studies and creating better learning humor and environment, Ecole secondary de Mukingi has managed to increase the level of success rate above the 90%."</p>
        </div>
        
        <div className='relative w-full full mt-4'>
          <img
            src={schoolBoys}
            className='w-full h-full object-cover rounded-lg border border-color-4 -translate-y-8 mt-4'
          />
        </div>
    </div>
  </>
  const aboutParagraph = 'Mukingi Secondary school is mixed (boys and girls) secondary school for quality education in advanced level and ordinary level, and its academic program is entirely based on Rwandan National Carriculum, also enhancing science and culture.'

  const pages = [
    {
      id: '0',
      name: 'Home',
      favSlide: 0,
      iconUrl: homeSvg,
    },
    {
      id: '1',
      name: 'News&Events',
      favSlide: 1,
      iconUrl: newspaperSvg,
    },
    {
      id: '2',
      name: 'Education',
      favSlide: 2,
      iconUrl: phoneSvg,
    },
    {
      id: '3',
      name: 'About',
      favSlide: 3,
      iconUrl: fileSvg,
    },
    {
      id: '4',
      name: 'Contact',
      favSlide: 0,
      iconUrl: usersSvg,
    },
  ]

  const courses = [
    {
      name: 'MCE',
      full: 'Mathematic, Computer Science and Economics.',
      coverUrl: laptopCodeSvg,
      bgUrl: computer,
      description: <>
        <p className='body-2 text-n-1/90 mb-4'>With proffessional teacher we are able to make our students more valuable, Mathematics is a courses that is based on activities, Hence after knowing that we recommend many practical exercises just to open mind our students.</p>
        <p className='body-2 text-n-1/90 mb-4'>Computer Science isn't a course that one can cover by just to mark as much as possible, But we regard to the future of the students and provided space for them to dive deeply into computer knowledge. we even have a <u><i>club that facilitate those with future in computer scince</i></u>.</p>
        <p className='body-2 text-n-1/90'>While Economics is based on the real-world understanding we give a space for students to find out more information of any kind from desired resources possible. Outdoor activities also help in that way. </p>
      </>
    },
    {
      name: 'LFK',
      full: 'Literature in English, French and Kinyarwanda.',
      coverUrl: languageSvg,
      colorful: true,
      description: <>
        <p className='body-2 text-n-1/90 mb-4'>Literature in English is one in most succeded studies in our school with presence of facilitating the supply of books, novels dictionaries and other document used in studies all over our school and its plenty of them.</p>
        <p className='body-2 text-n-1/90 mb-4'>What we are sure of is that Students can speak French well with experienced and professional teachers, Joining our journey is a big choice.</p>
        <p className='body-2 text-n-1/90'>The way we care about culture can't allow us to be left behind on dashboard showing marks in Kinyarwanda lesson, we just accelerate being the best Speakers that can ever be found with culture and knowledgable accent in Kinyarwadnda. </p>
      </>
    },
    {
      name: 'Ordinary Level',
      content: 'Prepare the future of your child starting qualified for the world.',
      coverUrl: childSvg,
      bgUrl: children,
      description: <>
        <p className='body-2 text-n-1/90 mb-4'>What we are sure of that is also that in our testmony about Ordinary level students is still the best.</p>
        <p className='body-2 text-n-1/90 mb-4'>We get to that by ensuring high level of education facilities that makes them able to attend in nation competition, with high level of discipline to our students that makes them like angles when they get to other students from other places.</p>
        <p className='body-2 text-n-1/90'>Send your children and see the result about how good he/she will be.</p>
      </>
    },
    {
      name: 'Religion and Ethics',
      content: "Students perform any task give with GOD in which we give high priority at our school and no 'Discrimination' in religion.",
      coverUrl: prayingSvg,
      bgUrl: Cultural,
      description: <>
        <p className='body-2 text-n-1/90 mb-4'>Religion isn't a lesson that one have to learn in class only,. but also we have guidelines that help students be spiritually christians, even that we don't discriminate, all kind of allowed religion s found in our school.</p>
        <ul className='body-2 text-n-1/90 mb-4 list-disc px-8'>
          <li>Adventists</li>
          <li>RAJEPRA</li>
          <li>Catholic</li>
          <li>Islam</li>
          <li>Jehovah 's Witnesses</li>
        </ul>
      </>
    },
  ]



  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-900 to-black text-white text-sm sm:text-base font-grotesk max-w-screen overflow-x-hidden">
      <a href="#page" className={`${upScrollButton ? 'flex' : 'hidden'}`} onClick={() => setUpScrollButton(true)}>
        <div className="lg:flex fixed hidden z-20 bottom-4 right-0 h-16 w-16 items-end cursor-pointer justify-start" >
          <img src={WhiteADoubleRightSvg} alt="close" className="w-16 h-16 -rotate-90 bg-color-1 p-2"  />
        </div>
      </a>
      <NavBar setPageIndex={setPageIndex} setSlideIndex={setSlideIndex} pages={pages} />
      <Carousel pageIndex={pageIndex} pages={pages} slides={slides} prevSlide={prevSlide} nextSlide={nextSlide} goToIndex={goToIndex} slideIndex={slideIndex} />
      <div className={`relative ${pageIndex != 0 ? 'hidden' : ''}`}>
        <Hero courses={courses} setPageIndex={setPageIndex} aboutParagraph={aboutParagraph} setSlideIndex={setSlideIndex} setNewsType={setNewsType} Motto_Vission={Motto_Vission} vission={vission} />
      </div>
      <div className={`relative ${pageIndex != 1 ? 'hidden' : 'block'}`}>
        <News newsType={newsType} setNewsType={setNewsType} />
      </div>
      <div className={`relative ${pageIndex != 2 ? 'hidden' : 'block'}`}>
        <Education educationPartIndex={educationPartIndex} setEducationPartIndex={setEducationPartIndex} courses={courses} setPageIndex={setPageIndex} />
      </div>
      <div className={`relative ${pageIndex != 3 ? 'hidden' : 'block'}`}>
        <About  aboutParagraph={aboutParagraph} Motto_Vission={Motto_Vission} vission={vission} setPageIndex={setPageIndex} />
      </div>
      <div className={`relative ${pageIndex != 4 ? 'hidden' : 'block'}`}>
        <Contact />
      </div>
      <Footer courses={courses} aboutParagraph={aboutParagraph} setPageIndex={setPageIndex} pages={pages} pageIndex={pageIndex} setSlideIndex={setSlideIndex} />
    </main>
  )
}

export default App