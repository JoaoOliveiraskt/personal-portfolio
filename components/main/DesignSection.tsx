import Balancer from "react-wrap-balancer";

export default function DesignSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-max pb-24 sm:pb-10 pt-32 sm:pt-20 ">
      <div className="circle absolute opacity-70 top-60 rounded-full w-[30%] h-[70%]"></div>
      <div className="space-y-16 flex flex-col items-center justify-center h-max max-w-[96%]">

      <div className="w-full">
        <h2 className="text-3xl text-center font-semibold tracking-wide text-zinc-50">
          <Balancer>Exploring the Art of Web Design</Balancer>
        </h2>
      </div>

      <div className="max-w-[1080px] flex items-center justify-center">
        <video
          id="video"
          width="100%"
          height="100%"
          preload="auto"
          autoPlay
          controls
          loop
          muted
          className="filter blur-[0px] brightness-50 rounded-3xl border-8 border-black "
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      </div>
    </section>
  );
}
