import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { X, ImagePlus } from "lucide-react";
import { useState } from "react";

interface PostModalProps {
  open: boolean;
  onClose: () => void;
}

const PostModal = ({ open, onClose }: PostModalProps) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: 420,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          outline: "none",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 1.5,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <IconButton onClick={onClose}>
            <X size={20} />
          </IconButton>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Criar publicação
          </Typography>
        </Box>
        {/* Image Upload */}
        <Box
          component="label"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 320,
            bgcolor: "action.hover",
            cursor: "pointer",
          }}
        >
          {image ? (
            <Box
              component="img"
              src={image}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <Box sx={{ textAlign: "center", color: "text.secondary" }}>
              <ImagePlus size={48} />
              <Typography variant="body2" mt={1}>
                Adicionar foto
              </Typography>
            </Box>
          )}

          <input
            hidden
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Box>

        {/* Caption */}
        <Box sx={{ px: 2, py: 1.5 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Escreva uma legenda..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: { fontSize: 14 },
            }}
          />
          <Box
            sx={{
              display: "flex",
              flex: "end",
            }}
          >
            <Button
              size="small"
              sx={{
                ml: "auto",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Postar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default PostModal;
