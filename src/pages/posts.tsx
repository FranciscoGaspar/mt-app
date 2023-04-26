import { For, createResource } from 'solid-js';
import PostCard from '../components/PostCard/PostCard';
import PostLoadingSkeleton from '../components/Skeletons/PostLoadingSkeleton';
import SubmitBar from '../components/SubmitBar/SubmitBar';

export default function Posts() {
	const fetchData = async () => {
		const data = await fetch('http://127.0.0.1:3000/api/post');
		return data.json();
	};

	const [posts, {mutate}] = createResource(fetchData);

	return (
		<div class={'bg-neutral-700'}>
			<div class="flex flex-col items-center gap-6 w-full h-full pt-6">
				{ 
					posts.loading && (
						<>
							<PostLoadingSkeleton />
							<PostLoadingSkeleton />
							<PostLoadingSkeleton />
						</>  
					)
				}
				{ 
					posts.error && (
						<div>Error....</div>
					)
				}
				{ 
					posts() && (
						<For each={posts()} fallback={<PostLoadingSkeleton/>}>
							{(post) => ( <PostCard post={post}></PostCard>)}
						</For>
					)
				}
			</div>
			<SubmitBar mutate={mutate}></SubmitBar>
		</div>
	);
}