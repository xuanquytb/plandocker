import { PRIMARY_COLOR } from "../../common/constantText";

export const UploadIcon = ({ className, fill, style }) => (
  <svg
    fill={fill}
    className={className}
    style={style}
    width="24"
    height="21"
    viewBox="0 0 24 21"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.7532 5H18.5832L16.7532 3H10.7532V5H15.8732L17.7032 7H21.7532V19H5.75317V10H3.75317V19C3.75317 20.1 4.65317 21 5.75317 21H21.7532C22.8532 21 23.7532 20.1 23.7532 19V7C23.7532 5.9 22.8532 5 21.7532 5ZM8.75317 13C8.75317 15.76 10.9932 18 13.7532 18C16.5132 18 18.7532 15.76 18.7532 13C18.7532 10.24 16.5132 8 13.7532 8C10.9932 8 8.75317 10.24 8.75317 13ZM13.7532 10C15.4032 10 16.7532 11.35 16.7532 13C16.7532 14.65 15.4032 16 13.7532 16C12.1032 16 10.7532 14.65 10.7532 13C10.7532 11.35 12.1032 10 13.7532 10ZM5.75317 5H8.75317V3H5.75317V0H3.75317V3H0.753174V5H3.75317V8H5.75317V5Z"
      fill={fill}
    />
  </svg>
);

export const ToggleIconActice = ({ className, fill, style }) => (
  <svg
    width="41"
    height="26"
    viewBox="0 0 41 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      opacity="0.38"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M37 12C37 8.13401 33.866 5 30 5H10C6.13401 5 3 8.13401 3 12C3 15.866 6.13401 19 10 19H30C33.866 19 37 15.866 37 12Z"
      fill={fill}
    />
    <g filter="url(#filter0_ddd_439_4268)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38 12C38 6.47715 33.5228 2 28 2C22.4772 2 18 6.47715 18 12C18 17.5228 22.4772 22 28 22C33.5228 22 38 17.5228 38 12Z"
        fill={fill}
      />
    </g>
    <defs>
      <filter
        id="filter0_ddd_439_4268"
        x="15"
        y="0"
        width="26"
        height="26"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_439_4268"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_439_4268"
          result="effect2_dropShadow_439_4268"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_439_4268"
          result="effect3_dropShadow_439_4268"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect3_dropShadow_439_4268"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const ToggleIconNoActice = ({ className, fill, style }) => (
  <svg
    width="41"
    height="26"
    viewBox="0 0 41 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <g opacity="0.38">
      <path
        opacity="0.38"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 12C4 8.13401 7.13401 5 11 5H31C34.866 5 38 8.13401 38 12C38 15.866 34.866 19 31 19H11C7.13401 19 4 15.866 4 12Z"
        fill={fill}
      />
      <g filter="url(#filter0_ddd_306_6622)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 12C3 6.47715 7.47715 2 13 2C18.5228 2 23 6.47715 23 12C23 17.5228 18.5228 22 13 22C7.47715 22 3 17.5228 3 12Z"
          fill={fill}
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ddd_306_6622"
        x="0"
        y="0"
        width="26"
        height="26"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_306_6622"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_306_6622"
          result="effect2_dropShadow_306_6622"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_306_6622"
          result="effect3_dropShadow_306_6622"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect3_dropShadow_306_6622"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const BookmarkIconNoActice = ({ className, fill, style }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <rect width="44" height="44" rx="22" fill="black" fill-opacity="0.5" />
    <path
      d="M14 32L14 13C14 12.4477 14.4477 12 15 12H29C29.5523 12 30 12.4477 30 13V32L21.7419 25.6341L14 32Z"
      stroke="white"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
);

export const BookmarkIconActiceCircle = ({ className, fill, style }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <rect width="44" height="44" rx="22" fill="#FDEAE9" />
    <path
      d="M14 32L14 13C14 12.4477 14.4477 12 15 12H29C29.5523 12 30 12.4477 30 13V32L21.7419 25.6341L14 32Z"
      fill={fill}
      stroke={fill}
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
);

export const HeartIconNoActiceCircle = ({ className, fill, style }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="1024"
    height="1024"
    viewBox="0 0 1024 1024"
    className={className}
    style={style}
  >
    <title></title>
    <g id="icomoon-ignore"></g>
    <path
      opacity="0.5"
      fill="#000"
      d="M512 32c247.424 0 448 200.576 448 448s-200.576 448-448 448c-247.424 0-448-200.576-448-448s200.576-448 448-448z"
    ></path>
    <path
      fill="none"
      stroke="#fff"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-miterlimit="4"
      stroke-width="25.6"
      d="M423.386 321.968c-48.934 0-88.616 39.274-88.616 87.73 0 39.114 15.507 131.947 168.157 225.792 2.734 1.662 5.874 2.542 9.074 2.542 3.202 0 6.341-0.88 9.075-2.542 152.648-93.845 168.155-186.678 168.155-225.792 0-48.456-39.682-87.73-88.614-87.73-48.934 0-88.616 53.17-88.616 53.17s-39.682-53.17-88.614-53.17z"
    ></path>
  </svg>
);

export const HeartIconActiceCircle = ({ className, fill, style }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="1024"
    height="1024"
    viewBox="0 0 1024 1024"
    className={className}
    style={style}
  >
    <title></title>
    <g id="icomoon-ignore"></g>
    <path
      fill="#000"
      opacity="0.5"
      d="M512 32c247.424 0 448 200.576 448 448s-200.576 448-448 448c-247.424 0-448-200.576-448-448s200.576-448 448-448z"
    ></path>
    <path
      fill={fill}
      d="M423.386 321.968c-48.934 0-88.616 39.274-88.616 87.73 0 39.114 15.507 131.947 168.157 225.792 2.734 1.662 5.874 2.542 9.074 2.542 3.202 0 6.341-0.88 9.075-2.542 152.648-93.845 168.155-186.678 168.155-225.792 0-48.456-39.682-87.73-88.614-87.73-48.934 0-88.616 53.17-88.616 53.17s-39.682-53.17-88.614-53.17z"
    ></path>
  </svg>
);
export const Btn_fav_finnal_NoActive = ({ className, fill, style }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M18.5383 14.0005C15.48 14.0005 12.9999 16.4551 12.9999 19.4836C12.9999 21.9282 13.9691 27.7303 23.5097 33.5956C23.6806 33.6995 23.8768 33.7545 24.0768 33.7545C24.2769 33.7545 24.473 33.6995 24.6439 33.5956C34.1845 27.7303 35.1537 21.9282 35.1537 19.4836C35.1537 16.4551 32.6736 14.0005 29.6153 14.0005C26.5569 14.0005 24.0768 17.3236 24.0768 17.3236C24.0768 17.3236 21.5967 14.0005 18.5383 14.0005Z"
      stroke="white"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="black"
      fill-opacity="0.2"
    />
  </svg>
);

export const Btn_fav_finnal_Active = ({ className, fill, style, stroke }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M18.5385 14.0005C15.4801 14.0005 13 16.4551 13 19.4836C13 21.9282 13.9692 27.7303 23.5098 33.5956C23.6807 33.6996 23.8769 33.7545 24.0769 33.7545C24.277 33.7545 24.4732 33.6996 24.6441 33.5956C34.1846 27.7303 35.1538 21.9282 35.1538 19.4836C35.1538 16.4551 32.6737 14.0005 29.6154 14.0005C26.557 14.0005 24.0769 17.3236 24.0769 17.3236C24.0769 17.3236 21.5968 14.0005 18.5385 14.0005Z"
      fill={fill}
      stroke={stroke}
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const IconCall = ({ className, fill, style, stroke }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.2645 9.0889L10.2051 4.40318C9.73714 3.86322 8.87919 3.86562 8.33562 4.41038L4.99742 7.75458C4.00388 8.74932 3.7195 10.2264 4.29426 11.4108C7.728 18.5203 13.4618 24.2621 20.5665 27.7058C21.7496 28.2806 23.2255 27.9962 24.2191 27.0014L27.5885 23.626C28.1344 23.0801 28.1356 22.2173 27.5909 21.7493L22.8871 17.7116C22.3952 17.2892 21.6308 17.3444 21.1377 17.8388L19.501 19.4779C19.4172 19.5657 19.3069 19.6236 19.187 19.6427C19.0671 19.6617 18.9443 19.6409 18.8374 19.5835C16.1621 18.0429 13.9429 15.8208 12.4058 13.1435C12.3482 13.0364 12.3274 12.9133 12.3464 12.7933C12.3655 12.6732 12.4235 12.5627 12.5114 12.4787L14.1433 10.8456C14.6376 10.3488 14.6916 9.58087 14.2645 9.0877V9.0889Z"
      stroke="#444444"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.4001 8.66663C21.0668 8.66663 23.7335 11.3333 23.7335 14"
      stroke="#444444"
      stroke-width="1.6"
    />
    <path
      d="M18.4001 3.33331C23.7335 3.33331 29.0668 8.66665 29.0668 14"
      stroke="#444444"
      stroke-width="1.6"
    />
  </svg>
);
export const IconEditDkv = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 17.5H10H17.5"
        stroke={PRIMARY_COLOR}
        stroke-width="1.6"
        stroke-linecap="round"
      />
      <path
        d="M10.1799 4.39237L13.5943 7.68652M10.733 3.34466L5.95456 8.36262C5.47752 8.82243 5.15218 9.40826 5.01955 10.0463L4.16675 14.1667L8.43557 13.342C9.09653 13.2144 9.70268 12.9016 10.1799 12.441L12.5691 9.93204L14.9583 7.42306C15.2358 7.15527 15.4558 6.83735 15.606 6.48747C15.7561 6.13758 15.8334 5.76257 15.8334 5.38386C15.8334 5.00515 15.7561 4.63014 15.606 4.28025C15.4558 3.93037 15.2358 3.61245 14.9583 3.34466C14.6809 3.07687 14.3515 2.86445 13.989 2.71952C13.6265 2.57459 13.238 2.5 12.8457 2.5C12.4533 2.5 12.0648 2.57459 11.7023 2.71952C11.3398 2.86445 11.0105 3.07687 10.733 3.34466Z"
        stroke={PRIMARY_COLOR}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const IconDkv = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.0625 20.0121H25.8402C24.4279 19.124 22.7506 18.7078 21.0836 18.8374C19.3168 18.9748 17.6337 19.7194 16.3442 20.9341L16.0747 21.188L11.2857 21.2204C10.2081 21.2216 9.26194 21.7949 8.73575 22.6523L5.36725 19.3663C4.14012 18.1446 2.14725 18.146 0.921875 19.3706C0.327375 19.9646 0 20.7545 0 21.5948C0 22.4349 0.327375 23.2249 0.921875 23.8189L8.832 31.7234C9.00775 31.8991 9.24612 31.9978 9.49469 31.9978H17.6974C17.7599 31.9978 17.8222 31.9916 17.8835 31.9792L25.6549 30.4056H31.0625C31.5802 30.4056 32 29.9858 32 29.4681V20.9496C32 20.4319 31.5802 20.0121 31.0625 20.0121ZM17.6034 30.1228H9.88281L2.24719 22.4926C2.00719 22.2528 1.875 21.9339 1.875 21.5948C1.875 21.2556 2.00719 20.9368 2.24719 20.6969C2.74319 20.2013 3.55019 20.2011 4.04612 20.6969C4.04881 20.6995 4.0515 20.7022 4.05419 20.7048L8.29587 24.8427V26.2661C8.29587 26.7839 8.71562 27.2036 9.23337 27.2036H17.6974C18.2152 27.2036 18.6349 26.7839 18.6349 26.2661C18.6349 25.7484 18.2152 25.3286 17.6974 25.3286H10.1709V24.2121C10.1709 23.5964 10.6724 23.0955 11.2889 23.0955H11.2953L16.4557 23.0606C16.6924 23.0591 16.9199 22.9679 17.0922 22.8056L17.6299 22.2991C19.5222 20.5165 22.3923 20.1976 24.6234 21.4683V28.7014L17.6034 30.1228ZM30.125 28.5305H26.4984V21.8871H30.125V28.5305Z"
        fill={`${PRIMARY_COLOR}`}
      />
      <path
        d="M12.8123 18.7434C15.213 18.7434 17.6138 17.8296 19.4414 16.0019C23.0967 12.3466 23.0967 6.399 19.4414 2.74369C15.7861 -0.911686 9.83845 -0.911561 6.18313 2.74369C2.52782 6.399 2.52782 12.3466 6.18313 16.0019C8.01082 17.8296 10.4116 18.7434 12.8123 18.7434ZM7.50901 4.0695C8.9712 2.60738 10.8918 1.87631 12.8123 1.87631C14.7329 1.87631 16.6535 2.60738 18.1157 4.0695C21.0399 6.99375 21.0399 11.7519 18.1157 14.6761C15.1914 17.6004 10.4334 17.6004 7.50907 14.6761C4.5847 11.7519 4.5847 6.99375 7.50901 4.0695Z"
        fill="#F95926"
      />
      <path
        d="M10.2361 13.4016C10.8408 13.7971 11.2976 13.9748 11.8266 14.0491V14.2731C11.8266 14.7908 12.2463 15.2106 12.7641 15.2106C13.2818 15.2106 13.7016 14.7908 13.7016 14.2731V13.9503C14.8605 13.5784 15.6016 12.554 15.7716 11.5428C16.0033 10.1647 15.2566 8.91982 13.9135 8.44507C13.2144 8.19794 12.4427 7.90057 12.0191 7.56838C11.9269 7.49613 11.8876 7.29782 11.9254 7.09694C11.9461 6.98769 12.0415 6.62288 12.4057 6.51313C13.0721 6.31244 13.5245 6.57513 13.6881 6.69744C14.1029 7.00757 14.6903 6.92263 15.0003 6.50788C15.3103 6.09319 15.2254 5.50569 14.8107 5.19569C14.6488 5.07463 14.2592 4.81844 13.7016 4.67294V4.47276C13.7016 3.95501 13.2819 3.53526 12.7641 3.53526C12.2464 3.53526 11.8266 3.95501 11.8266 4.47276V4.73094C10.9312 5.01669 10.2646 5.78594 10.083 6.74976C9.91249 7.65419 10.2111 8.53319 10.8621 9.04382C11.4973 9.54207 12.4037 9.90019 13.2887 10.213C13.9501 10.4468 13.9697 10.9519 13.9227 11.2321C13.8431 11.7058 13.4447 12.2175 12.7579 12.2221C12.0243 12.2263 11.8149 12.1939 11.2627 11.8327C10.8294 11.5491 10.2484 11.6706 9.96487 12.1039C9.68137 12.5371 9.80287 13.1181 10.2361 13.4016Z"
        fill="#F95926"
      />
    </svg>
  );
};

export const IconArrowActive = () => {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.34315 11.6571L7 6.00024L6.05719 5.05744L6.05713 5.0575L1.3426 0.342964L0.399789 1.28577L5.11432 6.00031L0.400337 10.7143L1.34315 11.6571Z"
        fill={PRIMARY_COLOR}
      />
    </svg>
  );
};

export const IconPlusDkv = ({ className, fill, style, stroke }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.99988"
        y1="8.23345"
        x2="13.9999"
        y2="8.23345"
        stroke={fill}
        stroke-width="1.6"
      />
      <line
        x1="8.26655"
        y1="2.5"
        x2="8.26655"
        y2="14.5"
        stroke={fill}
        stroke-width="1.6"
      />
    </svg>
  );
};

export const IconGuideDkv = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 19C17.771 19 19.657 19 20.828 17.828C22 16.657 22 14.771 22 11C22 7.229 22 5.343 20.828 4.172C19.657 3 17.771 3 14 3H10C6.229 3 4.343 3 3.172 4.172C2 5.343 2 7.229 2 11C2 14.771 2 16.657 3.172 17.828C3.825 18.482 4.7 18.771 6 18.898"
        stroke={PRIMARY_COLOR}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 8.484C10.5 7.494 11 7 12 7C13.246 7 14 7.989 14 8.978C14 9.967 13.5 10.011 12 11V12M12 14.5V15"
        stroke={PRIMARY_COLOR}
        stroke-width="1.6"
        stroke-linecap="round"
      />
      <path
        d="M14 19C12.764 19 11.402 19.5 10.159 20.145C8.161 21.182 7.162 21.701 6.67 21.37C6.178 21.04 6.271 20.015 6.458 17.966L6.5 17.5"
        stroke={PRIMARY_COLOR}
        stroke-width="1.6"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const IconCheckSelectd = ({ fill }) => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7L7 13L17 1"
        stroke={fill}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const IconClose = () => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.92893 1.07107L16.0711 15.2132M16.0711 1.07107L1.92893 15.2132"
        stroke="#777777"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
export const IconCard = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        fill="rgba(149,164,166,1)"
      />
    </svg>
  );
};
export const IconHeart = ({ width = 18, height = 18 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <path
        d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243c2.16 2.166 2.329 5.557.507 7.91C19.926 12.24 18.99 12 18 12c-3.314 0-6 2.686-6 6 0 1.009.249 1.96.689 2.794l-.69.691-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z"
        fill="rgba(149,164,166,1)"
      />
    </svg>
  );
};
export const IconHeartActive = ({ width = 24, height = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <path
        d="M17.363 11.045c1.404-1.393 3.68-1.393 5.084 0 1.404 1.394 1.404 3.654 0 5.047L17 21.5l-5.447-5.408c-1.404-1.393-1.404-3.653 0-5.047 1.404-1.393 3.68-1.393 5.084 0l.363.36.363-.36zm1.88-6.288c.94.943 1.503 2.118 1.689 3.338-1.333-.248-2.739-.01-3.932.713-2.15-1.303-4.994-1.03-6.856.818-2.131 2.115-2.19 5.515-.178 7.701l.178.185 2.421 2.404L11 21.485 2.52 12.993C.417 10.637.496 7.019 2.757 4.757c2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z"
        fill="rgba(247,38,38,1)"
      />
    </svg>
  );
};
export const IconArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z"
        fill="rgba(149,164,166,1)"
      />
    </svg>
  );
};
export const IconShowEye = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a5 5 0 1 1-4.78 3.527A2.499 2.499 0 0 0 12 9.5a2.5 2.5 0 0 0-1.473-2.28c.466-.143.96-.22 1.473-.22z"
        fill="rgba(149,164,166,1)"
      />
    </svg>
  );
};
export const IconHeartCount = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
    >
      <path
        d="M17.3631 11.0453C18.767 9.65157 21.0432 9.65157 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453ZM19.2426 4.75736C20.1831 5.69977 20.7461 6.87453 20.9318 8.09485C19.5993 7.84749 18.1932 8.08543 17.0001 8.808C14.8491 7.50516 12.0056 7.7777 10.1439 9.62594C8.01293 11.7414 7.95374 15.1405 9.96628 17.3273L10.1439 17.5117L12.565 19.916L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736Z"
        fill="rgba(173,184,194,1)"
      ></path>
    </svg>
  );
};
