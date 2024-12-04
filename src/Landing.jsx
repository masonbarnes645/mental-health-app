import { missionStatement } from "./mission"
import { Box } from "@mui/material"
import "./App.css"
import { useNavigate } from "react-router-dom"



const Landing = () =>{
    const nav = useNavigate()
    return(
            <Box sx={{textAlign:'center', marginTop:'90px'}}>
                <Box sx={{lineHeight:'3px'}}>
                    <h1 className="barlow-condensed-bold" style={{fontSize: '90px'}}>Care Without Barriers</h1>
                    <h4 className="barlow-condensed-bold" style={{fontSize: '40px', fontStyle:'italic'}}>Envisioning a World of Health Equity</h4>
                </Box>
                <Box sx={{fontSize:'25px', marginX:'2.5rem', lineHeight:'40px', display:'flex', flexDirection:'row'}}>
                    <p className="barlow-condensed-regular" style={{marginRight:'2rem'}}>{missionStatement}</p>
                    <img id="landing-img" src="https://blog.diversitynursing.com/hs-fs/hubfs/belonging.jpeg?width=1732&name=belonging.jpeg" />
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-around', marginTop:'4rem'}}>
                    <button className="landing-button" onClick={() => nav('/healthcare-disparity')}>Learn more</button>
                    <button className="landing-button" onClick={() => nav('/mental-health-strategy')}>Mental Health Strategies</button>
                    <button className="landing-button" onClick={() => nav('/physical-wellness')}>Physical Wellness Tips</button>
                </Box>
            </Box>
    )
}

export default Landing