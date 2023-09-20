"use client";

import React, { FormEvent, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

const Login = () => {
  // 일반 로그인은 skip => 회원가입 페이지 및 회원정보 수정페이지는 추후에 하고,
  // 파이어베이스로 소셜로그인 구현

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="w-[392px]">
        <h2 className="text-2xl font-extrabold text-center text-gray-800">
          로그인
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm  text-[#999999]"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              className="border border-[#CFCFCF] text-sm rounded-md  block w-full p-2.5 "
              id="email"
              type="email"
              placeholder="이메일을 입력하세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm  text-[#999999]"
              htmlFor="email"
            >
              비밀번호
            </label>
            <input
              className="border border-[#CFCFCF] text-sm rounded-md  block w-full p-2.5 "
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="px-6 w-full py-2 duration-200 border rounded-3xl bg-[#00b98d] text-white hover:bg-white hover:text-[#00b98d]"
            >
              로그인
            </button>

            <button
              className="px-6 w-full py-2 duration-200 mt-4 border rounded-3xl bg-white text-[#00b98d] hover:bg-[#00b98d] hover:text-white"
              onClick={() => signInWithGoogle()}
            >
              Google 계정으로 로그인
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
