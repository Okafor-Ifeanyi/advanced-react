const IntroComponent = ({ intro }: {intro: string}) => {
  return (
    <div className="dashboard">
      <h1>{intro}</h1>
      <p>Welcome to the {intro}</p>
    </div>
  );
};

export default IntroComponent