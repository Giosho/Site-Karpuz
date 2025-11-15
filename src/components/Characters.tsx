import { Card } from "./ui/card";
import character1 from "@/assets/character-1.jpg";
import character2 from "@/assets/character-2.jpg";
import character3 from "@/assets/character-3.jpg";

const characters = [
  {
    name: "Cyber Blade",
    role: "Assault",
    description: "Lightning-fast warrior with deadly precision and tech enhancements.",
    image: character1,
    color: "electric-blue",
  },
  {
    name: "Inferno Mage",
    role: "Support",
    description: "Master of mystical fire arts, controlling the battlefield with raw power.",
    image: character2,
    color: "fire-orange",
  },
  {
    name: "Nova Scout",
    role: "Recon",
    description: "Advanced tech specialist with holographic abilities and tactical awareness.",
    image: character3,
    color: "neon-purple",
  },
];

const Characters = () => {
  return (
    <section id="characters" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Champion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master unique characters with distinct abilities and playstyles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-elevated group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{character.name}</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                    {character.role}
                  </span>
                </div>
                <p className="text-muted-foreground">{character.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            [Character templates ready - Add your own character images here]
          </p>
        </div>
      </div>
    </section>
  );
};

export default Characters;
