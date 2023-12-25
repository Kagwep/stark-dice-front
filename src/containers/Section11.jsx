import { Box, Container, Grid ,Typography,Link} from "@mui/material";
import React from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { Section11Content } from "../utils/content";

const { title, ITEMS } = Section11Content;

const Section11 = () => {
  return (
    <Container sx={{ my: { xs: 10, md: 20, lg: 25,textAlign:'center' } }}>
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
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Have questions or suggestions? Reach out to our team at{' '}
        <Link href="mailto:support@starkdice.com" color="inherit">
          support@starkdice.com
        </Link>
        .
      </Typography>

      <OutlinedButton arrow fit>
        Explore ecosystem
      </OutlinedButton>
      </Box>
    </Container>
  );
};

export default Section11;
