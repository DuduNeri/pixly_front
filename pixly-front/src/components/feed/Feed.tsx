import { Box, Typography, Tabs, Tab } from "@mui/material";
import Post from "../post/Post";

const Feed = () => {
  return (
    <Box
      component="main"
      sx={{
        // O Twitter usa exatamente 600px para a coluna central
        width: { xs: "100%", md: 1000 },
        mx: "auto",
        minHeight: "100vh",
        backgroundColor: "#000000", // Fundo totalmente preto como o modo noturno do X
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
          variant="h4" // Aumentado de h6 para h4
          sx={{
            px: 2,
            py: 1, // Reduzi um pouco o py para não ocupar espaço vertical excessivo no header
            fontWeight: 900,
            fontStyle: "italic",
            color: "#fff",
            fontSize: "1.8rem", // Tamanho fixo para garantir que fique imponente
            letterSpacing: "-1.5px", // Letras mais juntas para parecer logo de verdade
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            textShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Sombra para profundidade
            "& span": {
              color: "#1d9bf0",
              fontWeight: 500, // Aumentei um pouco o peso do span para não sumir no tamanho grande
              ml: "1px", // Um micro respiro entre o x e o l
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
