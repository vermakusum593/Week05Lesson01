type ScreenProps = {
  result: number | null;
};

const Screen = ({ result }: ScreenProps) => {
  return (
    <div className="screen">
      {result !== null ? result.toFixed(2) : "00.00"}
    </div>
  );
};

export default Screen;
