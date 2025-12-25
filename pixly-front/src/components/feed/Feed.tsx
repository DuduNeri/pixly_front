import { Box } from "@mui/material";
import Post from "../post/Post";

const Feed = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: 900,
        },
        mx: "auto",
        minHeight: "100vh",

        backgroundColor: "#1c1c1c",

        borderLeft: {
          xs: "none",
          md: "1px solid #2f3336",
        },
        borderRight: {
          xs: "none",
          md: "1px solid #2f3336",
        },

        pb: { xs: 8, md: 0 }, // espaço pro footer no mobile
      }}
    >
      <Post />
    </Box>
  );
};

export default Feed;
