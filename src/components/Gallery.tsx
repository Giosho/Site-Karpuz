import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";

const Gallery = () => {
  const screenshots = [
    {
      src: screenshot1,
      alt: "Epic battle scene with explosions and action",
      title: "Intense Combat",
    },
    {
      src: screenshot2,
      alt: "Futuristic alien cityscape at night",
      title: "Explore Vast Worlds",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Game <span className="bg-gradient-secondary bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in stunning visuals and breathtaking environments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-2xl font-bold">{screenshot.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            [Image templates ready - Add your own screenshots here]
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
