import { signUp, signIn, signOut } from 'aws-amplify/auth';

export interface SignUpParams {
  username: string;
  password: string;
  email: string;
  phoneNumber?: string;
}

export interface SignInParams {
  username: string;
  password: string;
}

/**
 * Sign up a new user
 * @param params - The sign-up parameters
 * @returns The result of the sign-up operation
 */
export const handleSignUp = async (params: SignUpParams) => {
  try {
    const { username, password, email, phoneNumber } = params;
    
    const userAttributes: Record<string, string> = {
      email,
    };
    
    if (phoneNumber) {
      userAttributes.phone_number = phoneNumber; // E.164 number convention required
    }
    
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes,
      },
    });
    
    return {
      isSignUpComplete,
      userId,
      nextStep,
      success: true,
      message: 'Sign-up successful!'
    };
  } catch (error) {
    console.error('Error signing up:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred during sign-up',
      error,
    };
  }
};

/**
 * Sign in a user
 * @param params - The sign-in parameters
 * @returns The result of the sign-in operation
 */
export const handleSignIn = async (params: SignInParams) => {
  try {
    const { username, password } = params;
    
    const signInResult = await signIn({
      username,
      password,
    });
    
    // Store auth information in localStorage if needed
    if (signInResult.isSignedIn) {
      localStorage.setItem('isSignedIn', 'true');
    }
    
    return {
      ...signInResult,
      success: true,
      message: 'Sign-in successful!',
    };
  } catch (error) {
    console.error('Error signing in:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred during sign-in',
      error,
    };
  }
};

/**
 * Sign out the current user
 * @returns The result of the sign-out operation
 */
export const handleSignOut = async () => {
  try {
    await signOut();
    
    // Clear any local storage items related to authentication
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userType');
    localStorage.removeItem('isSignedIn');
    
    return {
      success: true,
      message: 'Sign-out successful!'
    };
  } catch (error) {
    console.error('Error signing out:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred during sign-out',
      error,
    };
  }
};