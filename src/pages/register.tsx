import { createResource, createSignal } from 'solid-js';
import { useForm } from '../hooks/useForms';
import toast from 'solid-toast';
import { Link, useNavigate } from '@solidjs/router';

export default function Register() {
  const fetchData = async () => {
    const data = await fetch('https://flagcdn.com/en/codes.json');
    const jsonData =  await data.json();
    return Object.entries(jsonData);
  };

  const [ countries ] = createResource(fetchData);
  const [ filteredCountries, setFilteredCountries ] = createSignal([]);
  const { form, setForm, updateFormField, clearFields } = useForm({ name: '', email: '', password: '', country:''});
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSubmit = {
      name: form.name,
      email: form.email,
      password: form.password,
      country: form.country
    };
    const result = await fetch('http://localhost:3000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSubmit)
    });

    const json = await result.json();
    if(json._id) {
      toast.success('User created successfully');
      navigate('/', { replace: true });
    } else {
      toast.error('Error creating user');
    }
  };
    
  return (
    <div class="bg-gray-300 flex justify-center items-center h-screen">
      <div class="bg-white p-10 rounded-lg shadow-lg">
        <h1 class="text-center text-2xl font-bold mb-5">Register</h1>
        <form onSubmit={handleSubmit}>
          <input required name='name' value={form.name} onInput={updateFormField('name')} type="text" placeholder="Name (required)" class="w-full p-3 mb-5 border rounded-full"/>
          <input required name='email' value={form.email} onInput={updateFormField('email')} type="email" placeholder="Email (required)" class="w-full p-3 mb-5 border rounded-full"/>
          <input required name='password' value={form.password} onInput={updateFormField('password')} type="password" placeholder="Password (required)" class="w-full p-3 mb-5 border rounded-full"/>
          <div class='flex'>
            <input required name='country' type='text' placeholder='Country (required)' class="w-full p-3 mb-5 border rounded-full"
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
            <button type='submit' class="bg-blue-500 text-white p-3 rounded-full w-full">Register</button>

          </div>
        </form>
        <div class='flex items-center justify-center flex-row-reverse mt-10'>
          <Link href="/login" class="text-blue-500">Login instead? Click here!</Link>
        </div>
      </div>
    </div>
  );
}