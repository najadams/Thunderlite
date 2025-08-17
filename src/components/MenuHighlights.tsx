import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

const menuItems = [
  {
    id: 1,
    name: "Garden Symphony",
    description: "Fresh seasonal vegetables with herb-infused quinoa and citrus vinaigrette",
    price: "$28",
    image: "https://images.unsplash.com/photo-1507844090982-e6e9452ea68d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjBpbmdyZWRpZW50cyUyMGNvbG9yZnVsJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTU0MjM3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Artisan Pasta",
    description: "Handcrafted linguine with wild mushrooms and truffle oil",
    price: "$32",
    image: "https://images.unsplash.com/photo-1613634326309-7fe54ed25ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBwYXN0YSUyMGRpc2glMjByZXN0YXVyYW50JTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1NTQyMzc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Oceanic Delight",
    description: "Grilled salmon with roasted vegetables and lemon herb butter",
    price: "$36",
    image: "https://images.unsplash.com/photo-1704007573697-6a516da421ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwZmluZSUyMGRpbmluZyUyMHBsYXRlZHxlbnwxfHx8fDE3NTUzNjM4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "Decadent Finale",
    description: "Rich chocolate soufflé with vanilla bean ice cream and berry compote",
    price: "$18",
    image: "https://images.unsplash.com/photo-1675670515307-753fea18fc3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZWxlZ2FudCUyMHBsYXRpbmclMjByZXN0YXVyYW50fGVufDF8fHx8MTc1NTQyMzc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function MenuHighlights() {
  return (
    <section id="menu" className="py-20 bg-white-neutral bottom-wave-green relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 fade-in-up" style={{ color: 'var(--neutral-dark)' }}>
            Signature Creations
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-1">
            Each dish is thoughtfully crafted with the finest ingredients, 
            combining traditional techniques with innovative culinary artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {menuItems.map((item, index) => {
            const delayClass = index === 0 ? 'fade-in-up-delay-1' : 
                              index === 1 ? 'fade-in-up-delay-2' : 
                              index === 2 ? 'fade-in-up-delay-3' : 'bounce-in';
            return (
            <Card key={item.id} className={`group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white fade-in-up ${delayClass}`}>
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--neutral-dark)' }}>
                    {item.name}
                  </h3>
                  <span className="font-display text-lg font-bold" style={{ color: 'var(--green-dark)' }}>
                    {item.price}
                  </span>
                </div>
                
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 relative z-10">
          <button className="gradient-button-violet text-white font-body text-base font-medium px-8 py-3 rounded-full border-0 hover:opacity-90 transition-all transform hover:scale-105 shadow-lg fade-in-up fade-in-up-delay-3">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}