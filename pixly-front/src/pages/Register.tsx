import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button, Link } from "@mui/material";
import { userRegiter } from "../api/auth/register";
import { useState } from "react";
import logotexugo from "../assets/logotexugo.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await userRegiter(name, email, password);
      console.log(response);

      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }
  return (
    <>
      {" "}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          background: "#363636",
          backgroundSize: "600% 600%",
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
          {/* LOGO */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 1.5, 
              mt: -2, 
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
              mb: 2,
            }}
          >
            Criar conta
          </Typography>

          <form onSubmit={handleRegister}>
            {" "}
            <TextField
              label="Nome"
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
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
                    borderColor: "#fff",
                  },
                },
              }}
            />
            <TextField
              label="E-mail"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
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
                    borderColor: "#fff",
                  },
                },
              }}
            />
            <TextField
              label="Senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
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
                    borderColor: "#fff",
                  },
                },
              }}
            />
            <Button
              fullWidth
              type="submit"
              sx={{
                mt: 3,
                py: 1.1,
                borderRadius: 2,
                fontWeight: 600,
                color: "#fff",
                textTransform: "none",

                "&:hover": {
                  backgroundColor: "#5f5f5f",
                },
              }}
            >
              Criar conta
            </Button>
          </form>

          <Link
            component={RouterLink}
            to="/login"
            sx={{
              display: "block",
              textAlign: "center",
              mt: 3,
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Já tenho uma conta
          </Link>
        </Paper>
      </Box>
    </>
  );
};

export default Register;
