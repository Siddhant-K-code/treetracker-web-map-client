import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { makeStyles } from 'models/makeStyles';
import BackButton from './BackButton';
import SearchButton from './SearchButton';
import SearchFilter from './SearchFilter';

const Share = dynamic(() => import('./Share')); // needed to access window object in component

const useStyles = makeStyles()((theme) => ({
  pageContainer: {
    padding: theme.spacing(3, 4),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    minHeight: '48px',
  },
  topRight: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  search: {
    marginBottom: '12px',
  },
  main: {
    width: '100%',
    flexGrow: 1,
  },
}));

export default function PageWrapper({ children, className, ...otherProps }) {
  const { classes } = useStyles();
  const router = useRouter();

  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

  const onBackHandler = () => {
    router.back();
  };

  return (
    <Box className={classes.pageContainer}>
      {false && !isMobileScreen && (
        <Box className={classes.top}>
          <BackButton onBackHandler={onBackHandler} />
          <Box className={classes.topRight}>
            <Box className={classes.search}>
              <SearchButton />
            </Box>
            <Share />
          </Box>
        </Box>
      )}
      {!isMobileScreen && <SearchFilter />}

      <Box className={clsx(classes.main, className)} {...otherProps}>
        {children}
      </Box>
    </Box>
  );
}
