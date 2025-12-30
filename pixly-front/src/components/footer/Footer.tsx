import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import PostModal from "../modal/Modal";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: { xs: "100%", md: 600 },
          height: 56,
          bgcolor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid",
          borderColor: "#2f3336",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 1200,
        }}
      >
        {/* Home */}
        <IconButton
          onClick={() => navigate("/home")}
          sx={{
            color: isActive("/home") ? "#fff" : "#71767b",
            transition: "0.2s",
            "&:hover": { color: "#fff" },
          }}
        >
          <HomeIcon fontSize="medium" />
        </IconButton>

        {/* Search */}
        <IconButton
          onClick={() => navigate("/search")}
          sx={{
            color: isActive("/search") ? "#fff" : "#71767b",
            transition: "0.2s",
            "&:hover": { color: "#fff" },
          }}
        >
          <SearchIcon fontSize="medium" />
        </IconButton>

        {/* Add Post */}
        <IconButton
          onClick={() => setIsModalOpen(true)}
          sx={{
            bgcolor: "#71767b",
            color: "#fff",
            width: 44,
            height: 44,
            mb: 0.5,
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            transition: "0.2s",
            "&:hover": {
              bgcolor: "#3b3b3b",
            },
          }}
        >
          <AddIcon />
        </IconButton>

        {/* Profile */}
        <IconButton
          onClick={() => navigate("/profile")}
          sx={{
            color: isActive("/profile") ? "#fff" : "#71767b",
            transition: "0.2s",
            "&:hover": { color: "#fff" },
          }}
        >
          <PersonIcon fontSize="medium" />
        </IconButton>
      </Box>

      {/* Modal */}
      <PostModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;
