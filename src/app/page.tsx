import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Marquee from '../components/marquee'
import ProductGrid from '../components/product-grid'
import AboutSection from '../components/about-section'
import InstagramSection from '../components/instagram-section'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy text-white font-sans">
        <Hero />
        <Marquee />
        <ProductGrid />
        <AboutSection />
        <InstagramSection />
      </main>
      <Footer />
    </>
  )
}
