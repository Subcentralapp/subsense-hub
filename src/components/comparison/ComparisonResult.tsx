import { Check, Trophy, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Application } from "@/types/application";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ComparisonResultProps {
  app1: Application | null;
  app2: Application | null;
  winner: Application | null;
  onNewComparison: () => void;
}

export const ComparisonResult = ({
  app1,
  app2,
  winner,
  onNewComparison,
}: ComparisonResultProps) => {
  const renderPricingPlans = (app: Application) => {
    if (!app.pricing_plans?.length) {
      return (
        <div className="p-4 bg-neutral-50 rounded-lg">
          <p className="text-sm text-gray-500">Un seul plan disponible : {app.price}€/mois</p>
        </div>
      );
    }
    
    return (
      <div className="space-y-4">
        {app.pricing_plans.map((plan: any, index: number) => (
          <div key={index} className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-primary">{plan.name}</h4>
              <p className="font-bold text-lg">{plan.price}€<span className="text-sm font-normal text-gray-500">/mois</span></p>
            </div>
            <ul className="mt-3 space-y-2">
              {plan.features?.map((feature: string, idx: number) => (
                <li key={idx} className="text-sm flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderAdvantagesDisadvantages = (app: Application) => (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div>
        <h4 className="font-medium mb-2 text-green-600">Avantages</h4>
        <ul className="space-y-2">
          {app.pros?.map((pro: string, idx: number) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-2 text-red-600">Inconvénients</h4>
        <ul className="space-y-2">
          {app.cons?.map((con: string, idx: number) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              <X className="h-4 w-4 text-red-500 flex-shrink-0" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Comparaison des Services</h2>
        <Button variant="outline" onClick={onNewComparison}>
          Nouvelle comparaison
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[app1, app2].map((app, index) => app && (
          <div
            key={`app-${index}`}
            className="p-6 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              {app.logo_url && (
                <img 
                  src={app.logo_url} 
                  alt={`Logo ${app.name}`} 
                  className="w-12 h-12 object-contain"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold">{app.name}</h3>
                {app.website_url && (
                  <a 
                    href={app.website_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Visiter le site
                  </a>
                )}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-4">{app.description}</p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="pricing">
                  <AccordionTrigger>Plans tarifaires</AccordionTrigger>
                  <AccordionContent>
                    {renderPricingPlans(app)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {renderAdvantagesDisadvantages(app)}
          </div>
        ))}
      </div>

      {winner && (
        <div className="bg-primary/10 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">Service Recommandé</h3>
          </div>
          <p className="text-gray-700">
            Basé sur notre analyse comparative, nous recommandons{" "}
            <span className="font-semibold text-primary">{winner.name}</span> pour les raisons suivantes :
          </p>
          <ul className="mt-3 space-y-2">
            {winner.pros?.map((pro, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                {pro}
              </li>
            ))}
          </ul>
          
          {winner.pricing_plans && winner.pricing_plans.length > 0 && (
            <div className="mt-4">
              <p className="font-medium mb-2">Plans disponibles :</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {winner.pricing_plans.map((plan: any, index: number) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="font-medium">{plan.name}</p>
                    <p className="text-primary font-bold">{plan.price}€/mois</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};