import { Modal, Box } from "@mui/material";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./PopoverColorPicker.css";

const COLOR_PICKER_CONTAINER_STYLE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface PopoverColorPickerProps {
  color: string;
  setColor: (color: string) => any;
}

export const PopoverColorPicker = ({
  color,
  setColor,
}: PopoverColorPickerProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const handleModalClose = () => {
    setOpen(false);
  };
  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div
        className="popover-color-picker"
        style={{ backgroundColor: color }}
        onClick={handleOpen}
      ></div>
      <Modal open={open} onClose={handleModalClose}>
        <Box sx={COLOR_PICKER_CONTAINER_STYLE}>
          <HexColorPicker color={color} onChange={handleColorChange} />
        </Box>
      </Modal>
    </>
  );
};
