import React from 'react';
import RightPane from './RightPane';
import LeftPane from './LeftPane';
import Grid from '@material-ui/core/Grid';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
    }
};

export default props =>
    <Grid container>
        <Grid item sm xs={12}>
            <RightPane styles={styles} />
        </Grid>
        <Grid item sm xs={12}>
            <LeftPane styles={styles} />
        </Grid>
    </Grid>