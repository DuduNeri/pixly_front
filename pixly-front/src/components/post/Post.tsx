import { Box, Typography, Avatar, IconButton } from "@mui/material";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  MoreHoriz,
} from "@mui/icons-material";
import { getPosts } from "../../api/post/posts";
import { useState, useEffect } from "react";

const Post = () => {
  const [getPost, setPosts] = useState("");

  
  return (
    <Box
      sx={{
        display: "flex",
        gap: "12px",
        p: "12px 16px",
        borderBottom: "1px solid #2f3336",
        cursor: "pointer",
        transition: "background 0.2s",
        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.03)" },
      }}
    >
      <Avatar
        sx={{ width: 40, height: 40, mt: 0.5 }}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Texugo"
      />

      <Box sx={{ flex: 1 }}>
        {/* Cabeçalho do Post */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <Typography
              sx={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}
            >
              Texugo Dev
            </Typography>
            <Typography sx={{ color: "#71767b", fontSize: "15px" }}>
              @texugodev · 2h
            </Typography>
          </Box>
          <IconButton size="small" sx={{ color: "#71767b", mt: -1 }}>
            <MoreHoriz fontSize="small" />
          </IconButton>
        </Box>

        {/* Texto do Post */}
        <Typography
          sx={{
            color: "#e7e9ea",
            fontSize: "15px",
            lineHeight: "20px",
            mt: 0.2,
            whiteSpace: "pre-wrap",
          }}
        >
          Este é um exemplo de post com o layout refatorado. O espaçamento maior
          facilita a leitura e deixa a interface muito mais profissional. 🚀
        </Typography>

        {/* AÇÕES DO POST - Agora alinhadas corretamente */}
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            mt: 1.5,
            maxWidth: "425px",
            color: "#71767b",
          }}
        >
          {/* Comentários */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": {
                color: "#1d9bf0",
                "& .MuiIconButton-root": { bgcolor: "rgba(29, 155, 240, 0.1)" },
              },
            }}
          >
            <IconButton size="small" color="inherit">
              <ChatBubbleOutline sx={{ fontSize: "18px" }} />
            </IconButton>
            <Typography variant="caption" sx={{ ml: -0.5 }}>
              12
            </Typography>
          </Box>
          {/* Likes */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": {
                color: "#f91880",
                "& .MuiIconButton-root": { bgcolor: "rgba(249, 24, 128, 0.1)" },
              },
            }}
          >
            <IconButton size="small" color="inherit">
              <FavoriteBorder sx={{ fontSize: "18px" }} />
            </IconButton>
            <Typography variant="caption" sx={{ ml: -0.5 }}>
              154
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
