import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 64.000000 64.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M276 619 c-33 -26 -34 -68 -3 -97 13 -12 35 -22 48 -22 32 0 69 39
69 72 0 29 -41 68 -70 68 -10 0 -29 -9 -44 -21z"
      />
      <path
        d="M272 367 c-28 -30 -28 -68 1 -95 30 -28 68 -28 95 1 28 30 28 68 -1
95 -30 28 -68 28 -95 -1z"
      />
      <path
        d="M272 117 c-30 -32 -28 -71 4 -96 15 -12 34 -21 44 -21 10 0 29 9 44
21 33 26 34 68 3 97 -30 28 -68 28 -95 -1z"
      />
    </g>
  </svg>
);

const MoreIcon = memo(SvgComponent);
export default MoreIcon;
