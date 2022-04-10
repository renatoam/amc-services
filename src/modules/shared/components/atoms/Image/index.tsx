import NextImage, { ImageProps } from "next/image";
import { Figure } from "./styles";

type CustomImageProps = ImageProps;

export default function Image(props: CustomImageProps) {
  return (
    <Figure>
      <NextImage {...props} />
    </Figure>
  );
}
