import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#9c27b0' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <IconButton color="inherit" component={Link} to="/" aria-label="home">
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/add" aria-label="add">
          <AddBoxIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
