interface Props {
  text: string;
  className?: string;
}

const BigText: React.FC<Props> = ({ text, className = "" }) => (
  <p className={`text-text text-nm font-bold tracking-[-0.25px] ${className}`}>
    {text}
  </p>
);

export default BigText;
