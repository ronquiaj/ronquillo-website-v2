import "./styles.css";

const Landing = () => {
  return (
    <section class="flex justify-center bg-background h-full">
      <header>
        <h1 class="text-center text-primary mt-20">adrian ronquillo</h1>
        <img className="profile" src="profilePicture.png" alt="profile" />
        <h3 class="text-primary font-normal">
          ketchikan, alaska . 22 years old . full-stack engineer . filipino
        </h3>
      </header>
    </section>
  );
};

export default Landing;
