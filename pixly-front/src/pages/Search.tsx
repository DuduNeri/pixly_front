import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../components/footer/Footer";

const Search = () => {
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
      {/* Header Search */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          p: 2,
             backgroundColor: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #2f3336",
        }}
      >
        <TextField
          fullWidth
          placeholder="Buscar"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#71767b" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 44,
              borderRadius: 999,
              backgroundColor: "#000",
              color: "#e7e9ea",

              "& fieldset": {
                borderColor: "#2f3336",
              },
              "&:hover fieldset": {
                borderColor: "#1d9bf0",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1d9bf0",
              },
            },
            "& input": {
              color: "#e7e9ea",
            },
          }}
        />
      </Box>

      {/* Resultados */}
      <Box>
        {[1, 2, 3].map((item) => (
          <Box
            key={item}
            sx={{
              px: 2,
              py: 2,
              display: "flex",
              gap: 1.5,
              borderBottom: "1px solid #2f3336",
              cursor: "pointer",
              transition: "background-color .2s ease",
              "&:hover": {
                backgroundColor: "#16181c",
              },
            }}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                background: "linear-gradient(135deg, #1d9bf0, #8b5cf6)",
              }}
            >
              E
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#e7e9ea",
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
                @eduardo
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default Search;
