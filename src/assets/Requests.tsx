type Props = {
  className?: string;
  fill?: string;
};

const Requests = ({ className, fill }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M7.49996 18.3337H12.5C16.6666 18.3337 18.3333 16.667 18.3333 12.5003V7.50033C18.3333 3.33366 16.6666 1.66699 12.5 1.66699H7.49996C3.33329 1.66699 1.66663 3.33366 1.66663 7.50033V12.5003C1.66663 16.667 3.33329 18.3337 7.49996 18.3337Z"
        fill="white"
        stroke="#464646"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.82507 6.40039H12.3584V9.94206"
        stroke="#464646"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3584 6.40039L7.64172 11.1171"
        stroke="#464646"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13.7588C8.24167 14.8421 11.7583 14.8421 15 13.7588"
        stroke="#464646"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Requests;
