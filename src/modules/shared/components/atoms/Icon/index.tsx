import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { GenericProps } from "@shared/types/react";
import { CustomIcon } from "./styles";
import Link from "../Link";
import { Fragment } from "react";

enum VariantIcon {
  default = 'default',
  circular = 'circular'
}

export interface IconProps extends GenericProps {
  MuiIcon: OverridableComponent<SvgIconTypeMap<Record<string, never>, "svg">>
  variant?: VariantIcon
  href?: string
  title?: string
}

export default function Icon(props: IconProps) {
  const { variant = VariantIcon.circular, MuiIcon, href, title } = props
  const Wrapper = href ? Link : Fragment

  return (
    <Wrapper href={href} title={title ?? 'Go to social medias'}>
      <CustomIcon className={variant} {...props}>
        <MuiIcon />
      </CustomIcon>
    </Wrapper>
  )
}
