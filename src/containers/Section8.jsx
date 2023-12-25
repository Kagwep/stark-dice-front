import { Box, Container, Stack,Grid, Paper, Typography, Avatar} from "@mui/material";
import React from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { section8Content } from "../utils/content";

const { title, subtitle, caption, teamMembers } = section8Content;

const Section8 = () => {
  return (
    <Container

      sx={{ mt: { xs: 10, md: 20, lg: 25 }, textAlign: "center" }}
    >
    <Box
      sx={{
        height: "100%",
        position: "relative",
        p: 4,
        borderRadius: "30px",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "30px",
          border: "1px solid transparent",
          background: "linear-gradient(120deg,#5f5f61,transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exlude",
        },
      }}
    >
      <Stack alignItems="center">
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: 2 }}>
          {title}
        </Title>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: { xs: 5, md: 8 } }}
        >
          {subtitle}
        </Typography>

          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center',backgroundColor:'black' }}>
                  <Avatar alt={member.name} src={member.image} sx={{ width: 150, height: 150, mx: 'auto', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {member.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: { xs: 5, md: 8 }, mb: 3 }}
        >
          {caption}
        </Typography>

        <OutlinedButton fit arrow>
          more
        </OutlinedButton>
      </Stack>
      </Box>
    </Container>
  );
};

export default Section8;
