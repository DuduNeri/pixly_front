import { Box, Typography, Avatar, Button } from "@mui/material";
import Footer from "../components/footer/Footer";

const Profile = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: 1000,
        },
        mx: "auto",
        minHeight: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.85)",

        borderLeft: {
          xs: "none",
          md: "1px solid #2f3336",
        },
        borderRight: {
          xs: "none",
          md: "1px solid #2f3336",
        },

        pb: { xs: 8, md: 0 }, // espaço pro footer no mobile
      }}
    >
      {/* Cover */}
      <Box
        sx={{
          height: 160,
          background: "linear-gradient(135deg, #1d9bf0, #8b5cf6)",
        }}
      />

      {/* Profile Info */}
      <Box sx={{ px: 2, mt: -6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Avatar
            sx={{
              width: 120,
              height: 120,
              border: "4px solid #1c1c1c",
              background: "linear-gradient(135deg, #1d9bf0, #8b5cf6)",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            E
          </Avatar>
        </Box>

        {/* Name & Bio */}
        <Box sx={{ mt: 1.5 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
            Eduardo
          </Typography>

          <Typography sx={{ fontSize: 14, color: "#71767b" }}>
            @eduardo
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: 14.5,
              color: "#e7e9ea",
              lineHeight: 1.6,
            }}
          >
            Desenvolvedor Full Stack • Node.js • React • TypeScript 🚀
          </Typography>
        </Box>

        {/* Stats */}
        <Box sx={{ display: "flex", gap: 3, mt: 2 }}>
          <Typography sx={{ fontSize: 14 }}>
            <strong>42</strong> <span style={{ color: "#71767b" }}>Posts</span>
          </Typography>
        </Box>
      </Box>

      {/* Tabs fake */}
      <Box
        sx={{
          mt: 3,
          borderBottom: "1px solid #2f3336",
          display: "flex",
        }}
      >
        {["Posts"].map((tab) => (
          <Box
            key={tab}
            sx={{
              flex: 1,
              textAlign: "center",
              py: 1.5,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              color: tab === "Posts" ? "#e7e9ea" : "#71767b",
            }}
          >
            {tab}
          </Box>
        ))}
      </Box>

      {/* User Posts */}
      <Box>
        {[1, 2, 3].map((post) => (
          <Box
            key={post}
            sx={{
              px: 2,
              py: 2,
              borderBottom: "1px solid #2f3336",
            }}
          >
            <Typography sx={{ color: "#71767b" }}>
              Post #{post} do usuário
            </Typography>
          </Box>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default Profile;
