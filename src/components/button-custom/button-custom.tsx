
import { Button, ButtonProps } from "antd";
type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

interface IFormPropsButtonExtra {
  title?: string;
  color?: string;
  bg?: string;
  block?: boolean;
  width?: number;
  border?: string;
  padding?: string;
  margin?: string;
  fontWeight?: number;
  borderRadius?: number;
}

interface IFormPropsButton
  extends SimpleSpread<ButtonProps, IFormPropsButtonExtra> {}

export default function ButtonCus({
  title,
  color,
  bg,
  block,
  width,
  border,
  padding,
  margin,
  fontWeight,
  borderRadius,
  ...rest
}: IFormPropsButton) {
  return (
    <Button
      {...rest}
      // htmlType="submit"
      block={block}
      style={{
        fontWeight: fontWeight? fontWeight: 600,
        background: bg,
        height: 40,
        width: width,
        color: color,
        border: border ? border : "",
        padding: padding ? padding : "",
        margin: margin ? margin : "",
        borderRadius: borderRadius? `${borderRadius}px` : "",
      }}
    >
      {title}
    </Button>
  );
}
