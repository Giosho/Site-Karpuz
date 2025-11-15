import { Gamepad2, Users, Zap, Trophy } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Gamepad2,
    title: "Intense Gameplay",
    description: "Experience fast-paced action with revolutionary mechanics that keep you on the edge.",
    color: "electric-blue",
  },
  {
    icon: Users,
    title: "Multiplayer Battles",
    description: "Team up with friends or compete against players worldwide in epic showdowns.",
    color: "fire-orange",
  },
  {
    icon: Zap,
    title: "Powerful Abilities",
    description: "Unlock and master unique abilities to dominate the battlefield with style.",
    color: "neon-purple",
  },
  {
    icon: Trophy,
    title: "Competitive Ranks",
    description: "Climb the leaderboards and prove you're the ultimate champion of NEXUS.",
    color: "electric-blue",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Game <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes NEXUS the most addictive gaming experience of the year
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-elevated group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
