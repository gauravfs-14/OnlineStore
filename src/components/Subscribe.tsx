const Subscribe = () => {
  return (
    <section className="my-4 mx-16 lg:mx-24 py-16 px-10 lg:px-20 flex flex-col items-center justify-center">
      <h2 className="text-primary font-semibold text-xl text-center mb-10">
        &lt;&lt; Subscribe to our newsletter! &gt;&gt;
      </h2>
      <div className="w-max flex items-center outline outline-primary-dark">
        <input
          type="email"
          placeholder="john@example.com"
          className="bg-transparent outline-none p-2 border border-primary-dark border-r-0 "
        />
        <span className="bg-primary-dark p-2 text-white border border-primary-dark cursor-pointer">
          Subscribe
        </span>
      </div>
    </section>
  );
};

export default Subscribe;
