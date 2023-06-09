import { Icon } from "@iconify/react";

const IconButton = ({ name, icon, outline, size, color, style, onClick }) => {
  return (
    <button
      title={name}
      className={`flex justify-center items-center w-fit ${
        outline ? "border rounded-md" : ""
      } p-2 ${style || ""}`}
      onClick={onClick}
    >
      <Icon icon={icon} color={color} width={size} height={size} />
    </button>
  );
};

export default IconButton;
