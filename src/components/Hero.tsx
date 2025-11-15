import { Button } from "./ui/button";
import heroImage from "@/assets/hero-game.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Epic game hero scene"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-16">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Enter the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              NEXUS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Experience the ultimate gaming adventure in a world where reality meets virtual chaos.
            Battle, explore, and conquer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow-blue transition-all text-lg px-8"
            >
              Play Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
