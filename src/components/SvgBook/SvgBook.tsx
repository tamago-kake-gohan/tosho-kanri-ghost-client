interface SvgComponentProps {
  width: string;
}

const SvgBook: React.FC<SvgComponentProps> = ({ width }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 73 231"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55.1717 0.593265L18.3256 0.593263C8.70861 0.593262 0.912384 8.39234 0.912383 18.0111L0.912372 213.562C0.912372 223.181 8.7086 230.97 18.3256 230.97L55.1717 230.97C64.7887 230.97 72.585 223.18 72.585 213.562L72.585 18.0111C72.585 8.39234 64.7882 0.593265 55.1717 0.593265ZM57.2262 102.563L16.27 102.563L16.27 92.3237L57.2262 92.3237L57.2262 102.563ZM57.2262 71.8453L16.27 71.8453L16.27 51.3676L57.2262 51.3676L57.2262 71.8453Z"
        fill="white"
        fillOpacity="0.15"
      />
    </svg>
  );
};

export default SvgBook;
