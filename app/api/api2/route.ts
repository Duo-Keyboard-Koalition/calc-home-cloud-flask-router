import { NextRequest, NextResponse } from 'next/server';
import { signUp } from "aws-amplify/auth";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, password, phone_number, userType, longitude, latitude, trashTypes, companyName } = body;

    // Sign up user with Amplify
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password: password,
      options: {
        userAttributes: {
          email: email,
          phone_number: phone_number ? phone_number : undefined, // Only include if provided
          'custom:userType': userType || 'producer',
          ...(userType === 'consumer' && {
            'custom:longitude': longitude?.toString(),
            'custom:latitude': latitude?.toString(),
            'custom:trashTypes': trashTypes ? JSON.stringify(trashTypes) : '[]',
            'custom:companyName': companyName || '',
          }),
        },
      }
    });

    // Return the sign-up status
    return NextResponse.json({ 
      isSignUpComplete, 
      userId, 
      nextStep 
    }, { status: 200 });
  } catch (error) {
    console.error('Error during sign-up:', error);
    return NextResponse.json(
      { error: 'Registration failed', details: error },
      { status: 400 }
    );
  }
}