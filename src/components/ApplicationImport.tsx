import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { handleApplicationImport } from "@/services/applications/importService";

const ApplicationImport = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImport = async () => {
    try {
      setIsLoading(true);
      await handleApplicationImport(text, toast);
      setText("");
    } catch (error) {
      console.error("Erreur lors de l'import:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'import",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Importer des applications</h2>
        <p className="text-sm text-muted-foreground">
          Format: nom,prix,catégorie,description (une application par ligne)
        </p>
        <div className="space-y-2">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Netflix,15.99,Streaming,Service de streaming vidéo&#10;Spotify,9.99,Musique,Service de streaming musical"
            className="min-h-[200px]"
          />
          <Button 
            onClick={handleImport} 
            disabled={!text.trim() || isLoading}
            className="w-full"
          >
            {isLoading ? "Import en cours..." : "Importer"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationImport;