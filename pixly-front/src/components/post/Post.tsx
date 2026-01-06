import { useEffect, useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  MoreHoriz,
} from "@mui/icons-material";
import { getUserById } from "../../api/user/user";

interface PostType {
  id: string;
  title: string;
  contentText: string;
  contentImage?: string | null;
  userId: string;
  createdAt: string;
}

interface PostProps {
  post: PostType;
}

interface User {
  id: string;
  name: string;
  email?: string;
}

const Post = ({ post }: PostProps) => {
  const { contentText, contentImage, userId, createdAt } = post;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!userId) return;

    getUserById(userId)
      .then(setUser)
      .catch(() => setUser(null));
  }, [userId]);

  const username = user?.email?.split("@")[0] ?? "usuario";

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
      {/* Avatar */}
      <Avatar />

      <Box sx={{ flex: 1 }}>
        {/* Cabeçalho */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <Typography
              sx={{ color: "#fff", fontWeight: 700, fontSize: "16px" }}
            >
              {user?.name ?? "Usuário"}
            </Typography>

            <Typography
              sx={{
                color: "#71767b",
                fontSize: "13px",
                fontWeight: 400,
                ml: 0.5,
              }}
            >
              @{username}
            </Typography>

            <Typography sx={{ color: "#71767b", fontSize: "15px" }}>
              · {new Date(createdAt).toLocaleDateString()}
            </Typography>
          </Box>

          <IconButton size="small" sx={{ color: "#71767b", mt: -1 }}>
            <MoreHoriz fontSize="small" />
          </IconButton>
        </Box>

        {/* Texto */}
        <Typography
          sx={{
            color: "#e7e9ea",
            fontSize: "15px",
            lineHeight: "20px",
            mt: 0.2,
            whiteSpace: "pre-wrap",
          }}
        >
          {contentText}
        </Typography>

        {/* Imagem do post */}
        {contentImage && (
          <div className="mt-3 overflow-hidden rounded-xl">
            <img
              src={`http://localhost:3333${contentImage}`}
              alt="Imagem do post"
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Ações */}
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
                "& .MuiIconButton-root": {
                  bgcolor: "rgba(29, 155, 240, 0.1)",
                },
              },
            }}
          >
            <IconButton size="small" color="inherit">
              <ChatBubbleOutline sx={{ fontSize: "18px" }} />
            </IconButton>
            <Typography variant="caption" sx={{ ml: -0.5 }}>
              0
            </Typography>
          </Box>

          {/* Likes */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": {
                color: "#f91880",
                "& .MuiIconButton-root": {
                  bgcolor: "rgba(249, 24, 128, 0.1)",
                },
              },
            }}
          >
            <IconButton size="small" color="inherit">
              <FavoriteBorder sx={{ fontSize: "18px" }} />
            </IconButton>
            <Typography variant="caption" sx={{ ml: -0.5 }}>
              0
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
