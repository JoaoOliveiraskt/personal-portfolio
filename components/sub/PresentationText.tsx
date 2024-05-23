import Balancer from "react-wrap-balancer";
import getMonthDifference from "@/utils/developerDate";
import { GoArrowUpRight } from "react-icons/go";
interface Props {
  className?: string;
}
const universityLink = "https://univassouras.edu.br";

export default function PresentationText({ className }: Props) {
  return (
    <h3
      className={`tracking-wide leading-loose text-muted-foreground font-medium max-w-[810px] ${className}`}
    >
      <Balancer>
        Olá, eu sou João, um desenvolvedor front-end localizado em Saquarema,
        Rio de Janeiro, com {getMonthDifference()} meses de experiência em
        desenvolvimento web. Graduando em Engenharia de Software na{" "}
        <a
          href={universityLink}
          target="_blank"
          className="text-blue-600 hover:text-blue-400 inline-flex items-center"
        >
          <h3>UV</h3>
          <GoArrowUpRight />
          {"."}
        </a>{" "}
        Confira minhas habilidades abaixo.
      </Balancer>
    </h3>
  );
}
