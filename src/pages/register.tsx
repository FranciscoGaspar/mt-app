import { createResource } from 'solid-js';
import { createSignal } from 'solid-js';

export default function Register() {
	const fetchData = async () => {
		const data = await fetch('https://flagcdn.com/en/codes.json');
		const jsonData =  await data.json();
		return Object.entries(jsonData);
	};

	const [countries] = createResource(fetchData);
	const [selectedCountry, setSelectedCountry] = createSignal('');
	const [filteredCountries, setFilteredCountries] = createSignal([]);

	const handleCountryInput = (e) => {
		const filtered = countries()?.filter((country: any) =>{
			return country[1].toLowerCase().startsWith(e.target.value.toLowerCase());
		}
		);
		setFilteredCountries(filtered);
		setSelectedCountry(e.target.value);
	};

	const handleCountrySelect = (e) => {
		setSelectedCountry(e.target.innerText);
		setFilteredCountries([]);
	};

	const handleCountryClear = () => {
		setSelectedCountry('');
		setFilteredCountries([]);
	};
    
	return (
		<div class="bg-gray-300 flex justify-center items-center h-screen">
			<div class="bg-white p-10 rounded-lg shadow-lg">
				<h1 class="text-center text-2xl font-bold mb-5">Register</h1>
				<form action="">
					<input type="text" placeholder="Name" class="w-full p-3 mb-5 border rounded-full"/>
					<input type="email" placeholder="Email" class="w-full p-3 mb-5 border rounded-full"/>
					<input type="password" placeholder="Password" class="w-full p-3 mb-5 border rounded-full"/>
					<div class='flex'>
						<input type='text' placeholder='Country' class="w-full p-3 mb-5 border rounded-full"
							onInput={handleCountryInput} 
							value={selectedCountry()}
						/>
						<button type='button' class='bg-white p-3 mb-5 border rounded-full w-20 h-full text-center text-red-500 cursor-pointer' onClick={handleCountryClear}>Clear</button>
					</div>
					{filteredCountries().length > 0 && (
						<ul class="bg-white border border-gray-300 absolute rounded-lg max-w-max">
							{filteredCountries().map((country) => (
								<li
									class="p-2 cursor-pointer hover:bg-gray-100"
									onClick={handleCountrySelect}
								>
									<div class='flex items-center'>
										<img
											src={`https://flagcdn.com/16x12/${country[0]}.png`}
											width="16"
											height="12"
											alt="Image"></img>
										<div class='ml-2'>
											{country[1]}
										</div>
									</div>
								</li>
							))}
						</ul>
					)}
					<button  type='submit' class="bg-blue-500 text-white p-3 rounded-full w-full">Login</button>
				</form>
			</div>
		</div>
	);
}