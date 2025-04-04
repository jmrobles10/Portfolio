import { Box, Divider, Stack, Typography } from '@mui/material'
import TimeLineItem from '../components/TimeLineItem';
import { TimeLineData } from '../model/TimeLineModel';

const AboutMe = () => {
    const fontFamily = 'Inter, sans-serif';

    return (
        <Stack id='aboutme' pl={{ xs: '0.5rem', md: '3rem', xl: '0rem' }} pr={{ xs: '0.5rem', md: '3rem', xl: '0rem' }} spacing={3} direction={'column'}>
            <Box width={'8rem'} height={'0.5rem'} sx={{ background: 'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)', borderRadius: '1rem', }} />
            <Stack direction={'column'} spacing={2} justifyContent={'start'} alignItems={'start'}>
                <Typography fontFamily={fontFamily} fontSize={{ xs: '2rem', md: '3rem', xl: '4rem' }} fontWeight={600} color={'rgb(211, 211, 211)'}>
                    About Me
                </Typography>
                <Stack direction={'column'} spacing={2} justifyContent={'start'} alignItems={'start'}>
                    <Typography fontFamily={fontFamily} fontSize={'1rem'} color={'rgb(211, 211, 211)'}>
                        Hi there! I'm Mateo, a passionate software developer with a knack for creating innovative solutions. Throughout my 3 years of experience as a developer, both in professional work and personal projects, I've gained extensive knowledge in modern web development, mastering various frameworks and tools.
                        I've developed robust enterprise applications and creative personal projects that have helped me grow as a full-stack developer.
                        Currently, my focus is the frontend development, using technologies like React, Docker, Next.js, and Angular but I'm always looking to learn new technologies and improve my skills.
                    </Typography>
                    <Typography fontFamily={fontFamily} fontSize={'1rem'} color={'rgb(211, 211, 211)'}>
                        Also, based on my Mechanical Engineering background, I'm a quick learner and I'm always looking to improve my skills and knowledge.
                        Finding solutions to complex problems is what drives me to be a better professional and I'm always looking for new challenges.
                    </Typography>
                    <Typography fontFamily={fontFamily} fontSize={'1rem'} color={'rgb(211, 211, 211)'}>
                        Working on my own company, Atlas Services, a provider of services to the construction industry, has been a great experience.
                        I've learned a lot about the team management and the importance of having a good team to achieve great results.
                    </Typography>
                </Stack>

                <Divider sx={{ width: '100%', background: '#13ADC7' }} />

                <Box sx={{ width: '100%', overflowX: 'auto', }}>
                    <Stack direction={'row'} spacing={2} justifyContent={'start'} alignItems={'start'} sx={{ minWidth: 'min-content', pb: 2 }}>
                        {TimeLineData.map((item, index) => (
                            <TimeLineItem key={index} {...item} />
                        ))}
                    </Stack>
                </Box>
            </Stack>

        </Stack>
    )
}

export default AboutMe

