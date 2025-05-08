
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: 499,
      description: "Perfect for small business websites",
      features: [
        "Responsive Design",
        "5 Pages",
        "Basic SEO",
        "Contact Form",
        "1 Month Support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: 999,
      description: "Ideal for growing businesses",
      features: [
        "Responsive Design",
        "10 Pages",
        "Advanced SEO",
        "Contact Form",
        "Content Management System",
        "E-commerce Integration",
        "3 Months Support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 2499,
      description: "For large businesses with complex needs",
      features: [
        "Responsive Design",
        "Unlimited Pages",
        "Advanced SEO",
        "Custom Functionality",
        "E-commerce Integration",
        "Database Integration",
        "API Development",
        "6 Months Support",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing <span className="gradient-text">Plans</span>
            </h1>
            <p className="text-gray-700">
              Choose the perfect plan for your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-2 border-navy-500 relative animate-fade-in delay-100"
                    : "animate-fade-in"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.highlighted && (
                  <Badge
                    className="absolute top-0 right-0 m-4 bg-navy-500 text-white"
                    variant="secondary"
                  >
                    Popular
                  </Badge>
                )}
                <div
                  className={`p-6 ${
                    plan.highlighted ? "bg-navy-50" : "bg-white"
                  }`}
                >
                  <h3 className="text-xl font-bold text-navy-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 ml-1">/ project</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <Button
                    className={
                      plan.highlighted ? "btn-primary w-full" : "btn-outline w-full"
                    }
                  >
                    Get Started
                  </Button>
                </div>
                <div className="border-t border-gray-200 p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto text-center mt-16 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Need Custom Development?</h2>
            <p className="text-gray-700 mb-8">
              Have a project that requires specialized solutions? Contact me for a
              custom quote tailored to your specific needs.
            </p>
            <Button className="btn-primary">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
