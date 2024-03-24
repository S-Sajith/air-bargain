import { Link, Typography } from "@mui/material"

const Footer = () => {
  return (
    <footer style={{ position: "absolute", bottom: 0, width: "100%" }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  )
}

export default Footer
