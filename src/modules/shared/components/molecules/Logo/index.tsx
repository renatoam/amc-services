import Image from "@shared/components/atoms/Image";

export default function Logo() {
  return (
    <Image
      id="logo"
      src="/images/logotipo.svg"
      alt="AMC logo"
      height={100}
      width={200}
    />
  );
}
