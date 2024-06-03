import React from 'react'
import { Box, Typography, MenuItem, TextField, Grid, IconButton, Button } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const months = [
    {
      id: '1',
      name: 'January',
    },
    {
        id: '2',
        name: 'February',
    },
    {
        id: '3',
        name: 'March',
    },
    {
        id: '4',
        name: 'April',
    },
    {
        id: '5',
        name: 'May',
    },
    {
        id: '6',
        name: 'June',
    },
    {
        id: '7',
        name: 'July',
    },
    {
        id: '8',
        name: 'August',
    },
    {
        id: '9',
        name: 'September',
    },
    {
        id: '10',
        name: 'October',
    },
    {
        id: '11',
        name: 'November',
    },
    {
        id: '12',
        name: 'December',
    }
  ];

const years = [
    {
        id:'1',
        year: '2010'
    },
    {
        id:'2',
        year: '2011'
    },
    {
        id:'3',
        year: '2012'
    },
    {
        id:'4',
        year: '2013'
    },
    {
        id:'5',
        year: '2014'
    },
    {
        id:'6',
        year: '2015'
    },
    {
        id:'7',
        year: '2016'
    },
    {
        id:'8',
        year: '2019'
    },

    {
        id:'9',
        year: '2020'
    },
    {
        id:'10',
        year: '2021'
    },
    {
        id:'11',
        year: '2022'
    },
    {
        id:'12',
        year: '2023'
    },

    {
        id:'13',
        year: '2024'
    },
]

const Date = ({buttons}) => {
    const days= []; // Array para almacenar los elementos

    for (let i = 0; i < 35; i++) {
    days.push(
                <>
                <Box sx={{
                    width: '14.28%',
                    padding: '5px'
                }}>
                    <Button variant="text" 
                    sx={{ width: '100%',
                    height:'90px', 
                    backgroundColor: '#FFE6E6', 
                    borderRadius:'10px',
                    }}>
                        {i+1}
                    </Button>
                </Box>
                {i> 0 && (i + 1) % 7 === 0 ? <br /> : null}
                </>
                );
    }
  return (
    <Box component="main" sx={{ flexGrow: 1}}>
        <Box sx={{
            padding:'10px 0 10px 0',
            width: '100%',
            borderBottom: 'solid 1px rgba(0,0,0, 0.12)',
            marginBottom:'20px'
        }}>
            <Typography variant='h6' component='h2'>
                {buttons[0].name}
            </Typography>
        </Box>
        <Box  component="form"
                sx={{
                '& .MuiTextField-root': {width: '100%' },
                flexGrow:1,
                marginBottom: '20px'
                }}
                noValidate
                autoComplete="off">
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <TextField
                    id="outlined-select-currency"
                    select label="Select"
                    defaultValue='January'
                    >
                    {months.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                        {option.name}
                        </MenuItem>
                    ))}
                    </TextField>            
                </Grid>
                <Grid item xs={5}>
                    <TextField
                    id="outlined-select-currency"
                    select label="Select"
                    defaultValue='2024'
                    >
                    {years.map((option) => (
                        <MenuItem key={option.id} value={option.year}>
                        {option.year}
                        </MenuItem>
                    ))}                
                    </TextField>
                </Grid>
                <Grid item xs={2} flex={1} sx={{alignContent:'center'}}>
                    <IconButton sx={{border: 'solid 1px rgba(0,0,0, 0.12)', borderRadius: '15px 0 0 15px'}}>                    
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton sx={{border: 'solid 1px rgba(0,0,0, 0.12)', borderRadius: '0 15px 15px 0'}}>
                        <ChevronRightIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>

        <Box component='div' 
            sx={{display: 'flex', 
            width: '100%', 
            justifyContent: 'center'}}>      
            <Box sx={{display: 'flex', width: '70%', flexWrap: 'wrap'}}>
                {days}
            </Box>
        </Box>
    </Box>
  )
}

export default Date