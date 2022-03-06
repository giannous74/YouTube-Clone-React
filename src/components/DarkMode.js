import React from 'react'
import { Grid, Typography, Switch } from '@material-ui/core'

const DarkMode = ({onChange}) => {
    return (
        <Grid alignItems="center" justifyContent="center" container spacing={2}>
            <Typography>Dark Mode</Typography>
            <Switch onChange={onChange} color="primary"></Switch>
        </Grid>
    )
}

export default DarkMode;