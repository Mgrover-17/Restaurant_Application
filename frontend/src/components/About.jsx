import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we&apos;re serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Chef&apos;s Table, where culinary excellence meets unparalleled hospitality. Our mission is to delight your senses with a fusion of flavors crafted from the freshest ingredients. Whether you're here for an intimate dinner or a special celebration, every meal is a memorable experience.
Discover the ease of reserving your table directly on our website, ensuring your spot for an unforgettable dining adventure. At Chef's Table, we bring together exceptional taste and convenience, making every visit a culinary delight.
We look forward to serving you soon!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;