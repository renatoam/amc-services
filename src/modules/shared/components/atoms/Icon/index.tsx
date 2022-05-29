import { MuiIconProps } from "@shared/types/mui";
import { GenericProps } from "@shared/types/react";
import { Fragment } from "react";
import Link from "../Link";
import { CustomIcon } from "./styles";

type VariantIconType = 'default' | 'circular'

export interface IconProps extends GenericProps {
  MuiIcon: MuiIconProps
  variant?: VariantIconType
  href?: string
  title?: string
}

export default function Icon(props: IconProps) {
  const { variant = 'circular', MuiIcon, href, title } = props
  const Wrapper = href ? Link : Fragment

  return (
    <Wrapper href={href} title={title ?? 'Go to social medias'}>
      <CustomIcon className={variant} {...props}>
        <MuiIcon />
      </CustomIcon>
    </Wrapper>
  )
}
