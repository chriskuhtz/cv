import { ExpandMore } from "@mui/icons-material";
import { Collapse, Grid, IconButton, Box, Typography } from "@mui/material";
import { useState } from "react";
import ChipTemplate from "./ChipTemplate";

const SubSegmentTemplate = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <Grid
      onClick={() => setOpen(!open)}
      item
      xs={12}
      sm={open ? 12 : 6}
      md={open ? 12 : 4}
      key={data[0]}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">
            {data[0]}
          </Typography>
          <Typography variant="subtitle2">{data[1].time}</Typography>
        </Grid>

        {data[1].skills && (
          <Grid item xs={12}>
            {data[1].skills
              .slice(0, open ? data[1].skills.length : 3)
              .map((s) => (
                <ChipTemplate key={s} label={s} />
              ))}
          </Grid>
        )}
        <Grid item>
          <Collapse onClick={() => setOpen(!open)} in={open} unmountOnExit>
            <Typography>{data[1].content}</Typography>
          </Collapse>
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
    </Grid>
  );
};

export default SubSegmentTemplate;
