import { Box, Typography, Avatar, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

const Post = () => {
  return (
    <Box
      sx={{
        width: "100%",
        px: 2,
        py: 1.5,
        borderBottom: "1px solid #2f3336",
        transition: "background-color 0.2s",
        "&:hover": { backgroundColor: "#181818" },
      }}
    >
      <Box sx={{ display: "flex", gap: 1.5 }}>
        {/* Avatar */}
        <Avatar sx={{ width: 44, height: 44, bgcolor: "#1d9bf0" }}>
          E
        </Avatar>

        <Box sx={{ flex: 1 }}>
          {/* Header */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ fontWeight: 600, color: "#e7e9ea" }}>
              Eduardo
            </Typography>
            <Typography sx={{ color: "#71767b" }}>
              @eduardo · 2h
            </Typography>
          </Box>

          {/* Texto */}
          <Typography
            sx={{
              color: "#e7e9ea",
              mt: 0.5,
              lineHeight: 1.4,
            }}
          >
            Esse post agora suporta imagem ou vídeo 🎥📸
          </Typography>

          {/* 📸 🎥 Media */}
          <Box
            sx={{
              mt: 1,
              width: "100%",
              borderRadius: "14px",
              overflow: "hidden",
              backgroundColor: "#000",
              border: "1px solid #2f3336",
            }}
          >
            {/* IMAGEM */}
            {/* <Box
              component="img"
              src="https://source.unsplash.com/random/800x600"
              sx={{
                width: "100%",
                maxHeight: 500,
                objectFit: "cover",
              }}
            /> */}

            {/* VÍDEO */}
            <Box
            //   component="video"
            //   controls
            //   src="https://www.w3schools.com/html/mov_bbb.mp4"
            //   sx={{
            //     width: "100%",
            //     maxHeight: 500,
            //     backgroundColor: "#000",
            //   }}
            />
          </Box>

          {/* Ações */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: 320,
              mt: 1,
              color: "#71767b",
            }}
          >
            <IconButton size="small" sx={{ color: "inherit" }}>
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "inherit" }}>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "inherit" }}>
              <ShareIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
