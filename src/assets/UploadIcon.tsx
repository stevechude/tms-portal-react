type Props = {
  onclick?: () => void;
};

const UploadIcon = ({ onclick }: Props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onclick}
    >
      <circle cx="12.4468" cy="12" r="12" fill="#E3EFFC" />
      <g clipPath="url(#clip0_634_3448)">
        <path
          d="M9.83325 14.6667L12.4999 12M12.4999 12L15.1666 14.6667M12.4999 12V18M17.8333 15.1619C18.6476 14.4894 19.1666 13.472 19.1666 12.3333C19.1666 10.3083 17.525 8.66667 15.4999 8.66667C15.3542 8.66667 15.218 8.59066 15.144 8.46516C14.2746 6.98989 12.6695 6 10.8333 6C8.07183 6 5.83325 8.23858 5.83325 11C5.83325 12.3774 6.39022 13.6247 7.29122 14.529"
          stroke="#15171C"
          strokeWidth="2.30186"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_634_3448">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(4.5 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UploadIcon;
