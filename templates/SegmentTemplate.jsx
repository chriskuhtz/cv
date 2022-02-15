import { Grid, Typography } from "@mui/material";
import SubSegmentTemplate from "./SubSegmentTemplate";

const SegmentTemplate = ({ data, children }) => {
  return (
    <Grid
      container
      rowSpacing={{ xs: 2 }}
      columnSpacing={{ xs: 0, sm: 0 }}
      alignItems="flex-start"
    >
      <Grid item xs={12}>
        <Typography variant="h4"> {data.headline}</Typography>
      </Grid>
      {children}
    </Grid>
  );
};

export default SegmentTemplate;
