// app/chats/page.tsx
import { Header } from "@/components/layout/Header";
import { Search, Send } from "lucide-react";

// Types for chat interface
type Conversation = {
  name: string;
  avatar: string;
  lastMessage: string;
  active?: boolean;
};

type Message = {
  from: 'me' | 'them';
  text: string;
};

type Chat = {
  name: string;
  messages: Message[];
};

const conversations: Conversation[] = [
  { name: "Alice Johnson", avatar: "AJ", lastMessage: "Doing well, just working on a project.", active: true },
  { name: "Bob Williams", avatar: "BW", lastMessage: "Can you check the latest dataset?" },
  { name: "Charlie Brown", avatar: "CB", lastMessage: "I've completed the review." },
  { name: "Diana Prince", avatar: "DP", lastMessage: "See you at the meeting tomorrow." },
  { name: "Ethan Hunt", avatar: "EH", lastMessage: "Got it, thanks!" }
];

const currentChat: Chat = {
  name: "Alice Johnson",
  messages: [
    { from: 'them', text: "Hey there! How's it going?" },
    { from: 'me', text: "Hi Alice! I'm good, thanks. How about you?" },
    { from: 'them', text: "Doing well, just working on a project." }
  ]
};

export default function ChatsPage() {
  return (
    <>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Conversations List */}
        <aside className="w-80 flex-shrink-0 border-r bg-card flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-foreground">Conversations</h2>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input type="text" placeholder="Search..." className="w-full bg-background border rounded-md pl-10 pr-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map(convo => (
              <div key={convo.name} className={`flex items-center gap-3 p-4 border-b cursor-pointer ${convo.active ? 'bg-background' : 'hover:bg-background/50'}`}>
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-muted-foreground flex-shrink-0">{convo.avatar}</div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-semibold text-foreground truncate">{convo.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{convo.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-background">
          <div className="flex items-center p-4 border-b h-16 bg-card">
            <h2 className="text-lg font-semibold text-foreground">{currentChat.name}</h2>
          </div>
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {currentChat.messages.map((msg, index) => (
              <div key={index} className={`flex items-end gap-2 ${msg.from === 'me' ? 'justify-end' : ''}`}>
                {msg.from === 'them' && <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-muted-foreground flex-shrink-0">AJ</div>}
                <div className={`max-w-md p-3 rounded-lg ${msg.from === 'me' ? 'bg-blue-500 text-white' : 'bg-card text-card-foreground'}`}>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t bg-card">
            <div className="relative">
              <input type="text" placeholder="Type a message..." className="w-full bg-background border rounded-md pl-4 pr-14 py-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2.5">
                <Send size={18} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}