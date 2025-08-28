import Discover from "@/components/Discover";
import FAQ from "@/components/FAQ";
import Sell from "@/components/Sell";
import Trust from "@/components/Trust";
import Users from "@/components/Users";


export default function Home() {
  return (
    <div>
      <Trust />
      <Discover />
      <FAQ />
      <Sell />
      <Users />
    </div>
  );
}
