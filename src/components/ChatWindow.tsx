
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
    
    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! Our team will get back to you soon.",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <>
      <Button 
        className="fixed bottom-4 right-4 z-50 rounded-full w-14 h-14 bg-[#f97316] hover:bg-[#1a365d] shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
      
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
          <div className="bg-[#1a365d] text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Support Chat</h3>
          </div>
          
          <div className="h-80 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  msg.isUser 
                    ? 'bg-[#f97316] text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f97316]"
              />
              <Button 
                onClick={handleSend}
                className="bg-[#f97316] hover:bg-[#1a365d]"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWindow;
