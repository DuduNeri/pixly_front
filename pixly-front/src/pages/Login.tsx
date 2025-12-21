import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button, Link } from "@mui/material";
import { useState } from "react";
import { userLogin } from "../api/auth/login";
import { ErrorMessage } from "../utils/ErrorMessage";
import logotexugo from "../assets/logotexugo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await userLogin(email, password);
      console.log(response);

      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error);
      setError("E-mail ou senha incorretos");
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        background: "	#363636",
        backgroundSize: "600% 600%",
        animation: "gradientMove 12s ease infinite",

        "@keyframes gradientMove": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: 380,
          p: 4,
          borderRadius: 3,
          backgroundColor: "#1C1C1C",
          position: "relative",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: -1,
            borderRadius: "inherit",
            background:
              "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)",
            opacity: 0.6,
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 1.5, // espaço abaixo
            mt: -2, // sobe a logo
          }}
        >
          <Box
            component="img"
            src={logotexugo}
            alt="Logo Texugo"
            sx={{
              width: 90,
              height: "auto",
            }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "#fff",
            mb: 1,
          }}
        >
          Bem-vindo de volta
        </Typography>
        <ErrorMessage message={error} />

        <form onSubmit={handleLogin}>
          <TextField
            label="E-mail"
            type="email"
            fullWidth
            required
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": {
                color: "rgba(255,255,255,0.6)",
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fff",
              },

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255,255,255,0.2)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffffff",
                },
              },
            }}
          />

          <TextField
            label="Senha"
            type="password"
            fullWidth
            required
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": {
                color: "rgba(255,255,255,0.6)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255,255,255,0.2)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffffff",
                },
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              py: 1.1,
              borderRadius: 2,
              fontWeight: 600,
              color: "	#ffffffff",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "	#5f5f5fff",
              },
            }}
          >
            Entrar
          </Button>
        </form>

        <Link
          component={RouterLink}
          to="/register"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 3,
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.6)",
            textDecoration: "none",
            "&:hover": {
              color: "#ffffffff",
            },
          }}
        >
          Criar uma conta
        </Link>
      </Paper>
    </Box>
  );
};

export default Login;
