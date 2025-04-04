import { Box, Stack, Typography } from '@mui/material'

const Achievements = () => {
    const fontFamily = 'Inter, sans-serif';

    return (
        <Stack
            id='achievements'
            pl={{ xs: '3rem', xl: '0rem' }} pr={{ xs: '3rem', xl: '0rem' }}
            spacing={6}
            direction={'column'}
        >
            <Box
                width={'8rem'}
                height={'0.5rem'}
                sx={{ background: 'linear-gradient(270deg, rgb(244, 103, 55) 0%, rgb(148, 93, 214) 100%)', borderRadius: '1rem', }}
            />
            <Stack direction={'column'} spacing={0} justifyContent={'start'} alignItems={'start'}>
                <Typography fontFamily={fontFamily} fontSize={{ xs: '3rem', xl: '4rem' }} fontWeight={600} color={'rgb(211, 211, 211)'}>
                    Personal Achievements
                </Typography>
                <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', xl: '1.2rem' }} color={'#fff'}>
                    Throughout my 3 years of experience as a developer, both in professional work and personal projects, I've gained extensive knowledge in modern web development, mastering various frameworks and tools. I've developed robust enterprise applications and creative personal projects that have helped me grow as a full-stack developer.{' '}
                </Typography>
            </Stack>


        </Stack>
    )
}

export default Achievements