import Contact from "@contact/components/Contact";
import Attendance from "@home/components/Attendance";
import CommonProblems from "@home/components/CommonProblems";
import LatestServices from "@home/components/LatestServices";
import Testimonials from "@home/components/Testimonials";
import FAQ from "@shared/components/organisms/FAQ";

export default function HomePage() {
  return (
    <>
      <LatestServices />
      <CommonProblems />
      <Attendance />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
