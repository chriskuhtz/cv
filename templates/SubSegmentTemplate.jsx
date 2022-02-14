import { ExpandMore } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Link,
  Typography,
  Divider,
} from "@mui/material";
import { useState } from "react";
import ChipTemplate from "./ChipTemplate";

const SubSegmentTemplate = ({ data }) => {
  const [open, setOpen] = useState(data[1].defaultOpen);
  return (
    <Grid item xs={12} sm={open ? 12 : 6} md={open ? 12 : 4} key={data[0]}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">
            {data[0]}
            {data[1].githubLink && (
              <IconButton
                size="large"
                color="primary"
                href={data[1].githubLink}
              >
                <GitHubIcon fontSize="inherit" />
              </IconButton>
            )}
          </Typography>
          <Typography variant="subtitle2">{data[1].time}</Typography>

          {data[1].link && (
            <Link variant="subtitle2" href={data[1].link.href}>
              {data[1].link.text}
            </Link>
          )}
        </Grid>

        {data[1].skills && (
          <Grid item xs={12} onClick={() => setOpen(!open)}>
            {data[1].skills
              .slice(0, open ? data[1].skills.length : 3)
              .map((s) => (
                <ChipTemplate key={s} label={s} />
              ))}
          </Grid>
        )}
        <Grid item onClick={() => setOpen(!open)}>
          <Collapse in={open} unmountOnExit>
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
