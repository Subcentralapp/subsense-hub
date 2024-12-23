import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useInvoiceDetails = () => {
  return useQuery({
    queryKey: ['invoicedetails'],
    queryFn: async () => {
      console.log('Fetching invoice details...');
      const { data, error } = await supabase
        .from('invoicedetails')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching invoice details:', error);
        throw error;
      }

      console.log('Fetched invoice details:', data);
      return data || [];
    },
  });
};
