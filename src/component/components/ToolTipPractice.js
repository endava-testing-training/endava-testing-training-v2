import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  };
}

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    padding: 10,
    boxShadow: theme.shadows[1],
    fontSize: 18,
  },
}))(Tooltip);

const useStylesArrow = makeStyles(theme => ({
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  popper: arrowGenerator(theme.palette.grey[700]),
}));

function ArrowTooltip(props) {
  const { arrow, ...classes } = useStylesArrow();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <Tooltip
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
      }}
      {...props}
      title={
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
}

ArrowTooltip.propTypes = {
  title: PropTypes.node,
};

const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  popper: arrowGenerator(theme.palette.common.black),
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
  tooltipPlacementLeft: {
    margin: '0 8px',
  },
  tooltipPlacementRight: {
    margin: '0 8px',
  },
  tooltipPlacementTop: {
    margin: '8px 0',
  },
  tooltipPlacementBottom: {
    margin: '8px 0',
  },
}));

function BootstrapTooltip(props) {
  const { arrow, ...classes } = useStylesBootstrap();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <Tooltip
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
      }}
      {...props}
      title={
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
}

BootstrapTooltip.propTypes = {
  title: PropTypes.node,
};

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 420,
    padding: 20,
    fontSize: theme.typography.pxToRem(18),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export default function ToolTipPractice() {
  return (
    <div>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Temperature</Typography>
                <ul>
                    <li>Know about limit values</li>
                    <li>Structure test cases – download the Test cases structure in functional section </li>
                    <li>Structure Bug report </li>
                    <li>Learn the main concepts to detect and report bugs </li>
                    <li>Execute test cases</li>
                    <li>Write Test Cases</li>
                </ul>
           
          </React.Fragment>
        }
      >
        <Button>Temperature</Button>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Provinces</Typography>
                <ul>
                    <li>Learn about filters and sorting </li>
                    <li>Enforce knowledge about Structure test cases</li>
                    <li>Execute test cases </li>
                    <li>Write Test Cases</li>
                </ul>
           
          </React.Fragment>
        }
      >
        <Button>Provinces</Button>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Contacts</Typography>
                <ul>
                <li>Learning about CRUD – To enforce see Testing Checklists guide recommended into Functional testing page</li>
                <li>Learning about persistence</li>
                <li>Learning about data base- To enforce see Data base section into Technical skills page.</li>
                <li>Show non- functional requirements</li>
                <li>Show blockers bugs</li>
                <li>Continue enforcing write test cases</li>
                </ul>
           
          </React.Fragment>
        }
      >
        <Button>Contacts</Button>
      </HtmlTooltip>
    </div>
  );
}