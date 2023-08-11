import About from "@/components/About";
import HomeContainer from "@/components/HomeContainer";
import Subscribe from "@/components/Subscribe";

const Home = async () => {
  return (
    <>
      <div className="flex flex-col items-center pb-32 gap-2 pt-20">
        <p className="">Welcome to the</p>
        <h1 className="text-primary font-bold text-4xl">OnlineStore</h1>
      </div>
      <h2 className="text-primary font-semibold text-xl text-center mb-4">
        &lt;&lt; Browse Products &gt;&gt;
      </h2>
      <HomeContainer />
      <About />
      <Subscribe />
    </>
  );
};

export default Home;
