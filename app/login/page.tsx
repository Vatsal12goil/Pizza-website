'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-3xl border border-gray-700 rounded-2xl p-12 text-center bg-black text-white shadow-lg">
        <h1 className="text-5xl font-semibold mb-10 tracking-tight text-[#bf0000]">
          Authenticate Yourself Before Enjoying your Pizza
        </h1>
        <button
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          className="w-full max-w-md mx-auto py-4 bg-[#bf0000] rounded-lg font-semibold text-xl hover:bg-red-700 transition duration-300 shadow-md"
        >
          Sign in with Google
        </button>
        <p className="mt-10 text-gray-400 text-sm max-w-md mx-auto">
          By signing in, you agree to our{' '}
          <a href="#" className="text-[#bf0000] underline hover:text-red-600">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-[#bf0000] underline hover:text-red-600">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}
