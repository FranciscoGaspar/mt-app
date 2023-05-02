import { Link } from '@solidjs/router';
import { Show} from 'solid-js';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const {isLoggedIn, handleLogout} = useAuth();

  return (
    <nav class="bg-gray-100 py-4 sticky top-0">
      <div class="container mx-auto flex justify-between item">
        <Link class="text-lg font-bold text-gray-800" href="/">
          My App
        </Link>
        <div>
          <Show when={isLoggedIn()} fallback={
            <>
              <Link
                class="bg-blue-500 text-white py-3 px-4 rounded-full mr-2"
                href='/login'
              >
              Login
              </Link>
              <Link
                class="bg-blue-500 text-white py-3 px-4 rounded-full mr-2"
                href='/register'
              >
              Register
              </Link>
            </>
          }>
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
          </Show>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
