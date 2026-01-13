import Button from "../commons/Button";
import HeadingTag from "../commons/HeadingTag";

const OurValues = () => {
  return (
    <section
      className="
        bg-[linear-gradient(116.28deg,#004F4C_0%,#141B34_131.82%)]
        mx-0 md:mx-12
        rounded-none md:rounded-4xl
        mb-12
      "
    >
      <div
        className="
          p-6 md:p-12
          flex flex-col md:flex-row
          items-center md:items-start
          justify-between
          gap-12 md:gap-18
        "
      >
        {/* Section Heading */}
        <div
          className="
            flex flex-col
            items-center md:items-start
            text-center md:text-left
            gap-4
            max-w-md
          "
        >
          <HeadingTag>Our Values</HeadingTag>

          <h1
            className="
              text-white
              font-famil
              text-2xl md:text-4xl
              font-bold
              leading-tight
            "
          >
            What keeps us going every day, and how we&apos;re different.
          </h1>

          <Button className="text-sm px-5 mt-2">Join the waitlist</Button>
        </div>

        {/* Values List */}
        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2
            gap-6 md:gap-8
            font-famil
            w-full
          "
        >
          <div className="bg-[#006D68] text-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-3xl font-bold mb-2">
              Community-first
            </h2>
            <p className="text-sm md:text-lg">
              Built by immigrants, for immigrants. Your success is our success,
              so we prioritize you.
            </p>
          </div>

          <div className="bg-[#E6F9F7] p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-3xl text-[#2A2A2A] font-bold mb-2">
              Trust without compromise
            </h2>
            <p className="text-sm md:text-lg text-[#4D4D4D]">
              We handle your hard-earned money with care. Security and
              reliability are non-negotiable.
            </p>
          </div>

          <div className="bg-[#E6F9F7] p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-3xl text-[#2A2A2A] font-bold mb-2">
              Innovation
            </h2>
            <p className="text-sm md:text-lg text-[#4D4D4D]">
              We use technology to make transfers faster, cheaper, and
              simpler—always improving for you.
            </p>
          </div>

          <div className="bg-[#E6F9F7] p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-3xl text-[#2A2A2A] font-bold mb-2">
              Empowerment
            </h2>
            <p className="text-sm md:text-lg text-[#4D4D4D]">
              Financial services should lift people up, not exploit them. We
              help our community build better futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
