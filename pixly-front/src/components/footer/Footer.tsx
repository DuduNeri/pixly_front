import { Box, IconButton } from "@mui/material";
import { 
  Home as HomeIcon, 
  Search as SearchIcon, 
  Person as PersonIcon, 
  Add as AddIcon 
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        // Alinhado com os 600px do feed estilo Twitter
        maxWidth: { xs: "100%", md: 600 }, 
        
        height: "53px", // Altura padrão do Twitter mobile
        backgroundColor: "rgba(0, 0, 0, 0.85)", // Preto com transparência
        backdropFilter: "blur(12px)", 
        borderTop: "1px solid #2f3336",
        
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <IconButton
        onClick={() => navigate("/home")}
        sx={{
          color: isActive("/home") ? "#fff" : "#71767b",
          "&:hover": { color: "#fff" },
        }}
      >
        <HomeIcon sx={{ fontSize: "28px" }} />
      </IconButton>

      <IconButton
        onClick={() => navigate("/search")}
        sx={{
          color: isActive("/search") ? "#fff" : "#71767b",
          "&:hover": { color: "#fff" },
        }}
      >
        <SearchIcon sx={{ fontSize: "28px" }} />
      </IconButton>

      {/* Botão de Postar - Mais parecido com o FAB do Twitter */}
      <IconButton
        onClick={() => navigate("/post")}
        sx={{
          color: "#fff",
          backgroundColor: "#71767b",
          width: "42px",
          height: "42px",
          mb: 0.5, // Leve ajuste para centralizar visualmente
          "&:hover": { 
            backgroundColor: "#3b3b3bff",
          },
          transition: "0.2s",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        <AddIcon sx={{ fontSize: "24px" }} />
      </IconButton>

      <IconButton
        onClick={() => navigate("/profile")}
        sx={{
          color: isActive("/profile") ? "#fff" : "#71767b",
          "&:hover": { color: "#fff" },
        }}
      >
        <PersonIcon sx={{ fontSize: "28px" }} />
      </IconButton>
    </Box>
  );
};

export default Footer;