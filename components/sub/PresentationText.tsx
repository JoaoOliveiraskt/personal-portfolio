import Balancer from "react-wrap-balancer";
import getMonthDifference from "@/utils/developerDate";
import { GoArrowUpRight } from "react-icons/go";
interface Props {
  className?: string;
}
const universityLink = "https://univassouras.edu.br";

export default function Presentaion({ className }: Props) {
  return (
    <h3
      className={`"tracking-wide leading-loose text-text font-medium max-w-[810px] ${className}`}
    >
      <Balancer>
        Hello, I&apos;m João, a front-end developer based in Saquarema, Rio de
        Janeiro, with {getMonthDifference()} months of experience in web development.
        Graduating Software Engineering from{" "}
        <a href={universityLink} target="_blank" className="text-blue-600 hover:text-blue-400 inline-flex items-center">
          <h3>UV</h3>
          <GoArrowUpRight />
        </a>{". "}
        Check out my skills below.
      </Balancer>
    </h3>
  );
}
