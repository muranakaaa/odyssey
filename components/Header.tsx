"use client";
import React from "react";
import Login from "./Login";
import Logout from "../components/Logout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <header>
      <div className="flex justify-between px-8 pt-4 items-center">
        <h1>
          <Link href="/">
            <Image src="/Odyssey-logo.svg" alt="Odysseyロゴ" />
          </Link>
        </h1>
        <div className="flex gap-12 items-center">
          <Link href="/questions">
            <p>問題一覧</p>
          </Link>
          {status === "authenticated" ? (
            <div className="flex gap-6">
              <Logout />
              <Image
                src={session.user?.image ?? ``}
                alt="Googleアイコン"
                style={{ borderRadius: "50px", width: "40px" }}
              />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
