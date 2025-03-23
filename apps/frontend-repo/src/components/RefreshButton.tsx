import { IconButton } from '@mui/material';
import { Refresh } from '@mui/icons-material';

interface RefreshButtonProps {
  isLoading: boolean;
  handleRefresh: () => Promise<void>;
}

export default function RefreshButton({
  isLoading,
  handleRefresh,
}: RefreshButtonProps) {
  return (
    <>
      <IconButton
        size="large"
        onClick={handleRefresh}
        disabled={isLoading}
        aria-label="delete"
      >
        <Refresh fontSize="inherit" />
      </IconButton>
    </>
  );
}
