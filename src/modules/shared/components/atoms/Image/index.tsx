import NextImage, { ImageProps } from "next/image";
import { Figure } from "./styles";

type CustomImageProps = ImageProps & {
  figureWidth?: number
  figureHeight?: number
};

export default function Image(props: CustomImageProps) {
  return (
    <Figure
      style={{
        width: props.figureWidth,
        height: props.figureHeight
      }}
    >
      <NextImage {...props} />
    </Figure>
  );
}
