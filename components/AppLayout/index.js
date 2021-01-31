import styles, { globalStyles } from "./styles"
import PropTypes from "prop-types"

export default function AppLayout({ children }) {
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

AppLayout.propTypes = {
  children: PropTypes.any,
}
