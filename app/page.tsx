import About from '@/components/About'
import Contact from '@/components/Contact'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

const Page = () => {
  return (
    <main className="bg-[#0a0a0f] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default Page
