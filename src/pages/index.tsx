import Contact from "@contact/components/Contact";
import AdvantagesBar from "@home/components/AdvantagesBar";
import Attendance from "@home/components/Attendance";
import CommonProblems from "@home/components/CommonProblems";
import LatestServices from "@home/components/LatestServices";
import Specialties from "@home/components/Specialties";
import Testimonials from "@home/components/Testimonials";
import FAQ from "@shared/components/organisms/FAQ";

export default function HomePage() {
  return (
    <>
      <AdvantagesBar />
      <Specialties />
      <CommonProblems />
      <Attendance />
      <LatestServices />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
