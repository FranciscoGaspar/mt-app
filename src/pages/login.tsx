import { useForm } from '../hooks/useForms';

export default function Login() {
  const { form, updateFormField } = useForm({ email: '', password: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = {
      email: form.email,
      password: form.password,
    };

    console.log(dataToSubmit);
  };

  return (
    <div class="bg-gray-300 flex justify-center items-center h-screen">
      <div class="bg-white p-10 rounded-lg shadow-lg">
        <h1 class="text-center text-2xl font-bold mb-5">Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" value={form.email} onInput={updateFormField('email')} placeholder="Email" class="w-full p-3 mb-5 border rounded-full"/>
          <input type="password" value={form.password} onInput={updateFormField('password')}  placeholder="Password" class="w-full p-3 mb-5 border rounded-full"/>
          <button type='submit' class="bg-blue-500 text-white p-3 rounded-full w-full">Login</button>
        </form>
      </div>
    </div>
  );
}