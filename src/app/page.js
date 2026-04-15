import Footer from "@/components/footer/Foooter";
import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Banner/>
      <Stats/>
      <Footer />
    </div>
  );
}