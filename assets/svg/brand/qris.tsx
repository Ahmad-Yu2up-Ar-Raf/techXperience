import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Qris = ({ title, titleId, desc, descId, ...props }: SvgProps & SVGRProps) => (
  <Svg
    width={846.413}
    height={312.365}
    viewBox="0 0 634.808 234.274"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}>
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fillRule="evenodd"
      fill="#000"
      d="M608.811 143.588V83.13H508.058V62.967h100.753V22.672H447.6v100.753h100.753v20.163H447.6v40.295h161.211v-40.296Zm15.93-12.606v65.506c0 1.33-.543 2.63-1.48 3.567a5.084 5.084 0 0 1-3.567 1.481h-65.506v10.067h75.572c1.33 0 2.63-.544 3.567-1.482a5.084 5.084 0 0 0 1.481-3.567v-75.572h-10.066ZM80.622 0H5.048c-1.33 0-2.63.544-3.567 1.481A5.084 5.084 0 0 0 0 5.048v75.573h10.066V15.114c0-1.33.544-2.63 1.481-3.567a5.084 5.084 0 0 1 3.567-1.48h65.507V0Zm64.69 234.274h40.295v-90.686H145.31v90.686Zm35.277-211.602H84.853v40.295h60.458v60.458h40.295V27.69c0-1.33-.544-2.63-1.481-3.567a5.084 5.084 0 0 0-3.567-1.482l.03.03Zm-115.868 0H29.443c-1.33 0-2.63.544-3.567 1.48a5.084 5.084 0 0 0-1.481 3.568v151.145c0 1.33.544 2.63 1.481 3.567a5.084 5.084 0 0 0 3.567 1.481h95.735v-40.295H64.72V22.672Zm20.163 100.753h40.295V83.13H84.883v40.295Zm10.066-30.23h20.163v20.164H94.949V93.196ZM205.8 22.673v40.295h120.916V83.13H205.799v100.753h40.295v-59.854l60.458 59.854h60.458l-63.088-60.458h63.057V22.672H205.768h.03Zm181.374 161.21h40.295V22.673h-40.296v161.21Z"
    />
  </Svg>
);
export default Qris;
