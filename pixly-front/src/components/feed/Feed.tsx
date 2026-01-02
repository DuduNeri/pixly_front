import { Box, Typography } from "@mui/material";
import Post from "../post/Post";
import { getPosts } from "../../api/post/posts";
import { useState, useEffect } from "react";

const Feed = () => {
  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      return data;
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <Box
      component="main"
      sx={{
        width: { xs: "100%", md: 1000 },
        mx: "auto",
        minHeight: "100vh",
        backgroundColor: "#000000",
        borderLeft: "1px solid #2f3336",
        borderRight: "1px solid #2f3336",
        pb: { xs: 9, md: 2 },
      }}
    >
      {/* Header Sticky com Blur */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          borderBottom: "1px solid #2f3336",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            px: 2,
            py: 1,
            fontWeight: 900,
            fontStyle: "italic",
            color: "#fff",
            fontSize: "1.8rem",
            letterSpacing: "-1.5px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            textShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            "& span": {
              color: "#1d9bf0",
              fontWeight: 500,
              ml: "1px",
            },
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          Pix<span>ly</span>
        </Typography>
      </Box>

      {/* Lista de Posts */}
      <Box>
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </Box>
  );
};

export default Feed;
