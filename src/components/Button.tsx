type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return <div className="button" onClick={onClick}></div>;
};

export default Button;
