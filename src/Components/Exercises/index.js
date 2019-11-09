import React from 'react';

import Grid from '@material-ui/core/Grid';

export default props =>
    <Grid container>
        <Grid item sm={12} md lg xl>
            Left pane
        </Grid>
        <Grid item sm={12} md lg xl>
            Right pane
        </Grid>
    </Grid>