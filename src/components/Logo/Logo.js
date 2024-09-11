import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <svg
      id="logo"
      className={styles.logo}
      width="253"
      height="262"
      viewBox="0 0 253 262"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient id="gradient">
        <stop offset="5%" stop-color="#000000" />
        <stop offset="95%" stop-color="#2d3436" />
      </linearGradient>
      <path
        id="path"
        d="M10 10 H40 V120 H90 V10 H120 V250 H90 V140 H40 V250 H10 Z"
        fill="url(#gradient)"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  );
}

export default Logo;