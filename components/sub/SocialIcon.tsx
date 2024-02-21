
interface IconProps {
    Icon:  React.ComponentType<{ size: number;}>;
    hoverColor: string;
    name: string;
}

const SocialIcon = ({ Icon, hoverColor, name }: IconProps) => (
  <div className="flex items-center justify-center rounded-md  w-8 h-8 hover:bg-accent" title={name}>
      <Icon size={20}/>
      <style jsx>{`
      div:hover {
        color: ${hoverColor};
      }
    `}</style>
  </div>
  );

  export default SocialIcon;