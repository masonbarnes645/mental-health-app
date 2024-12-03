import { missionStatement } from "./mission"
import { Box } from "@mui/material"



const Landing = () =>{

    return(
            <>
                <Box>
                    <h1>Care Without Barriers</h1>
                    <h4>Envisioning a World of Health Equity</h4>
                </Box>
                <Box>
                    <p>{missionStatement}</p>
                </Box>
                <Box>
                    <button>Learn more about healthcare disparity</button>
                    <button>Mental Health Strategies</button>
                    <button>Physical Wellness Tips</button>
                </Box>
            </>
    )
}

export default Landing