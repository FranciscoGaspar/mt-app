export default function Login() {
	return (
		<div class="bg-gray-300 flex justify-center items-center h-screen">
			<div class="bg-white p-10 rounded-lg shadow-lg">
				<h1 class="text-center text-2xl font-bold mb-5">Login</h1>
				<form action="">
					<input type="email" placeholder="Email" class="w-full p-3 mb-5 border rounded-full"/>
					<input type="password" placeholder="Password" class="w-full p-3 mb-5 border rounded-full"/>
					<button  class="bg-blue-500 text-white p-3 rounded-full w-full">Login</button>
				</form>
			</div>
		</div>
	);
}