import React from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <header>
        <div className="logo" onClick={() => router.push("/")}>
          Hotel Guide
        </div>

        {!session && (
          <div className="login">
            <div className="circle"></div>
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/login");
              }}
            >
              Join Now
            </button>
          </div>
        )}
        {session && (
          
            
            <div className="login">
              <div className="circle"></div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signOut({
                    callbackUrl: `${window.location.origin}`,
                  });
                }}
              >
                Sign Out
              </button>
            </div>
          
        )}
      </header>
    </>
  );
}

export default Navbar;
