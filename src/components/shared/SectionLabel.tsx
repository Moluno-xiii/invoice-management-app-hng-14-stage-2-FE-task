interface Props {
  text: string;
}

const SectionLabel: React.FC<Props> = ({ text }) => {
  return (
    <p className="text-primary text-nm mb-6 font-bold tracking-[-0.25px]">
      {text}
    </p>
  );
};

export default SectionLabel;
