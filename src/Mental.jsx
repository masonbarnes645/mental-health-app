import { Box } from "@mui/material"
import { IntroParaMH, MHABOne, MHABThree, MHABTwo, MHImage } from "./exports"
import CustomAccordion from "./Accordion"
import { Link } from "react-router-dom"

const Mental = () => {

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginY:'3%' }}>
                <img src={MHImage} style={{ height: '400px' }} />
                <Box sx={{marginX:'4%'}}>
                    <p className="barlow-condensed-regular" style={{ fontSize: '30px' }}>{IntroParaMH}</p>
                </Box>
            </Box>
            <Box className="barlow-condensed-regular">
                <CustomAccordion title={'Self-Care Strategies'} body={MHABOne} />
                <CustomAccordion title={'Stress Management Techniques'} body={MHABTwo} />
                <CustomAccordion title={'Stress Management Techniques'} body={MHABThree} />
                <Link to={'https://www.mentalhealthfirstaid.org/mental-health-resources/'}><h1>Mental Health Resources</h1></Link>
                <Box sx={{height:'150px'}}></Box>
            </Box>
        </>
    )
}

export default Mental