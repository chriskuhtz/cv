import { ExpandMore } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import ChipTemplate from "./ChipTemplate";

const SubSegmentTemplate = ({ headline, content }) => {
  const theme = useTheme();
  const isSmOrUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(content.defaultOpen && isSmOrUp);
  return (
    <Grid item xs={12} sm={open ? 12 : 6} md={open ? 12 : 4} key={headline}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">
            {headline}
            {content.githubLink && (
              <IconButton
                size="large"
                color="primary"
                href={content.githubLink}
              >
                <GitHubIcon fontSize="inherit" />
              </IconButton>
            )}
          </Typography>
          <Typography variant="subtitle2">{content.time}</Typography>

          {content.link && (
            <Link variant="subtitle2" href={content.link.href}>
              {content.link.text}
            </Link>
          )}
        </Grid>

        {content.skills && (
          <Grid item xs={12} onClick={() => setOpen(!open)}>
            {content.skills
              .slice(0, open ? content.skills.length : 3)
              .map((s) => (
                <ChipTemplate key={s} label={s} />
              ))}
          </Grid>
        )}
        <Grid item onClick={() => setOpen(!open)}>
          <Collapse in={open} unmountOnExit>
            <Typography>{content.content}</Typography>
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
