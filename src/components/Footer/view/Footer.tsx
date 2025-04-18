import { Divider, Stack, Typography } from '@mui/material'
import { GitHubIcon } from '../../../assets/GitHubIcon';
import { LinkedInIcon } from '../../../assets/LinkedInIcon';
import { InstagramIcon } from '../../../assets/InstagramIcon';

const Footer = () => {
    const fontFamily = 'Inter, sans-serif';
    return (
        <Stack direction={'column'} justifyContent={'start'} alignItems={'center'} spacing={2} mt={{ xs: '2rem', md: '4rem' }} mb={{ xs: '2rem', md: '4rem' }}>
            <Divider sx={{ width: '100%', background: '#F46737' }} />
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} alignItems={'center'} spacing={2} alignSelf={'stretch'}
                p={{ xs: '1rem 1rem', sm: '1rem 5rem', xl: '1rem 5rem' }}>
                <Typography fontFamily={fontFamily} fontSize={{ xs: '1.5rem', xl: '2rem' }} color={'#fff'}>
                    Let's work together
                </Typography>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} alignItems={'center'} spacing={2} alignSelf={'stretch'}
                p={{ xs: '1rem 1rem', sm: '1rem 5rem', xl: '1rem 5rem' }}
            >
                <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', sm: '1.2rem' }} color={'rgba(211, 211, 211, 0.9)'} textAlign={{ xs: 'center', sm: 'start' }}>
                    The only real mistake is the one from which we learn nothing
                </Typography>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                    <GitHubIcon
                        onClick={() => window.open('https://github.com/jmrobles10?tab=repositories', '_blank')}
                        sx={{
                            height: '2rem', width: '2rem', cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                transition: 'transform 0.3s ease',
                            },
                        }}
                    />
                    <LinkedInIcon
                        onClick={() => window.open('https://www.linkedin.com/in/mateo-robles-156688113/', '_blank')}
                        sx={{
                            height: '2rem', width: '2rem', cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                transition: 'transform 0.3s ease',
                            },
                        }}
                    />
                    <InstagramIcon
                        onClick={() => window.open('https://www.instagram.com/mateo_robles/', '_blank')}
                        sx={{
                            height: '2rem', width: '2rem', cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                transition: 'transform 0.3s ease',
                            },
                        }}
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer