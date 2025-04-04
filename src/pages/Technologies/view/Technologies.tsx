import { Box, Grid, Stack, Typography } from '@mui/material'
import { ReactIcon } from '../../../assets/ReactIcon';
import { DataBaseIcon } from '../../../assets/DataBaseIcon';
import { FigmaIcon } from '../../../assets/FigmaIcon';
import TechnologySection from '../components/TechnologySection';
import { GitHubIcon } from '../../../assets';

const Technologies = () => {
    const fontFamily = 'Inter, sans-serif';

    return (
        <Stack
            id='technologies'
            pl={{ xs: '0.5rem', md: '3rem', xl: '0rem' }} pr={{ xs: '0.5rem', md: '3rem', xl: '0rem' }}
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
                    Technologies
                </Typography>
                <Typography fontFamily={fontFamily} fontSize={'1rem'} color={'rgb(211, 211, 211)'}>
                    Throughout my 3 years of experience as a developer, both in professional work and personal projects, I've gained extensive knowledge in modern web development, mastering various frameworks and tools. I've developed robust enterprise applications and creative personal projects that have helped me grow as a full-stack developer.{' '}
                </Typography>
            </Stack>

            <Grid container spacing={5} alignItems={'center'}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <TechnologySection
                        icon={<ReactIcon sx={{ width: { xs: '2.5rem', md: '4rem' }, height: { xs: '2.5rem', md: '4rem' } }} />}
                        title={'Frontend'} technologies={'React, Angular, WordPress'}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <TechnologySection
                        icon={<DataBaseIcon sx={{ width: { xs: '2.5rem', md: '4rem' }, height: { xs: '2.5rem', md: '4rem' } }} />}
                        title={'Backend'} technologies={'.NET, C#, SQL Server, Node.js'}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <TechnologySection
                        icon={<FigmaIcon sx={{ width: { xs: '2.5rem', md: '4rem' }, height: { xs: '2.5rem', md: '4rem' } }} />}
                        title={'UI/UX'} technologies={'Figma, Canva, Adobe Photoshop, Adobe Illustrator'}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <TechnologySection
                        icon={<GitHubIcon sx={{ width: { xs: '2.5rem', md: '4rem' }, height: { xs: '2.5rem', md: '4rem' } }} />}
                        title={'Source Control'} technologies={'GitHub, Azure DevOps'}
                    />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Technologies