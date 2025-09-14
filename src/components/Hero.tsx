import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  description?: string;
  buttonUrl?: string;
  buttonText?: string;
}

function Hero(props: HeroProps) {
  const { title, description, buttonUrl, buttonText } = props;
  return (
    <section
      className="hero flex flex-col items-center justify-center max-w-7xl mx-auto py-16 px-4 gap-4 text-center"
      aria-labelledby="hero-title"
    >
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      {description && (
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-10">
          {description}
        </p>
      )}
      {buttonUrl && (
        <Link to={buttonUrl} className="button text-center">
          {buttonText}
        </Link>
      )}
    </section>
  );
}

export default Hero;
