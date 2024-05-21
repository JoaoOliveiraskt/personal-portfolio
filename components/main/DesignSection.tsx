import Balancer from "react-wrap-balancer";

export default function DesignSection() {
  return (
    <section
      id="design"
      className="relative flex flex-col items-center justify-center w-full h-max pt-12 sm:pt-20 px-4"
    >
      <div className="circle absolute blur-[200px] dark:blur-[45px] top-10 sm: dark:opacity-40 rounded-[100%] w-[55%] h-[90%]"></div>
      <div className="space-y-12 flex flex-col items-center justify-center h-max max-w-[96%]">
        <div className="w-full">
          <h2 className="text-5xl sm:text-3xl text-center tracking-tight font-medium bg-gradient-to-r from-primary via-primary to-text text-transparent bg-clip-text py-1">
            <Balancer>Explorando a arte do Web Design</Balancer>
          </h2>
        </div>

        <div className="max-w-[1080px] flex items-center justify-center overflow-hidden">
          <video
            id="video"
            width="100%"
            height="100%"
            preload="auto"
            autoPlay
            controls
            loop
            muted
            className="filter blur-[0px] brightness-50 rounded-3xl border-2 border-border dark:border-slate-500"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
