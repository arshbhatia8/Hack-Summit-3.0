import React, { useRef, useEffect } from 'react';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import { SpeechState, useSpeechContext } from '@speechly/react-client';

import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';

import './App.css';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    const { speechState } = useSpeechContext();
    const main = useRef(null)

    const executeScroll = () => main.current.scrollIntoView();

    useEffect(() => {
        if (speechState === SpeechState.Recording) {
            executeScroll()
        }
    }, [speechState])

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
                <Grid item xm={12} sm={4} className={classes.mobile}>
                    <Details title="Income" />
                </Grid>
                <Grid ref={main} item xm={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xm={12} sm={4} className={classes.desktop}>
                    <Details title="Income" />
                </Grid>
                <Grid item xm={12} sm={4} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App