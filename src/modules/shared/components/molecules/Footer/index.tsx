import Image from "@shared/components/atoms/Image"
import { CustomFooter, CustomText, Bottom } from "./styles"
import { useMediaQuery } from "@mui/material"

export default function Footer() {
  const matches = useMediaQuery('min-width: 60em')

  return (
    <CustomFooter>
      <Bottom>
        <Image
          src="/images/frontending.svg"
          alt="Frontending Developers"
          figureWidth={40}
          figureHeight={40}
          width={50}
          height={50}
          layout="responsive"
        />
        <CustomText>Desenvolvido por Frontending Developers</CustomText>
        {matches && <CustomText>&#8226;</CustomText>}
        <CustomText>2022</CustomText>
      </Bottom>
    </CustomFooter>
  )
}