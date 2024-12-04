import { Box } from "@mui/material";
import CustomAccordion from "./Accordion";
import { DPABOne, DPABThree, DPABTwo, DPABFour, InfoVideo, InfoG, KFF } from "./exports";
import { Link } from "react-router-dom";




const Disparity = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', marginX: '5%', justifyContent: 'space-around', marginBottom:'40px' }}>
                <Box sx={{marginTop:'50px'}}>
                    {InfoVideo}
                </Box>
                <Box>
                    <img src={InfoG} style={{ height: '400px', marginTop:'20px' }} />
                    <p style={{ fontSize: '10px' }}>Graphic Credit : KFF Link: <Link>{KFF}</Link> </p>
                </Box>
            </Box>
            <CustomAccordion title={'What is Healthcare Disparity?'} body={DPABOne} />
            <CustomAccordion title={'What are Some Common Causes of Healthcare Disparity?'} body={DPABTwo} />
            <CustomAccordion title={'Examples of the Impact of Healthcare Disparity'} body={DPABThree} />
            <CustomAccordion title={'Efforts to Address Healthcare Disparity'} body={DPABFour} />

        </Box>
    )
}

export default Disparity