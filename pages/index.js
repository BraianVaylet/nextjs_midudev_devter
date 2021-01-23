import React, { useState, useEffect } from "react"
import Button from "@/components/Button"
import GitHub from "@/components/Icons/GitHub"
import { colors } from "@/styles/theme"
import { loginWithGitHub, onAuthStateChanged } from "../firebase/client"

const Home = () => {
  // hooks
  const [user, setUser] = useState(null)

  useEffect(() => onAuthStateChanged(setUser), [])
  console.log("user", user)

  // handle functions
  const handleClick = () => loginWithGitHub().then((user) => setUser(user))

  return (
    <>
      <section>
        <img src="/devter-logo.png" alt="logo" />
        <h1>Devter</h1>
        <h2>Talk about development with developers 💻</h2>
        <div>
          {user === null && (
            <Button onClick={() => handleClick()}>
              <GitHub width={24} height={24} fill="#fff" />
              <span>Login with GitHub</span>
            </Button>
          )}
          {user && user.avatar && (
            <div>
              <img src={user.avatar} />
              <strong>{user.username}</strong>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        section {
          height: 100%;
          display: grid;
          place-content: center;
          place-items: center;
        }

        div {
          margin-top: 16px;
        }

        img {
          width: 120px;
        }

        h1 {
          font-weight: 800;
          color: ${colors.primary};
          margin-bottom: 0;
        }

        h2 {
          width: 75%;
          font-size: 21px;
          color: ${colors.secondary};
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default Home
