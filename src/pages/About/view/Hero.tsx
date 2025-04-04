import { Button, Grid, Typography } from '@mui/material'
import { BackgroundAnimation } from '../components/BackgroundAnimation';

const Hero = () => {

    const fontFamily = 'Inter, sans-serif';

    return (
        <Grid container justifyContent={'space-between'} alignItems={'start'}
            pl={{ xs: '3rem', xl: '0rem' }} pr={{ xs: '3rem', xl: '0rem' }}
            id='hero'
        >
            <Grid size={6} container direction={'column'} justifyContent={'center'} alignItems={'start'} pt={{ xs: '4rem', xl: '10rem' }}

                spacing={{ xs: 2, xl: 3 }}>
                <Grid size={12}>
                    <Typography fontFamily={fontFamily} fontSize={{ xs: '1.5rem', xl: '2rem' }} fontWeight={700} color={'rgba(255, 255, 255, 0.5)'}
                        sx={{ whiteSpace: 'nowrap' }}>
                        Personal portfolio
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <Typography fontFamily={fontFamily} fontSize={{ xs: '3.5rem', xl: '4.5rem' }} fontWeight={600} color={'#fff'}
                        sx={{ whiteSpace: 'nowrap' }}>
                        Joel Mateo Robles Atuesta
                    </Typography>
                </Grid>
                <Grid size={12} container justifyContent={'start'} alignItems={'center'} spacing={0}>
                    <Grid size={12}>
                        <Typography fontFamily={fontFamily} fontSize={{ xs: '1.2rem', xl: '1.5rem' }} color={'#CBACF9'}>
                            Mechanical Engineer - Software Developer
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <Typography fontFamily={fontFamily} fontSize={{ xs: '1.2rem', xl: '1.5rem' }} color={'#fff'}>
                            Universidad de los Andes
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <Typography fontFamily={fontFamily} fontSize={{ xs: '1.2rem', xl: '1.5rem' }} color={'#fff'}>
                            Bogotá, Colombia
                        </Typography>
                    </Grid>
                </Grid>
                <Grid size={12} mt={'4rem'}>
                    <Button variant='contained'
                        target='_blank'
                        href='https://www.linkedin.com/in/mateo-robles-156688113/'
                        sx={{
                            borderRadius: '10px',
                            padding: { xs: '0.75rem 3rem', xl: '1rem 3rem' },
                            background: '#13adc7',
                            textTransform: 'none',
                            fontWeight: 500,
                            fontSize: '1.3rem',
                            fontFamily: fontFamily,
                            color: '#fff',
                        }}
                    >
                        LinkedIn Profile
                    </Button>
                </Grid>
            </Grid>
            <Grid size={6} display={'flex'} justifyContent={'end'} alignItems={'center'}
                mt={{ xs: '2rem', xl: '5rem' }}
            >
                <BackgroundAnimation sx={{ height: { xs: '30rem', xl: '45rem' }, width: { xs: '30rem', xl: '45rem' } }} />
            </Grid>
        </Grid>
    )
}

export default Hero