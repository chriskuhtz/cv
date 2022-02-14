import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";

const SwipableTemplate = ({ children }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = children.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      height="100vh"
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-between"}
      py={3}
    >
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {children}
      </SwipeableViews>

      <Box display={"flex"} justifyContent={"center"}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
    </Box>
  );
};
export default SwipableTemplate;
