import { NextRequest, NextResponse } from 'next/server';
import { signIn, fetchAuthSession } from "aws-amplify/auth";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, password } = body;

    // Sign in user with Amplify
    const { isSignedIn, nextStep } = await signIn({ 
      username: email, 
      password: password 
    });

    if (isSignedIn) {
      // Get the auth tokens
      const session = await fetchAuthSession();
      const tokens = {
        idToken: session.tokens?.idToken?.toString() || '',
        accessToken: session.tokens?.accessToken?.toString() || ''
      };

      // Return the authentication data
      return NextResponse.json({ 
        isSignedIn, 
        tokens,
        nextStep 
      }, { status: 200 });
    } else {
      return NextResponse.json({ 
        isSignedIn,
        nextStep
      }, { status: 200 });
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    return NextResponse.json(
      { error: 'Authentication failed', details: error },
      { status: 401 }
    );
  }
}