import React from "react"
import styles, { globalStyles } from "./styles"

const index = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>

      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

export default index
