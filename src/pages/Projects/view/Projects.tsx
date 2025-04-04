import { Box, Grid, Stack, Typography } from '@mui/material'
import CardProject from '../components/CardProject';
import { projects } from '../model/modelProjects';

const Projects = () => {
    const fontFamily = 'Inter, sans-serif';

    return (
        <Stack id='projects' pl={{ xs: '0.5rem', md: '3rem', xl: '0rem' }} pr={{ xs: '0.5rem', md: '3rem', xl: '0rem' }} spacing={3} direction={'column'}>
            <Box width={'8rem'} height={'0.5rem'} sx={{ background: 'linear-gradient(270deg, rgb(244, 103, 55) 0%, rgb(148, 93, 214) 100%)', borderRadius: '1rem', }} />
            <Stack direction={'column'} spacing={0} justifyContent={'start'} alignItems={'start'}>
                <Typography fontFamily={fontFamily} fontSize={{ xs: '2rem', md: '3rem', xl: '4rem' }} fontWeight={600} color={'rgb(211, 211, 211)'}>
                    Projects
                </Typography>
            </Stack>

            <Grid container spacing={6}>
                {projects.map((project, index) => (
                    <CardProject key={index} {...project} />
                ))}
            </Grid>
        </Stack>
    )
}

export default Projects

