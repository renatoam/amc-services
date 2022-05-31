import Contact from "@contact/components/Contact";
import Attendance from "@home/components/Attendance";
import LatestServices from "@home/components/LatestServices";
import Testimonials from "@home/components/Testimonials";
import FAQ from "@shared/components/organisms/FAQ";

export default function HomePage() {
  return (
    <>
      <Attendance />
      <LatestServices />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
