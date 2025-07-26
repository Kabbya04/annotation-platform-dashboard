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

// Populated the placeholder data for the conversations list.
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
        <aside className="w-80 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-slate-900">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Conversations</h2>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
              <input type="text" placeholder="Search..." className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md pl-10 pr-4 py-2 text-sm focus:ring-violet-500 focus:border-violet-500" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map(convo => (
              <div key={convo.name} className={`flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-800 cursor-pointer ${convo.active ? 'bg-slate-100 dark:bg-slate-800/50' : 'hover:bg-slate-50 dark:hover:bg-slate-800/30'}`}>
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500 dark:text-slate-300 flex-shrink-0">{convo.avatar}</div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-semibold text-slate-900 dark:text-white truncate">{convo.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{convo.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center p-4 border-b border-slate-200 dark:border-slate-800 h-16">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{currentChat.name}</h2>
          </div>
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {currentChat.messages.map((msg, index) => (
              <div key={index} className={`flex items-end gap-2 ${msg.from === 'me' ? 'justify-end' : ''}`}>
                {msg.from === 'them' && <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500 dark:text-white flex-shrink-0">AJ</div>}
                <div className={`max-w-md p-3 rounded-lg ${msg.from === 'me' ? 'bg-violet-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'}`}>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="relative">
              <input type="text" placeholder="Type a message..." className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md pl-10 pr-4 py-3 text-sm focus:ring-violet-500 focus:border-violet-500" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white rounded-full p-2.5">
                <Send size={18} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}