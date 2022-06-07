import Image from "@shared/components/atoms/Image";
import { ImageProps } from "next/image";

interface LogoProps extends Partial<ImageProps> {
  size?: 'large' | 'medium' | 'small'
}

const sizes = {
  small: {
    height: 100,
    width: 200
  },
  medium: {
    height: 300,
    width: 600
  },
  large: {
    height: 600,
    width: 1200
  },
}

export default function Logo(props: LogoProps) {
  const { size = 'medium', ...rest } = props

  return (
    <Image
      id="logo"
      src="/images/logotipo.svg"
      alt="AMC logo"
      height={sizes[size].height}
      width={sizes[size].width}
      {...rest}
    />
  );
}
