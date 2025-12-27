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
  variant="h6"
  sx={{
    px: 2,
    py: 1.5,
    fontWeight: 900,
    fontStyle: "italic",
    color: "#fff",
    letterSpacing: "-1px",
    display: "flex",
    "& span": {
      color: "#1d9bf0", // O "ly" em azul para destacar a marca
      fontWeight: 400
    }
  }}
>
  Pix<span>ly</span>
</Typography>
        
        {/* Abas Estilo Twitter (Para você / Seguindo) */}
        <Box sx={{ display: "flex", borderBottom: "1px solid #2f3336" }}>
          <Box sx={{ flex: 1, py: 2, textAlign: "center", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" }, cursor: "pointer" }}>
            <Typography sx={{ color: "#fff", fontWeight: 700, display: "inline-block", borderBottom: "4px solid #1d9bf0", pb: 1 }}>
              Para você
            </Typography>
          </Box>
         
        </Box>
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