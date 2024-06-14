"use client";
import { useRouter } from "next/navigation";

 

// src/app/page.js
export default function Home() {

  const router=useRouter();
  
  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to Pond</h1>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              手机号
            </label>
            <input
              id="username"
              type="text"
              className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="请输入用户名"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              登录
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegisterClick}
            >
              注册
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
