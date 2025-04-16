import { createContext, useContext, ReactNode } from 'react';
import { useAuth, UserAuth } from '@/hooks/use-auth';

// Create a context with the type UserAuth | undefined
const AuthContext = createContext<UserAuth | undefined>(undefined);

// AuthProvider component - wraps the children with AuthContext provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth(); // useAuth hook to get the auth state

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// useAuthContext hook to access the auth context from anywhere in the app
export function useAuthContext() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    // Throw an error if useAuthContext is used outside of AuthProvider
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
