import { Link, useNavigate } from '@solidjs/router';
import { useForm } from '../hooks/useForms';
import toast from 'solid-toast';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { form, updateFormField } = useForm({ email: '', password: ''});
  const navigate = useNavigate();
  const {handleLogin} = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSubmit = {
      username: form.email,
      password: form.password,
    };

    const result = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSubmit)
    });

    const json = await result.json();

    if(json.access_token) {
      handleLogin(json.access_token);
      navigate('/', { replace: true });
      toast.success('Logged in successfully');
    } else {
      toast.error('Please check your credentials and try again');
    }
  };

  return (
    <div class="bg-gray-300 flex justify-center items-center h-screen">
      <div class="bg-white p-10 rounded-lg shadow-lg">
        <h1 class="text-center text-2xl font-bold mb-5">Login</h1>
        <form onSubmit={handleSubmit}>
          <input required type="email" value={form.email} onInput={updateFormField('email')} placeholder="Email" class="w-full p-3 mb-5 border rounded-full"/>
          <input required type="password" value={form.password} onInput={updateFormField('password')}  placeholder="Password" class="w-full p-3 mb-5 border rounded-full"/>
          <button type='submit' class="bg-blue-500 text-white p-3 rounded-full w-full">Login</button>
        </form>

        <div class='flex items-center justify-center flex-row-reverse mt-10'>
          <Link href="/register" class="text-blue-500">Register instead? Click here!</Link>
        </div>
      </div>
    </div>
  );
}