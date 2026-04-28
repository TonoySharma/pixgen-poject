import Image from "next/image";
import TopCard from "../components/top-5-card/TopCard";
import Banner from "../components/banner/Banner";

export default function Home() {
  return (
   <div className="font-bold text-2xl text-center my-5">
        <Banner></Banner>
        <TopCard></TopCard>
   </div>
  );
}
