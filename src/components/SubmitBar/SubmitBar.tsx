import { createSignal } from 'solid-js';
import { FaRegularPaperPlane } from 'solid-icons/fa';
import { Post } from '../../api/types/Post';

export type Props = {
    mutate: (posts: any) => void;
}

export default function SubmitBar({mutate}: Props) {
	const [newMessage, setNewMessage] = createSignal('');

	const handleSubmit = (event) => {
		event.preventDefault();
		mutate((posts: Post[]) => [{ message: 'New Message'}, ...posts]);
	};
    
	return (
		<form onSubmit={handleSubmit} class="sticky bottom-0 w-full p-4 flex">
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
	);
}