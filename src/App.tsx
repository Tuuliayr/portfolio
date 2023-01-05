import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css';
import MyIntroduction from './components/myIntroduction/MyIntroduction';
import Projects from './components/projects/Projects';

function App() {
  return (
      <Container maxWidth="xl" className="app">
        <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <MyIntroduction/>
          </Grid>
          <Grid item xs={12}>
            <Projects/>
          </Grid>
        </Grid>
      </Container>
  );
}

export default App;
