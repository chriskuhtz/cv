import { Box, Chip, useMediaQuery, useTheme, IconButton } from "@mui/material";
import { header } from "../data/cv";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const SocialChips = () => {
  const theme = useTheme();
  const SmOrUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box display="flex" justifyContent={SmOrUp ? "flex-start" : "center"}>
      <IconButton size="large" color="primary" href={header.linkedIn}>
        <LinkedInIcon fontSize="inherit" />
      </IconButton>
      <IconButton size="large" color="primary" href={`mailto:${header.email}`}>
        <EmailIcon fontSize="inherit" />
      </IconButton>
      <IconButton size="large" color="primary" href={header.github}>
        <GitHubIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

export default SocialChips;
