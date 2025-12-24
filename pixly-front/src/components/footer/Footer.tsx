import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: {
          xs: "100%",
          md: "700px",
        },
        height: "56px",
        backgroundColor: "#333333ff",
        borderTop: "1px solid #2f3336",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
        borderRadius: "20px 20px 0 0",
      }}
    >
      <HomeIcon sx={{ color: "#e7e9ea", fontSize: 28, cursor: "pointer"  }} />
      <SearchIcon sx={{ color: "#e7e9ea", fontSize: 28, cursor: "pointer"  }} />

      <AddIcon sx={{ color: "#1d9bf0", fontSize: 34, cursor: "pointer" }} />
      <PersonIcon sx={{ color: "#e7e9ea", fontSize: 28, cursor: "pointer"  }} />
    </Box>
  );
};

export default Footer;
