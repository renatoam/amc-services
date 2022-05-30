import Contact from "@contact/components/Contact";
import LatestServices from "@home/components/LatestServices";
import Testimonials from "@home/components/Testimonials";
import FAQ from "@shared/components/organisms/FAQ";

export default function HomePage() {
  return (
    <>
      <LatestServices />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
