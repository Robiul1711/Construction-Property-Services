import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const AiAssistantCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <MessageCircle size={18} className="text-gray-900" />
              </div>
              <span className="font-medium">ChatBot & Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-800 rounded-full p-1 transition cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-3 h-64 overflow-y-auto bg-gray-50">
            <div className="text-sm text-gray-700 bg-white p-3 rounded-lg shadow-sm">
              Hi mate! How can I help you?
            </div>
            <div className="text-sm text-theme-primary bg-blue-50 p-3 rounded-lg">
              Can you tell me about your services?
            </div>
            <div className="text-sm text-gray-700 bg-white p-3 rounded-lg shadow-sm">
              Of course! We design modern residential and commercial spaces with
              focus on quality and functionality.
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-gray-900"
              />
              <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800 transition">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gray-900 text-white rounded-full shadow-2xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
};

export default AiAssistantCard;

// import { Bot, Send } from "lucide-react";

// const AiAssistantCard = () => {
//   return (
//     <div className="w-[260px] sm:w-[280px] rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center gap-2 px-4 py-3 border-b bg-gray-50">
//         <div className="w-8 h-8 rounded-full bg-[#81B4E2] flex items-center justify-center">
//           <Bot size={18} className="text-white" />
//         </div>
//         <p className="text-sm font-medium text-gray-800">
//           AI Assistant
//         </p>
//       </div>

//       {/* Messages */}
//       <div className="px-4 py-3 space-y-2">
//         <div className="bg-gray-100 text-gray-700 text-xs rounded-xl px-3 py-2 w-fit max-w-[85%]">
//           👋 Hi! How can I help you today?
//         </div>

//         <div className="bg-[#81B4E2] text-white text-xs rounded-xl px-3 py-2 w-fit max-w-[85%] ml-auto">
//           I need design ideas
//         </div>

//         <div className="bg-gray-100 text-gray-700 text-xs rounded-xl px-3 py-2 w-fit max-w-[85%]">
//           Sure! I can help with layouts, colors, and space planning ✨
//         </div>
//       </div>

//       {/* Input */}
//       <div className="flex items-center gap-2 px-3 py-2 border-t">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           className="flex-1 text-xs px-3 py-2 rounded-full bg-gray-100 outline-none"
//         />
//         <button className="w-8 h-8 rounded-full bg-[#81B4E2] flex items-center justify-center">
//           <Send size={14} className="text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AiAssistantCard;
