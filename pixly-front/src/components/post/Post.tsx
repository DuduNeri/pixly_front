import { Box, Typography, Avatar, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

const actionStyle = {
  color: "#71767b",
  transition: "all .2s ease",
};

const PostItem = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 2,
        borderBottom: "1px solid #2f3336",
        transition: "background-color .2s ease",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#16181c",
        },
      }}
    >
      <Box sx={{ display: "flex", gap: 1.5 }}>
        {/* Avatar */}
        <Avatar
          sx={{
            width: 42,
            height: 42,
            fontSize: 15,
            fontWeight: 600,
            background: "linear-gradient(135deg, #1d9bf0, #8b5cf6)",
            flexShrink: 0,
          }}
        >
          E
        </Avatar>

        <Box sx={{ flex: 1 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "#e7e9ea",
                lineHeight: 1.2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Eduardo
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "#71767b",
              }}
            >
              @eduardo · 2h
            </Typography>
          </Box>

          {/* Texto */}
          <Typography
            sx={{
              mt: 0.75,
              fontSize: 15,
              lineHeight: 1.6,
              color: "#e7e9ea",
              wordBreak: "break-word",
            }}
          >
            Esse post agora suporta imagem ou vídeo 🎥📸
          </Typography>

          {/* Media */}
          <Box
            sx={{
              mt: 1.5,
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid #2f3336",
              backgroundColor: "#000",
            }}
          >
            <Box
              component="video"
              controls
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              sx={{
                width: "100%",
                maxHeight: 480,
                display: "block",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Actions */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              mt: 1.25,
            }}
          >
            <IconButton
              size="small"
              sx={{
                ...actionStyle,
                "&:hover": {
                  color: "#1d9bf0",
                  backgroundColor: "rgba(29,155,240,.12)",
                },
              }}
            >
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                ...actionStyle,
                "&:hover": {
                  color: "#f91880",
                  backgroundColor: "rgba(249,24,128,.12)",
                },
              }}
            >
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                ...actionStyle,
                "&:hover": {
                  color: "#00ba7c",
                  backgroundColor: "rgba(0,186,124,.12)",
                },
              }}
            >
              <ShareIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostItem;
