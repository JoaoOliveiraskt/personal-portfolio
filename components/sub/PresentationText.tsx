import Balancer from "react-wrap-balancer";
import getMonthDifference from "@/utils/developerDate";

interface Props {
  className?: string;
}

export default function Presentaion({ className }: Props) {
  return (
    <p
      className={`"tracking-wide leading-loose text-text font-medium mx-2 max-w-[900px] ${className}`}
    >
      <Balancer>
        Hello, I&apos;m João, a front-end developer based in Saquarema, RJ with {getMonthDifference()}{" "}
        months of experience in website. Check out my project skills below.
      </Balancer>
    </p>
  );
}
