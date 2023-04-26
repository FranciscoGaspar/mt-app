
import { FaRegularHeart, FaRegularComments } from 'solid-icons/fa';
import Avatar from 'solid-boring-avatars';
import { Post } from '../../api/types/Post';

type Props = {
    post: Post
}

export default function PostCard({post}:Props) {
	const handleLike = (messageId: string) => {
		//logic for handling likes
		console.log(messageId);
	};

	const handleComment = (messageId: string) => {
		// logic for handling comments
		console.log(messageId);
	};
    
	return (
		<div class="bg-gray-100 rounded-3xl shadow-md w-10/12">
			<div class="flex flex-row-reverse w-full">
				<div class="flex flex-col justify-center gap-2 items-center w-full">
					<span class="flex text-gray-600 text-sm truncate">{post.author}</span>
					<span class="flex text-gray-500 text-xs">{post.createdAt}</span>
				</div>
				<div class="border-gray-300 rounded-full border-4 m-4">
					<Avatar
						size={80}
						name={post.author}
						variant="sunset"
						colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
					/>
				</div>
			</div>
			<div class="bg-gray-200 rounded-b-3xl p-6 break-words">
				<p class=" text-gray-800">{post.message}</p>
				<div class="flex flex-row-reverse gap-2">
					<button class="bg-gray-400 hover:bg-gray-300 text-gray-700 font-semibold rounded-full p-4" onClick={() => handleLike(post._id)}>
						<FaRegularHeart size={20} />
					</button>
					<button class="bg-gray-400 hover:bg-gray-300 text-gray-700 font-semibold rounded-full p-4" onClick={() => handleComment(post._id)}>
						<FaRegularComments size={20}/>
					</button>
				</div>
			</div>
		</div>
	);
}