import React from "react"
import PropTypes from "prop-types"
import styles from "./styles"

const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{styles}</style>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
}

export default Button
