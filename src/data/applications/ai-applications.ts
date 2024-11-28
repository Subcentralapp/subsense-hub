import { Application } from "@/types/application";

export const aiApplications: Application[] = [
  {
    name: "Perplexity",
    price: 20,
    category: "Intelligence Artificielle",
    description: "Moteur de recherche alimenté par l'IA avec sources citées",
    pricing_plans: [
      {
        name: "Pro",
        price: 20,
        features: [
          "Modèles IA avancés",
          "Recherches illimitées",
          "Support prioritaire"
        ]
      }
    ]
  }
];