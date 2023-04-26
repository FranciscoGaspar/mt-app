import { For, createResource, createSignal } from 'solid-js';
import { FaRegularHeart, FaRegularComments, FaRegularPaperPlane } from 'solid-icons/fa';
import Avatar from 'solid-boring-avatars';



export default function Chat() {
	const fetchData = async () => {
		const data = await fetch('http://127.0.0.1:3000/api/post');
		return data.json();
	};

	const [posts, {mutate, refetch}] = createResource(fetchData);

	const [newMessage, setNewMessage] = createSignal('');

	const handleLike = (messageId: string) => {
		//logic for handling likes
		console.log(messageId);
	};

	const handleComment = (messageId: string) => {
		// logic for handling comments
		console.log(messageId);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		mutate((posts) => [...posts, { message: 'New Message'}]);
	};

	return (
		<div class={'w-screen h-screen bg-neutral-700'}>
			<div class="flex flex-col items-center gap-6 w-full pt-6">
				{ posts.loading && (
					<div role="status">
						<svg aria-hidden="true" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
							<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
						</svg>
						<span class="sr-only">Loading...</span>
					</div>
				)
				}
				{ posts.error && (
					<div>Error....</div>
				)}
				{ posts() && <For each={posts()}>{(post) => (
					<div class="bg-gray-100 rounded-3xl shadow-md w-10/12">
						<div class="flex flex-row-reverse w-full p-2">
							<div class="flex flex-col justify-center gap-2 items-center w-full">
								<span class="flex text-gray-600 text-sm truncate">{post.author}</span>
								<span class="flex text-gray-500 text-xs">{post.createdAt}</span>
							</div>
							<div class="border-gray-300 rounded-full border-4 -m-6">
								<Avatar
									size={100}
									name={post.author}
									variant="marble"
									colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
								/>
							</div>
						</div>
						<div class="bg-gray-200 rounded-b-3xl p-6 break-words">
							<p class=" text-gray-800">{post.message}</p>
							<div class="flex flex-row-reverse gap-2">
								<button class="bg-gray-400 hover:bg-gray-300 text-gray-700 font-semibold rounded-full p-4" onClick={() => handleLike(post._id)}>
									<FaRegularHeart size={18} />
								</button>
								<button class="bg-gray-400 hover:bg-gray-300 text-gray-700 font-semibold rounded-full p-4" onClick={() => handleComment(post._id)}>
									<FaRegularComments size={18}/>
								</button>
							</div>
						</div>
					</div>
				)}</For>
				}
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
