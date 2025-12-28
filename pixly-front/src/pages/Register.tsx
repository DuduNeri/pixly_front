import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button, Link } from "@mui/material";
import { userRegiter } from "../api/auth/register";
import { ErrorMessage } from "../utils/ErrorMessage";
import logotexugo from "../assets/logotexugo.png";


const textFieldStyle = {
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.6)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
    "&.Mui-focused fieldset": { borderColor: "#fff" },
  },
  "& .MuiInputBase-input": { color: "#fff" }
};

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Preencha todos os campos");
      return;
    }
    try {
      await userRegiter(name, email, password);
      navigate("/home");
    } catch (err) {
      console.error("Erro ao criar usuário:", err);
      setError("Erro ao processar cadastro");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        background: "#363636",
      }}
    >
      <Paper
        elevation={0}
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
            background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)",
            zIndex: -1,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 1.5, mt: -2 }}>
          <Box component="img" src={logotexugo} alt="Logo" sx={{ width: 90 }} />
        </Box>

        <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 600, color: "#fff", mb: 2 }}>
          Criar conta
        </Typography>

        <ErrorMessage message={error} />

        <form onSubmit={handleRegister}>
          <TextField label="Nome" fullWidth margin="normal" sx={textFieldStyle} onChange={(e) => setName(e.target.value)} />
          <TextField label="E-mail" type="email" fullWidth margin="normal" sx={textFieldStyle} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Senha" type="password" fullWidth margin="normal" sx={textFieldStyle} onChange={(e) => setPassword(e.target.value)} />
          
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              py: 1.2,
              backgroundColor: "#333",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { backgroundColor: "#5f5f5f" },
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
            "&:hover": { color: "#fff" },
          }}
        >
          Já tenho uma conta
        </Link>
      </Paper>
    </Box>
  );
};

export default Register;