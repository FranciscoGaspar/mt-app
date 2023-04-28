import { createResource, createSignal } from 'solid-js';
import { useForm } from '../hooks/useForms';



export default function Register() {
  const fetchData = async () => {
    const data = await fetch('https://flagcdn.com/en/codes.json');
    const jsonData =  await data.json();
    return Object.entries(jsonData);
  };

  const [ countries ] = createResource(fetchData);
  const [ filteredCountries, setFilteredCountries ] = createSignal([]);
  const { form, setForm, updateFormField, clearFields } = useForm({ name: '', email: '', password: '', country:''});

  const handleCountryInput = (event) => {
    const filtered = countries()?.filter((country: any) =>{
      return country[1].toLowerCase().startsWith(event.target.value.toLowerCase());
    });
    setFilteredCountries(filtered);
    updateFormField('country');
  };

  const handleCountrySelect = (event) => {
    setFilteredCountries([]);
    setForm({
      ['country']: event.target.innerText
    });
  };

  const handleReset = () => {
    setFilteredCountries([]);
    clearFields(['name', 'email', 'password', 'country']);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = {
      name: form.name,
      email: form.email,
      password: form.password,
      country: form.country
    };
    console.log(dataToSubmit);
  };
    
  return (
    <div class="bg-gray-300 flex justify-center items-center h-screen">
      <div class="bg-white p-10 rounded-lg shadow-lg">
        <h1 class="text-center text-2xl font-bold mb-5">Register</h1>
        <form onSubmit={handleSubmit}>
          <input name='name' value={form.name} onInput={updateFormField('name')} type="text" placeholder="Name" class="w-full p-3 mb-5 border rounded-full"/>
          <input name='email' value={form.email} onInput={updateFormField('email')} type="email" placeholder="Email" class="w-full p-3 mb-5 border rounded-full"/>
          <input name='password' value={form.password} onInput={updateFormField('password')} type="password" placeholder="Password" class="w-full p-3 mb-5 border rounded-full"/>
          <div class='flex'>
            <input name='country' type='text' placeholder='Country' class="w-full p-3 mb-5 border rounded-full"
              onInput={handleCountryInput}
              value={form.country}
            />
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
          <div class='flex flex-row-reverse'>
            <button type='button' class='bg-white border rounded-full w-20 text-center text-red-500 ml-2' onClick={handleReset}>Reset</button>
            <button type='submit' class="bg-blue-500 text-white p-3 rounded-full w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}