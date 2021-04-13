import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '10%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  textStyle: {
    color: '#403734',
    fontFamily: 'Poppins',
    align: 'left',
    variant: 'h2',
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid xs={false} sm={2} />
        <Grid xs={12} sm={8}>
          <Typography className={classes.textStyle}>
            <br />
            Frequently Asked Questions about peaches
          </Typography>
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
      <Grid item container>
        <Grid xs={false} sm={2} />
        <Grid xs={12} sm={8}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className={classes.heading}>#1</Typography>
              <Typography className={classes.secondaryHeading}>
                What are peaches?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Ask Bing.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2bh-content'
              id='panel2bh-header'
            >
              <Typography className={classes.heading}>#2</Typography>
              <Typography className={classes.secondaryHeading}>
                Will I like peaches?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Not if you're Bing</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3bh-content'
              id='panel3bh-header'
            >
              <Typography className={classes.heading}>#3</Typography>
              <Typography className={classes.secondaryHeading}>
                Where did the first peach come from?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Bing</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel4bh-content'
              id='panel4bh-header'
            >
              <Typography className={classes.heading}>#4</Typography>
              <Typography className={classes.secondaryHeading}>
                Is Bing a dummy??
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Yes, Bing is dumb!</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}
