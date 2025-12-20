import { Box } from "@mui/material";

export const ErrorMessage = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <Box
      sx={{
        mt: 2,
        px: 2,
        py: 1.5,
        borderRadius: 2,
        backgroundColor: "rgba(239,68,68,0.15)",
        border: "1px solid rgba(239,68,68,0.4)",
        color: "#fca5a5",
        fontSize: "0.9rem",
        textAlign: "center",
      }}
    >
      {message}
    </Box>
  );
};
