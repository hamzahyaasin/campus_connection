import { Outlet, Navigate } from "react-router-dom";

const RootLayout = () => {
  const isAuthenticated = false; // Use your actual auth state here

  // If not authenticated, redirect to sign-in
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div>
      {/* Your layout structure here */}
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default RootLayout;
