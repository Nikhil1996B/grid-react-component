import React from 'react'
import Box from './components/core/Box/Box'
import Grid from './components/core/Grid/Grid'
import GridRuler from './components/core/GridRuler/GridRuler'
function App() {
  return (
    <div
      className='App'
      style={{ margin: '16px', position: 'relative', height: '100vh' }}
    >
      <GridRuler spacing='sm'></GridRuler>
      <Grid
        container
        spacing='sm'
        alignItems='center'
        style={{ height: '100%' }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
