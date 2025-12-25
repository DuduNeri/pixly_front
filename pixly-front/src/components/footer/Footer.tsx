import { Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: {
          xs: "100%",
          md: "850px",
        },
        
        height: "56px",
        borderTop: "1px solid #2f3336",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
        borderRadius: "20px 20px 0 0",
      }}
    >
      <IconButton
        onClick={() => Navigate("/home")}
        sx={{
          color: "#e7e9ea",
          "&:hover": { color: "#1d9bf0" },
        }}
      >
        <HomeIcon fontSize="medium" />
      </IconButton>
       <IconButton
        onClick={() => Navigate("/seacrch")}
        sx={{
          color: "#e7e9ea",
          "&:hover": { color: "#1d9bf0" },
        }}
      >
        <SearchIcon fontSize="medium" />
      </IconButton>
      <IconButton
        onClick={() => Navigate("/Post")}
        sx={{
          color: "#e7e9ea",
          "&:hover": { color: "#1d9bf0" },
        }}
      >
        <AddIcon fontSize="medium" />
      </IconButton>
       <IconButton
        onClick={() => Navigate("/Profile")}
        sx={{
          color: "#e7e9ea",
          "&:hover": { color: "#1d9bf0" },
        }}
      >
        <PersonIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default Footer;
