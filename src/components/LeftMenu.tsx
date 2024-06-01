import {
  AppBar,
  Box,
  Toolbar,
  styled,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/air-bargain-high-resolution-logo-transparent.png";
import InfoDialog from "./InfoDialog";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { renderToStaticMarkup } from "react-dom/server";

import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: theme.spacing(0),
  height: "35px",
}));

interface LeftMenuProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const LeftMenu = ({ darkMode, toggleDarkMode }: LeftMenuProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const primaryDark = "#494c7d";
  const primaryDeep = "#587A95";
  const primaryPale = "#F6F8F8";
  const primaryLight = "#E0E7EB";

  const BaseSwitch = styled(Switch)({
    width: 45,
    height: 22,
    padding: 0,
    display: "flex",
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(23px)",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: primaryPale,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      width: 18,
      height: 18,
      borderRadius: "25px",
      backgroundColor: primaryDark,
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      borderRadius: "25px",
      border: `1px solid ${primaryLight}`,
      backgroundColor: primaryPale,
      boxSizing: "border-box",
    },
  });

  const convertSvg = (svg: React.ReactElement) => {
    const markup = renderToStaticMarkup(svg);
    const encoded = encodeURIComponent(markup);
    const dataUri = `url('data:image/svg+xml;utf8,${encoded}')`;
    return dataUri;
  };

  const SwitchWithIcons = styled(BaseSwitch)({
    "& .MuiSwitch-track": {
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
        top: 11,
      },
      "&:before": {
        backgroundImage: convertSvg(<MdOutlineLightMode color={primaryDeep} />),
        left: 3,
      },
      "&:after": {
        backgroundImage: convertSvg(<MdDarkMode color={primaryDeep} />),
        right: 3,
      },
    },
    "& .MuiSwitch-thumb:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: convertSvg(<MdOutlineLightMode color={primaryPale} />),
    },
    "& .MuiSwitch-switchBase": {
      "&.Mui-checked": {
        "& .MuiSwitch-thumb:before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: convertSvg(<MdDarkMode color={primaryPale} />),
        },
      },
    },
  });

  const isXs = useMediaQuery("(max-width:600px)");

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInfoDialogOpen = () => {
    setInfoDialogOpen(true);
  };

  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false);
  };

  return (
    <CustomAppBar position="static">
      <Toolbar sx={{ minHeight: "35px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: isXs ? 120 : 130,
              marginRight: "-35px",
              marginLeft: "-15px",
              marginTop: isXs ? "-7px" : "-35px",
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {isXs ? (
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
              sx={{ marginRight: "-19px", marginTop: "-10px" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                sx: { paddingTop: 0, paddingBottom: 0 },
              }}
            >
              <MenuItem
                onClick={handleInfoDialogOpen}
                sx={{
                  py: 0.5,
                  minHeight: "30px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <Typography color="inherit" sx={{ fontSize: "0.9rem" }}>
                  Info
                </Typography>
              </MenuItem>
              <MenuItem
                sx={{
                  py: 0.5,
                  minHeight: "30px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <Link
                  href="https://github.com/S-Sajith/air-bargain"
                  color="inherit"
                  underline="hover"
                  target="_blank"
                >
                  <Typography sx={{ fontSize: "0.9rem" }}>Github</Typography>
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  py: 0.5,
                  minHeight: "30px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <Box>
                  <SwitchWithIcons
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginTop: "-36px",
            }}
          >
            <Typography
              color="inherit"
              onClick={handleInfoDialogOpen}
              style={{ cursor: "pointer" }}
            >
              Info
            </Typography>
            <Link
              href="https://github.com/S-Sajith/air-bargain"
              color="inherit"
              underline="hover"
              target="_blank"
            >
              Github
            </Link>
            <SwitchWithIcons checked={darkMode} onChange={toggleDarkMode} />
          </Box>
        )}
      </Toolbar>
      <InfoDialog open={infoDialogOpen} onClose={handleInfoDialogClose} />
    </CustomAppBar>
  );
};

export default LeftMenu;
