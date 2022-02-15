import { ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Grid,
  IconButton,
  Box,
  Card,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ChipTemplate from "./ChipTemplate";

const BoxedSubSegmentTemplate = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid
      onClick={() => setOpen(!open)}
      item
      xs={12}
      sm={open ? 12 : 6}
      key={data[0]}
    >
      <Box
        sx={{
          border: "solid",
          borderColor: "primary",
          borderWidth: "2px",
          borderRadius: 2,
          p: 1,
        }}
      >
        <Grid container rowspacing={2} columnSpacing={{ xs: 0, sm: 2 }}>
          <Grid item xs={12}>
            <Typography color="primary" variant="h6">
              {data[0]}
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="primary">
              {data[1].eyeCatcher}
              <Collapse onClick={() => setOpen(!open)} in={open} unmountOnExit>
                {data[1].content}
              </Collapse>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <IconButton
                onClick={() => setOpen(!open)}
                sx={{
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <ExpandMore color="primary" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default BoxedSubSegmentTemplate;
