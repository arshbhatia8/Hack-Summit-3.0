import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Grid, Typography, Divider } from '@material-ui/core';

import Form from './Form/Form';
import useStyles from './styles';
import List from './List/List';

import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard';

const Main = () => {
    
    const { balance } = useContext(ExpenseTrackerContext);
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Trackify" subheader="Powered by Team Brute Force" />
            <CardContent>
                <Typography align="center" variant="h5">Total balance: ${balance}</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divder} />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
