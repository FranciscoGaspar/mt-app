import { createSignal } from "solid-js";
import { FaRegularHeart, FaRegularComments, FaRegularPaperPlane } from "solid-icons/fa";
import Avatar from "solid-boring-avatars";


export default function Chat() {
  const [messages, setMessages] = createSignal([
    {
      id: 1,
      author: "John Doe",
      content: "Hello, how are you?",
      likes: 5,
      comments: [],
      time: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Heyyy!",
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
    <div class={`w-screen h-screen bg-neutral-700`}>
        <div class="flex flex-col items-center gap-4 w-full">
            {messages().map((message) => (
                <div class="bg-gray-100 p-4 rounded-3xl shadow-md w-10/12">
                    <div class="flex items-center justify-between mb-2">
                    <Avatar
                      size={60}
                      name={message.author}
                      variant="marble"
                      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                    />
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-gray-600 text-sm">{message.author}</span>
                        <span class="text-gray-500 text-xs">{message.time}</span>
                    </div>
                    <p class="text-gray-800 text-sm">{message.content}</p>
                    <div class="flex flex-row-reverse mt-2 gap-2 h-10">
                        <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-full" onClick={() => handleLike(message.id)}>
                          <FaRegularHeart size={18} />
                        </button>
                        <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-full" onClick={() => handleComment(message.id)}>
                          <FaRegularComments size={18}/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
        <form onSubmit={handleSubmit} class="fixed bottom-0 w-full p-4 flex">
        <div class="relative flex-1">
          <input
            type="text"
            value={newMessage()}
            onInput={(event) => setNewMessage(event.target.value)}
            placeholder="Type a message..."
            class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" class="absolute right-0 top-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full h-full border border-gray-300">
            <FaRegularPaperPlane size={18}/>
          </button>
        </div>
      </form>
    </div>
  );
}
