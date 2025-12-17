import { Link as RouterLink } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button, Link } from "@mui/material";

const Login = () => {
    console.log("LOGIN RENDERIZOU");

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      }}
    >
      <Paper sx={{ p: 5, borderRadius: 3, maxWidth: 420, width: "100%" }}>
        <Typography variant="h4" textAlign="center" mb={1}>
          Bem-vindo
        </Typography>

        <Typography variant="body2" textAlign="center" mb={3}>
          Faça login para continuar
        </Typography>

        <TextField label="E-mail" fullWidth margin="normal" />
        <TextField label="Senha" type="password" fullWidth margin="normal" />

        <Button fullWidth sx={{ mt: 3 }}>
          Entrar
        </Button>

        <Link
          component={RouterLink}
          to="/register"
          display="block"
          textAlign="center"
          mt={3}
        >
          Ainda não tem uma conta? Cadastre-se
        </Link>
      </Paper>
    </Box>
  );
};

export default Login;
