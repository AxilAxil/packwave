
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HelpWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        className="rounded-full w-14 h-14 bg-[#f97316] hover:bg-[#ea580c] shadow-lg"
        onClick={() => alert("Support chat will be implemented in the next phase")}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default HelpWidget;
