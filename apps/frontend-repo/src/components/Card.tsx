import { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import capitalizeFirstLetter from '@src/lib/typography';

interface Card {
  data: Record<string, string>;
  isEditable?: boolean;
  onSave?: (updatedData: Record<string, string>) => void;
}

export default function UserCard({ data, isEditable = false, onSave }: Card) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(data);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) {
      onSave(formData);
    }
  };

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Paper sx={{ p: 2, mb: 2, position: 'relative' }}>
      {isEditable && !isEditing && (
        <IconButton
          sx={{ position: 'absolute', right: 8, top: 8 }}
          onClick={handleEditClick}
        >
          <EditIcon />
        </IconButton>
      )}

      {Object.entries(formData).map(([key, value]) => (
        <Box key={key} sx={{ mb: 2 }}>
          {isEditing ? (
            <TextField
              fullWidth
              label={capitalizeFirstLetter(key)}
              value={value}
              onChange={e => handleChange(key, e.target.value)}
              variant="outlined"
              size="small"
            />
          ) : (
            <Typography variant="body1">
              <strong>{capitalizeFirstLetter(key)}:</strong> {value}
            </Typography>
          )}
        </Box>
      ))}

      {isEditing && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<CancelIcon />}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      )}
    </Paper>
  );
}
