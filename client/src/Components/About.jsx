import React from "react";
import { Box ,Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "auto",
          mt:5,
          p:2,
          justifyContent: "center",
          width: {
            sm: 400, md:600
          }
        }}
      >
        <Typography variant="h3" sx={{ fontWeight:{ sm:500, md:600 }}}>Who we are</Typography>
        <Typography sx={{mt:2, fontSize:{sm:"1rem", md:"1.3rem" }}}>
          ABC ltd is a survey panel that was launched in 2001. We are a
          group of survey enthusiasts that have taken thousands of online
          surveys ourselves. However, we found that many survey panels were not
          optimized enough and did not have enough focus on making it a good
          experience for the members and that is why we created OpinionPioneer.
          We aim to make it easy and user-friendly to get paid to share your
          opinion.
        </Typography>
      </Box>
    </>
  );
};

export default About;
