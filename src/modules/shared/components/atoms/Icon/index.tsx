import { MuiIconProps } from "@shared/types/mui";
import { GenericProps } from "@shared/types/react";
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
  const { variant = 'circular', MuiIcon, href, title = 'Go to social medias' } = props
  const content = (
    <CustomIcon className={variant} {...props}>
      <MuiIcon />
    </CustomIcon>
  )

  if (!href) return <>{content}</>

  return (
    <Link href={href} title={title}>
      {content}
    </Link>
  )
}
