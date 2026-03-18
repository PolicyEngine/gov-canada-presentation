export default function MapleLeaf({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 0l30.4 112.8L352 73.6l-22.4 89.6 89.6-22.4-39.2 65.6L492.8 256l-112.8 49.6 39.2 65.6-89.6-22.4L352 438.4l-65.6-39.2L256 512l-30.4-112.8L160 438.4l22.4-89.6-89.6 22.4 39.2-65.6L19.2 256l112.8-49.6-39.2-65.6 89.6 22.4L160 73.6l65.6 39.2z" />
    </svg>
  );
}
