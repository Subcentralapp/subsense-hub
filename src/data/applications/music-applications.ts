import { Application } from "@/types/application";

export const musicApplications: Application[] = [
  {
    name: "Deezer Premium",
    price: 10.99,
    category: "Streaming musical",
    description: "Service de streaming musical",
    pricing_plans: [
      {
        name: "Gratuit",
        price: 0,
        features: ["Avec publicités", "Qualité standard", "Mode aléatoire"]
      },
      {
        name: "Premium",
        price: 10.99,
        features: ["Sans publicité", "Haute qualité", "Mode hors ligne", "Flow personnalisé"]
      },
      {
        name: "Famille",
        price: 17.99,
        features: ["6 comptes", "Sans publicité", "Contrôle parental", "Mode hors ligne"]
      }
    ],
    features: ["Musique illimitée", "Playlists personnalisées", "Lyrics en direct", "Mode hors ligne"],
    pros: ["Large catalogue", "Qualité audio", "Interface intuitive", "Recommandations pertinentes"],
    cons: ["Certains artistes manquants", "App mobile perfectible", "Prix similaire concurrence"],
    website_url: "https://www.deezer.com",
    logo_url: "https://logo.clearbit.com/deezer.com"
  },
  { 
    name: "Apple Music", 
    price: 10.99, 
    category: "Streaming Musical", 
    description: "Service de streaming musical d'Apple",
    pricing_plans: [
      {
        name: "Étudiant",
        price: 5.99,
        features: ["Audio sans perte", "Audio spatial", "Lyrics en temps réel", "Sans publicité"]
      },
      {
        name: "Individuel",
        price: 10.99,
        features: ["Audio sans perte", "Audio spatial", "Lyrics en temps réel", "Sans publicité"]
      },
      {
        name: "Famille",
        price: 16.99,
        features: ["Jusqu'à 6 utilisateurs", "Audio sans perte", "Audio spatial", "Contrôle parental"]
      }
    ],
    features: ["Audio sans perte", "Audio spatial", "Lyrics en temps réel", "Radio en direct"],
    pros: ["Qualité audio supérieure", "Intégration écosystème Apple", "Bibliothèque personnelle illimitée", "Radio Apple Music"],
    cons: ["Interface moins intuitive", "Moins social que Spotify", "Recommandations moins précises", "Nécessite iTunes sur Windows"],
    website_url: "https://www.apple.com/apple-music/",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1920px-Apple_Music_logo.svg.png"
  }
];