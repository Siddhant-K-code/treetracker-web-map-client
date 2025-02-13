import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useCustomThemeContext } from 'context/themeContext';
import MenuBar from 'images/MenuBar';
import { makeStyles } from 'models/makeStyles';
import Link from './Link';

const iconLogo = `${process.env.NEXT_PUBLIC_BASE}/images/greenstand_logo.svg`;

const useStyles = makeStyles()((theme) => ({
  navContainer: {
    height: theme.spacing(18),
    width: '100vw',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    zIndex: 9999,
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      alignItems: 'flex-end',
    },
  },
  toolbar: {
    gap: 25,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logo: {
    paddingLeft: '1rem',
    paddingBottom: '.5rem',
    display: 'flex',
    alignItems: 'flex-end',
  },
  buttonStyle: {
    fontSize: '16px',
    textTransform: 'none',
  },
  menuButton: {
    display: 'none',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

function Navbar() {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const { colorMode } = useCustomThemeContext();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { classes } = useStyles();
  return (
    <AppBar className={classes.navContainer} color="default" position="static">
      <Link href="/" className={classes.logo}>
        <Image src={iconLogo} width={24} height={30} alt="Greenstand Logo" />
        {!isMobileScreen && (
          <Typography
            variant="h4"
            ml={2.5}
            color="text.secondary"
            sx={{
              fontWeight: 900,
              lineHeight: '22px',
            }}
          >
            Greenstand
          </Typography>
        )}
      </Link>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Link href="/">
          <Button variant="text">
            <Typography className={classes.buttonStyle}>Greenstand</Typography>
          </Button>
        </Link>
        <Link href="/">
          <Button className={classes.buttonStyle} variant="text">
            <Typography className={classes.buttonStyle}>
              Partnerships
            </Typography>
          </Button>
        </Link>
        <Link href="/">
          <Button className={classes.buttonStyle} variant="text">
            <Typography className={classes.buttonStyle}>Treetracker</Typography>
          </Button>
        </Link>
        <Link href="/">
          <Button className={classes.buttonStyle} variant="text">
            <Typography className={classes.buttonStyle}>Contribute</Typography>
          </Button>
        </Link>
        <Link href="/">
          <Button className={classes.buttonStyle} variant="text">
            <Typography className={classes.buttonStyle}>Sevices</Typography>
          </Button>
        </Link>
        <Link href="/">
          <Button className={classes.buttonStyle} variant="text">
            <Typography className={classes.buttonStyle}>Blog</Typography>
          </Button>
        </Link>
        <Link href="/">
          <Button className={classes.buttonStyle} variant="text">
            <Typography className={classes.buttonStyle}>Contact Us</Typography>
          </Button>
        </Link>
        <Button onClick={colorMode.toggleColorMode}>Theme</Button>
      </Toolbar>
      <Button
        className={classes.menuButton}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {' '}
        <MenuBar />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          style: {
            marginTop: 40,
          },
        }}
      >
        <MenuItem onClick={handleClose}>Greenstand</MenuItem>
        <MenuItem onClick={handleClose}>Partnerships</MenuItem>
        <MenuItem onClick={handleClose}>Treetracker</MenuItem>
        <MenuItem onClick={handleClose}>Contribute</MenuItem>
        <MenuItem onClick={handleClose}>Services</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        <MenuItem onClick={handleClose} sx={{ paddingLeft: '10px' }}>
          <Button onClick={colorMode.toggleColorMode}>Theme</Button>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
