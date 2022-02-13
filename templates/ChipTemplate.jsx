import { Chip } from "@mui/material";
const ChipTemplate = ({ label }) => {
  return (
    <Chip
      sx={{ mr: 1, mb: 1 }}
      label={label}
      color="primary"
      variant="outlined"
    />
  );
};
export default ChipTemplate;
