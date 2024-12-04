import { Box, IconButton } from "@mui/material"
import { Link, useLocation, useNavigate } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';


 const NavBar = () =>{

    const nav = useNavigate()
 

    return(
        <Box sx={{width:'100%', backgroundColor:'darkturquoise', borderRadius:'4px'}}>
            {location.pathname !== '/' && (
                <Box sx={{display:'flex', justifyContent:'start'}}>
                    <IconButton component={Link} to='/'><HomeIcon/></IconButton>
                    <button className="nav-button" onClick={() => nav('/healthcare-disparity')}>Learn about Disparity</button>
                    <button className="nav-button" onClick={() => nav('/mental-health-strategy')}>Mental Health Strategy</button>
                    <button className="nav-button" onClick={() => nav('/physical-wellness')}>Physical Wellbeing Tips</button>
                </Box>
            )}
        </Box>
    )
 }

 export default NavBar