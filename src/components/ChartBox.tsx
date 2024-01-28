import React from "react";
import Box from "@mui/system/Box";
import { useNavigate } from "react-router-dom";

interface ChartBoxProps {
  name: string;
  url: string;
}

const ChartBox: React.FC<ChartBoxProps> = ({ name, url }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(url);

  return (
    <Box
      component="section"
      sx={{ p: 2, border: "1px dashed grey" }}
      onClick={handleClick}
    >
      {name}
    </Box>
  );
};

export default ChartBox;
