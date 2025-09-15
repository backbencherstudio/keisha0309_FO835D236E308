import Banner from "@/components/pages/Banner";
import BookYourRide from "@/components/pages/BookYourRide";
import CelebratingLife from "@/components/pages/CelebratingLife";
import Footer from "@/components/pages/Footer";
import InteractiveServiceMap from "@/components/pages/InteractiveServiceMap";
import Navbar from "@/components/pages/Navbar";
import WhereWeOperate from "@/components/pages/WhereWeOperate";
import WhyChooseOurService from "@/components/pages/WhyChooseOurService";
import ZeroToleranceDrug from "@/components/pages/ZeroToleranceDrug";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhyChooseOurService />
      <WhereWeOperate />
      <InteractiveServiceMap />
      <BookYourRide />
      <ZeroToleranceDrug />
      <CelebratingLife />
      <Footer />
    </div>
  );
}
