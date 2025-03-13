type Props = {
  className?: string;
};

const BtnArrow = ({ className }: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15Z"
        stroke="#EFEFEF"
      />
      <path
        d="M14.2245 9.60742L21.1343 11.4589L19.2828 18.3687"
        stroke="#1C1C28"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8656 18.542L21.0116 11.5295"
        stroke="#1C1C28"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BtnArrow;
