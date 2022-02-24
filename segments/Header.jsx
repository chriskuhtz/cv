import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SocialChips from "../components/SocialChips";
import profilePicture from "../data/profile.png";

const Header = ({ header, english }) => {
  return (
    <Grid container spacing={{ xs: 0, sm: 4 }} alignItems="center">
      <Grid item xs={12} sm={5}>
        <Box
          sx={{
            border: "solid",
            borderColor: "primary",
            borderWidth: "5px",
            borderRadius: "50%",
            backgroundColor: "black",
          }}
        >
          <Image src={profilePicture} alt="my face" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Stack direction="column" spacing={2}>
          <Typography color="primary" variant="h2">
            {header.name}
          </Typography>
          <Typography color="primary" variant="h4">
            {header.jobTitle} {english ? "and" : "und"} {header.jobSubtitle}
          </Typography>
          <SocialChips />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
