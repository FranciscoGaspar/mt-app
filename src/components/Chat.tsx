import { createSignal } from "solid-js";

export default function Chat() {
  const [messages, setMessages] = createSignal([
    {
      id: 1,
      author: "XXXXXXXX",
      content: "Hello, how are you?",
      likes: 5,
      comments: [],
      time: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      author: "YYYYYYYY",
      content: "I'm doing well, thanks for asking!",
      likes: 2,
      comments: [],
      time: new Date().toLocaleTimeString(),
    },
  ]);

  const [newMessage, setNewMessage] = createSignal("");

  const handleLike = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, likes: message.likes + 1 };
        }
        return message;
      })
    );
  };

  const handleComment = (messageId) => {
    // logic for handling comments
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div class={`w-screen h-screen bg-gray-800`}>
        <div class="flex flex-col items-center gap-4 w-full">
            {messages().map((message) => (
                <div key={message.id} class="bg-gray-100 p-4 rounded-lg shadow-md w-10/12">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-gray-600 text-sm">{message.author}</span>
                        <span class="text-gray-500 text-xs">{message.time}</span>
                    </div>
                    <p class="text-gray-800 text-sm">{message.content}</p>
                    <div class="flex items-center justify-between mt-2">
                        <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded" onClick={() => handleLike(message.id)}>
                            Like <span class="ml-2 text-xs">({message.likes})</span>
                        </button>
                        <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded" onClick={() => handleComment(message.id)}>
                            Comment <span class="ml-2 text-xs">({message.comments.length})</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
        <form onSubmit={handleSubmit} class="fixed bottom-0 w-full p-4 flex">
            <input
            type="text"
            value={newMessage()}
            onInput={(event) => setNewMessage(event.target.value)}
            placeholder="Type a message..."
            class="w-full p-2 rounded-l-md border-gray-300 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Send
            </button>
        </form>
    </div>
  );
}
