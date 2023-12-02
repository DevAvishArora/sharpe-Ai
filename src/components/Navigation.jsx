import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
  Hidden,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#e0e014' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shape AI
        </Typography>

        <Hidden mdDown>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/transaction">
              Transaction
            </Button>
            <Button color="inherit" component={Link} to="/data">
              Data
            </Button>
          </Box>
        </Hidden>

        <Hidden lgUp>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'secondary.main', mr: 1 }}>AA</Avatar>
          <Typography variant="body1" color="inherit" sx={{ mr: 2 }}>
           Avish Arora
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
