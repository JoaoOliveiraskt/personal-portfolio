import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function DesignSection() {
  return (
    <section
      id="design"
      className="relative flex flex-col items-center justify-center w-full h-max pt-12 sm:pt-20 px-2"
    >
      {/* Efeito de gradient */}
      <div className="circle absolute blur-[200px] dark:blur-[45px] top-10 sm:top-20 dark:opacity-40 rounded-[100%] w-[55%] h-[90%]"></div>

      <div className="space-y-8 sm:space-y-5 flex flex-col items-center justify-center h-max w-full">
        {/* Titúlo da sessão */}
        <div className="w-full flex justify-center text-center">
          <h2 className="max-w-[40rem] text-4xl sm:text-3xl text-center tracking-tighter font-bold bg-gradient-to-r from-primary via-primary to-secondary text-transparent bg-clip-text py-1">
            <Balancer>Explorando a arte do Web Design</Balancer>
          </h2>
        </div>

        <div className="relative max-w-[1080px] flex items-center justify-center overflow-hidden">
          {/* Vídeo de fundo */}
          <video
            id="video"
            width="100%"
            height="100%"
            preload="auto"
            autoPlay
            controls
            loop
            muted
            className="filter blur-[0px] brightness-100 rounded-3xl border-2 border-border dark:border-slate-500"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/*<Image
            src="/safari.svg"
            alt="safari"
            className="w-full h-auto"
            width="1920"
            height="1080"
          />*/}
        </div>
      </div>
    </section>
  );
}
