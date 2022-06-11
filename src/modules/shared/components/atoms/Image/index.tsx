import NextImage, { ImageProps } from "next/image";
import { Figure } from "./styles";

type CustomImageProps = ImageProps & {
  figureWidth?: number
  figureHeight?: number
};

export default function Image(props: CustomImageProps) {
  const { figureWidth, figureHeight, ...rest } = props

  return (
    <Figure
      style={{
        width: figureWidth,
        height: figureHeight
      }}
    >
      <NextImage {...rest} />
    </Figure>
  );
}
