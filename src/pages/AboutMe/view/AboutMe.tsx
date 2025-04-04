import { Box, Stack, Typography } from '@mui/material'
import { ReactIcon } from '../../../assets/ReactIcon';
import { DataBaseIcon } from '../../../assets/DataBaseIcon';
import { FigmaIcon } from '../../../assets/FigmaIcon';
import TechnologySection from '../components/TechnologySection';

const AboutMe = () => {
    const fontFamily = 'Inter, sans-serif';

    return (
        <Stack
            id='aboutme'
            pl={{ xs: '3rem', xl: '0rem' }} pr={{ xs: '3rem', xl: '0rem' }}
            spacing={6}
            direction={'column'}
        >
            <Box
                width={'8rem'}
                height={'0.5rem'}
                sx={{ background: 'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)', borderRadius: '1rem', }}
            />
            <Stack direction={'column'} spacing={0} justifyContent={'start'} alignItems={'start'}>
                <Typography fontFamily={fontFamily} fontSize={{ xs: '3rem', xl: '4rem' }} fontWeight={600} color={'rgb(211, 211, 211)'}>
                    About Me
                </Typography>
                <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', xl: '1.2rem' }} color={'#fff'}>
                    Throughout my 3 years of experience as a developer, both in professional work and personal projects, I've gained extensive knowledge in modern web development, mastering various frameworks and tools. I've developed robust enterprise applications and creative personal projects that have helped me grow as a full-stack developer.{' '}
                </Typography>
            </Stack>

            <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>

                <TechnologySection icon={<ReactIcon sx={{ width: '4rem', height: '4rem' }} />} title={'Frontend'} technologies={'React, Angular, WordPress'} />
                <TechnologySection icon={<DataBaseIcon sx={{ width: '4rem', height: '4rem' }} />} title={'Backend'} technologies={'.NET, C#, SQL Server, Node.js'} />
                <TechnologySection icon={<FigmaIcon sx={{ width: '4rem', height: '4rem' }} />} title={'UI/UX'} technologies={'Figma, Canva, Adobe Photoshop, Adobe Illustrator'} />

            </Stack>
        </Stack>
    )
}

export default AboutMe