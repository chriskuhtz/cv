import { Stack, Container, useMediaQuery } from "@mui/material";
import Head from "next/head";
import Header from "../segments/Header";
import WorkExperience from "../segments/WorkExperience";
import Projects from "../segments/Projects";
import History from "../segments/History";
import ContactMe from "../segments/ContactMe";
import SwipableTemplate from "../templates/SwipableTemplate";
import { useTheme } from "@mui/system";
export default function Home() {
  const theme = useTheme();
  const SmOrUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <Head>
        <title>Christopher Kühtz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {SmOrUp ? (
          <Container sx={{ py: 3 }} maxWidth="md">
            <Stack spacing={3} direction="column">
              <Header />
              <WorkExperience />
              <Projects />
              <History />
            </Stack>
          </Container>
        ) : (
          <Container>
            <SwipableTemplate>
              <Header />
              <WorkExperience />
              <Projects />
              <History />
              <ContactMe />
            </SwipableTemplate>
          </Container>
        )}
      </main>
    </div>
  );
}
