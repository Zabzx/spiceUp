import React, { useContext, useEffect} from 'react';
import { MenuContext } from '../context/MenuContext';
import Footer from '../components/Footer.jsx'

const About = () => {

  const [menu, setMenu] = useContext(MenuContext)

  useEffect(() => {
    setMenu({...menu, toggle: false})
  }, [])
  
  return (<>
  <div className="container">
  <h1 className="text-5xl mt-28">This is my first Official Project using Tailwind CSS</h1>
      <p className="mt-5">It was a bit of a challenge to get Tailwind working with React properly but I managed to get the hang of things eventually. The API used for this project unfortunately did not provide as much data as I'd hope. This is the reason the site may feel a bit on the empty side. Regardless, I did what I can with what was provided and developed some basic functionality using the Context API with react hooks and Axios for fetching URL Requests. After getting used to TailwindCSS, I can safely say that I really enjoy the developer experience with it and will definately be using this for my future and better projects.</p>
      </div>
     </>
  )};

export default About;
