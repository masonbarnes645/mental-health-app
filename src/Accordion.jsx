import { Accordion, AccordionDetails, AccordionSummary} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({ title, body }) => {

    return (
        <Accordion className="barlow-condensed-regular">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                {body}
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion