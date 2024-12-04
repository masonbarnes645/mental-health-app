import { Box } from "@mui/material"
import CustomAccordion from "./Accordion"
import {IntroParaPH, PHABOne, PHABThree, PHABTwo, PHImage } from "./exports"

const Physical = () =>{

    return(
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginY:'3%' }}>
                <Box sx={{marginX:'4%'}}>
                    <p className="barlow-condensed-regular" style={{ fontSize: '30px' }}>{IntroParaPH}</p>
                </Box>
                <img src={PHImage} style={{ height: '400px' }} />
            </Box>
            <Box className="barlow-condensed-regular">
                <CustomAccordion title={'Exercise and Physical Activity'} body={PHABOne} />
                <CustomAccordion title={'Nutrition and Healthy Eating'} body={PHABTwo} />
                <CustomAccordion title={'Sleep and Rest'} body={PHABThree} />
                <Box sx={{height:'150px'}}></Box>
            </Box>
        </>
    )
}

export default Physical