import About from '@/components/About'
import Contact from '@/components/Contact'
import  HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'


const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default page
