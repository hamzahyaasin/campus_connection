// src/components/auth/SignInComponent.tsx

import { useSignInAccount } from "@/lib/react-query/queries";


const SignInComponent = () => {
  const signInMutation = useSignInAccount();
  
  const handleSignIn = async (email: string, password: string) => {
    try {
      await signInMutation.mutateAsync({ email, password });
      // Handle successful sign in (e.g., redirect)
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error('Sign in failed:', error);
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // Get form data and call handleSignIn
      const formData = new FormData(e.currentTarget);
      handleSignIn(
        formData.get('email') as string,
        formData.get('password') as string
      );
    }}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit" disabled={signInMutation.isPending}>
        {signInMutation.isPending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
};

export default SignInComponent;