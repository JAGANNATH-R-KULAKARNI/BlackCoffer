import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Buttons from './buttons';

export default function SimpleAccordion() {

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>  Code Preview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Buttons/>
          <br />
          <br />
          <Typography>
          from uqtpy.sensors.ir import IR<br />
from uqtpy.actuators.pumpmotor import PumpMotor<br />
<br />
ir = None<br />
pump_motor = None<br />
irValue = None<br />
<br />
<br />
ir = IR(port=1,ob=True)<br />
pump_motor = PumpMotor(port=1,ob=True)<br />
while True:<br />
  irValue = ir.read_ir()<br />
  if irValue == True:<br />
    pump_motor.run(speed=255)<br />
  else:<br />
    pump_motor.run(speed=0)<br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
