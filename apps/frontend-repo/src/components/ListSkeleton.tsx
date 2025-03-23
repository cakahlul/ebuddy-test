import { Skeleton, Stack } from '@mui/material';

export default function ListSkeleton() {
  return (
    <>
      <Stack spacing={2}>
        <Skeleton animation="wave" variant="rounded" width={500} height={60} />
        <Skeleton animation="wave" variant="rounded" width={500} height={60} />
        <Skeleton animation="wave" variant="rounded" width={500} height={60} />
      </Stack>
    </>
  );
}
