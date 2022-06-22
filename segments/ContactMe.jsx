import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SocialChips from "../components/SocialChips";

import profilePicture from "../data/profile.png";

const ContactMe = ({ header }) => {
  return (
    <Stack sx={{ my: 6 }} direction="column" spacing={6} alignItems="center">
      <Box
        sx={{
          border: "solid",
          borderColor: "primary",
          borderWidth: "5px",
          borderRadius: "50%",
          backgroundColor: "black",
          height: "250px",
          width: "250px",
        }}
      >
        <Image src={profilePicture} alt="my face" />
      </Box>
      <Typography color="primary" variant="h4">
        {header.contactMe}
      </Typography>
      <SocialChips />
    </Stack>
  );
};

export default ContactMe;
