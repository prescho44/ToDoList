import { supabase } from '../../services/supabase';

const LogoutButton = () => {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message || 'Unknown error');
    }
    return;
  };
  return (
    <>
      <button
        className=" cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleSignOut}
      >
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
