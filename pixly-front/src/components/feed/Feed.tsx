import { Box } from "@mui/material";

const Feed = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%", 
          sm: "100%",   
          md: "700px",  
        },
        mx: "auto",
        minHeight: "100vh",
        borderLeft: {
          xs: "none",
          md: "1px solid #2f3336",
        },
        borderRight: {
          xs: "none",
          md: "1px solid #2f3336",
        },
        backgroundColor: "#1C1C1C",
      }}
    />
  );
};

export default Feed;
