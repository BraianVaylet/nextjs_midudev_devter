import styles from "./styles.module.css"
import PropTypes from "prop-types"

export default function Avatar({ alt, src, text }) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} alt={alt} src={src} title={alt} />
      {text && <strong>{text}</strong>}
    </div>
  )
}

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
}
