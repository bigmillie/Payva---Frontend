import Button from "../commons/Button";

const ChoosePayva = () => {
  return (
    <section className="bg-[linear-gradient(116.28deg,#006D68_0%,#09253F_131.82%)] mx-4 md:mx-12 rounded-4xl mb-12">
      <div className="flex font-famil flex-col gap-3 md:gap-5 items-center justify-center px-4 py-18 md:w-200 mx-auto">
        <h1 className="text-2xl md:text-5xl text-[#ffffff] text-center leading-[100%] tracking-[-2%] font-bold">
          Need Ease? <span className="text-[#99E1DD]">Choose Payva</span>
        </h1>
        <p className="text-sm md:text-base text-white text-center max-w-2xl">
          No matter the distance, Payva helps you show love—sending funds,
          paying bills, and receiving support for the people who matter most.
        </p>
        <div className="flex items-center bg-white p-0.5 rounded-lg gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="
        flex-1
      px-4
      py-3
      outline-none
      placeholder:text-slate-400
      text-[#006D68]
      rounded-md
    "
          />

          <Button className="text-sm shrink-0 px-5">Submit Email</Button>
        </div>
      </div>
    </section>
  );
};

export default ChoosePayva;
