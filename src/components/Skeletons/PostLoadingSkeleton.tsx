import { FaRegularHeart, FaRegularComments, FaSolidUser } from 'solid-icons/fa';

export default function PostLoadingSkeleton() {
	return (
		<div class="animate-pulse bg-gray-100 rounded-3xl shadow-md w-10/12">
			<div class="flex flex-row-reverse w-full p-2">
				<div class="flex flex-col justify-center gap-2 items-center w-full">
					<div class="h-2.5 bg-gray-300 rounded-full w-60 mb-2.5 mx-auto"></div>
					<div class="h-2.5 bg-gray-300 rounded-full w-40 mb-2.5 mx-auto"></div>
				</div>
				<div class='bg-gray-200 rounded-full p-5 m-2'>
					<FaSolidUser size={40}></FaSolidUser>
				</div>
			</div>
			<div class="bg-gray-200 rounded-b-3xl p-6 break-words">
				<div class="h-2.5 bg-gray-300 rounded-full  max-w-[80%] mb-2.5 mx-auto"></div>
				<div class="h-2.5 bg-gray-300 rounded-full  max-w-[70%] mb-2.5 mx-auto"></div>
				<div class="h-2.5 bg-gray-300 rounded-full  max-w-[75%] mb-2.5 mx-auto"></div>
				<div class="flex flex-row-reverse gap-2">
					<button class="bg-gray-400 hover:bg-gray-300 text-gray-700 font-semibold rounded-full p-4">
						<FaRegularHeart size={18} />
					</button>
					<button class="bg-gray-400 hover:bg-gray-300 text-gray-700 font-semibold rounded-full p-4">
						<FaRegularComments size={18}/>
					</button>
				</div>
			</div>
		</div>
	);
}