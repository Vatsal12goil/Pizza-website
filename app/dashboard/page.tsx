import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) redirect('/login');

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="border border-red-700 rounded-2xl px-12 py-16 text-center max-w-3xl w-full shadow-2xl space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">
          Welcome Back, {session.user?.name} 🍕
        </h1>

        <p className="text-2xl text-gray-300 leading-relaxed">
          Hungry for pizza? 🍽️<br />
          Just click on <span className="text-red-400 font-bold">Orders</span> in the <strong>top-left corner</strong> to check out your delicious choices!
        </p>

        <p className="text-md text-gray-500">
          Your personalized pizza menu is just a click away. Let’s dig in! 🔥
        </p>
      </div>
    </main>
  );
}
