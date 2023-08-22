import React from 'react';
import { CustomIconProps } from '@/types';

export const ShoppingCart = ({ size, height, width, fill, ...props }: CustomIconProps) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z"
        fill={fill || 'white'}
      />
      <path
        d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z"
        fill={fill || 'white'}
      />
      <path
        d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z"
        fill={fill || 'white'}
      />
      <path
        d="M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z"
        fill={fill || 'white'}
      />
    </svg>
  );
};

// export const ShoppingCart = ({
//   size = 24,
//   width,
//   height,
//   fill,
//   ...props
// }: CustomIconProps) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     version="1.1"
//     width={ width || size }
//     height={ height || size }
//     viewBox="0 0 256 256"
//     xmlSpace="preserve"
//     {...props}
//   >
//     <defs></defs>
//     <g
//       style={{
//         stroke: 'none',
//         strokeWidth: 0,
//         fill: 'none',
//         fillRule: 'nonzero',
//         opacity: 1,
//       }}
//       transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
//     >
//       <path
//         d="M 89.26 25.686 c -0.707 -0.946 -1.789 -1.488 -2.97 -1.488 H 74.974 H 30.6 l -0.686 -2.642 c -0.595 -2.291 -2.664 -3.892 -5.031 -3.892 h -7.565 c -0.552 0 -1 0.448 -1 1 c 0 0.552 0.448 1 1 1 h 7.565 c 1.457 0 2.729 0.984 3.096 2.394 l 9.095 35.022 c 0.114 0.441 0.512 0.749 0.968 0.749 h 42.52 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 38.814 l -1.857 -7.149 h 43.176 c 2.284 0 4.332 -1.53 4.979 -3.72 l 4.732 -16.006 C 90.18 27.823 89.966 26.631 89.26 25.686 z"
//         style={{
//           stroke: 'none',
//           strokeWidth: 1,
//           fill: fill || 'white',
//           fillRule: 'nonzero',
//           opacity: 1,
//         }}
//         transform="matrix(1 0 0 1 0 0)"
//         strokeLinecap="round"
//       />
//       <path
//         d="M 45.396 72.335 c -3.167 0 -5.743 -2.576 -5.743 -5.743 c 0 -3.166 2.576 -5.742 5.743 -5.742 c 3.166 0 5.743 2.576 5.743 5.742 C 51.139 69.759 48.563 72.335 45.396 72.335 z M 45.396 62.85 c -2.064 0 -3.743 1.679 -3.743 3.742 c 0 2.064 1.679 3.743 3.743 3.743 s 3.743 -1.679 3.743 -3.743 C 49.139 64.529 47.46 62.85 45.396 62.85 z"
//         style={{
//           stroke: 'none',
//           strokeWidth: 1,
//           fill: fill || 'white',
//           fillRule: 'nonzero',
//           opacity: 1,
//         }}
//         transform="matrix(1 0 0 1 0 0)"
//         strokeLinecap="round"
//       />
//       <path
//         d="M 72.113 72.335 c -3.166 0 -5.742 -2.576 -5.742 -5.743 c 0 -3.166 2.576 -5.742 5.742 -5.742 c 3.167 0 5.743 2.576 5.743 5.742 C 77.856 69.759 75.28 72.335 72.113 72.335 z M 72.113 62.85 c -2.063 0 -3.742 1.679 -3.742 3.742 c 0 2.064 1.679 3.743 3.742 3.743 c 2.064 0 3.743 -1.679 3.743 -3.743 C 75.856 64.529 74.177 62.85 72.113 62.85 z"
//         style={{
//           stroke: 'none',
//           strokeWidth: 1,
//           fill: fill || 'white',
//           fillRule: 'nonzero',
//           opacity: 1,
//         }}
//         transform="matrix(1 0 0 1 0 0)"
//         strokeLinecap="round"
//       />
//       <path
//         d="M 20.936 32.205 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.448 1 1 s -0.448 1 -1 1 H 20.936 z"
//         style={{
//           stroke: 'none',
//           strokeWidth: 1,
//           fill: fill || 'white',
//           fillRule: 'nonzero',
//           opacity: 1,
//         }}
//         transform="matrix(1 0 0 1 0 0)"
//         strokeLinecap="round"
//       />
//       <path
//         d="M 21.972 40.443 c -0.552 0 -1 -0.448 -1 -1 c 0 -0.552 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.448 1 1 c 0 0.552 -0.448 1 -1 1 H 21.972 z"
//         style={{
//           stroke: 'none',
//           strokeWidth: 1,
//           fill: fill || 'white',
//           fillRule: 'nonzero',
//           opacity: 1,
//         }}
//         transform="matrix(1 0 0 1 0 0)"
//         strokeLinecap="round"
//       />
//       <path
//         d="M 23.228 48.681 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.447 1 1 s -0.448 1 -1 1 H 23.228 z"
//         style={{
//           stroke: 'none',
//           strokeWidth: 1,
//           fill: fill || 'white',
//           fillRule: 'nonzero',
//           opacity: 1,
//         }}
//         transform="matrix(1 0 0 1 0 0)"
//         strokeLinecap="round"
//       />
//     </g>
//   </svg>
// );
