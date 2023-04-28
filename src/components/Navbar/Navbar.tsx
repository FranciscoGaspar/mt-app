import { createSignal } from 'solid-js';
import { Link } from '@solidjs/router';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <nav class="bg-gray-100 py-4 sticky top-0">
      <div class="container mx-auto flex justify-between item">
        <Link class="text-lg font-bold text-gray-800" href="/">
          My App
        </Link>
        <div>
          {isLoggedIn() ? (
            <>
              <Link
                href='/posts'
                onClick={handleLogout}
                class="bg-white text-gray-800 py-3 px-4 rounded-full mr-2"
              >
                Logout
              </Link>
              <Link
                class="bg-blue-500 text-white py-3 px-4 rounded-full"
                href="/posts"
              >
                Add new message
              </Link>
              <Link
                class="bg-blue-500 text-white py-3 px-4 rounded-full ml-2"
                href="/my-comments"
              >
                Check my comments
              </Link>
            </>
          ) : (
            <>
              <Link
                class="bg-blue-500 text-white py-3 px-4 rounded-full mr-2"
                onClick={handleLogin}
                href='/login'
              >
								Login
              </Link>
              <Link
                class="bg-blue-500 text-white py-3 px-4 rounded-full mr-2"
                onClick={handleLogin}
                href='/register'
              >
								Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
