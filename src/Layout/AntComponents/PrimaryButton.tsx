import { Button as AntButton, ButtonProps } from "antd";
import { EColors } from "../../util/enums/EColors";

interface AntButtonProps extends ButtonProps {}

const PrimaryButton = ({ ...props }: AntButtonProps) => {
  return (
    <AntButton
      className=""
      style={{ backgroundColor: EColors.primary, color: "white" }}
      {...props}
    />
  );
};
export default PrimaryButton;
