import { Link, Typography } from "@mui/material";
import logo from "../assets/air-bargain-purple-logo-transparent.png";

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: 100,
        }}
      />
      <Typography variant="body2" color="text.secondary" align="center">
        Developed by:{" "}
        <Link
          href="https://github.com/S-Sajith"
          color="inherit"
          underline="hover"
          target="_blank"
        >
          Sajith S
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
