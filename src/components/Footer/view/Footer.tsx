import { Divider, Stack, Typography } from '@mui/material'
import { MailIcon } from '../../../assets/Mailicon'
import { GitHubIcon } from '../../../assets/GitHubIcon';
import { LinkedInIcon } from '../../../assets/LinkedInIcon';
import { InstagramIcon } from '../../../assets/InstagramIcon';

const Footer = () => {
    const fontFamily = 'Inter, sans-serif';
    return (
        <Stack direction={'column'} justifyContent={'start'} alignItems={'center'} spacing={2} mt={'4rem'} mb={'4rem'}>
            <Divider sx={{ width: '100%', background: '#F46737' }} />
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} alignItems={'center'} spacing={2} alignSelf={'stretch'}
                p={{ xs: '1rem 1rem', sm: '1rem 5rem', xl: '1rem 5rem' }}>
                <Typography fontFamily={fontFamily} fontSize={{ xs: '1.5rem', xl: '2rem' }} color={'#fff'}>
                    Let's work together
                </Typography>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}
                    sx={{ border: '1px solid #2ca9bc', borderRadius: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
                >
                    <MailIcon sx={{ height: '2.5rem', width: '2.5rem' }} />
                    <Typography fontFamily={fontFamily} fontSize={{ xs: '1.1rem', xl: '1.3rem' }} color={'#fff'}>
                        jm.robles30@hotmail.com
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} alignItems={'center'} spacing={2} alignSelf={'stretch'}
                p={{ xs: '1rem 1rem', sm: '1rem 5rem', xl: '1rem 5rem' }}
            >
                <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', sm: '1.3rem' }} color={'rgba(211, 211, 211, 0.9)'}>
                    The only real mistake is the one from which we learn nothing
                </Typography>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                    <GitHubIcon
                        onClick={() => window.open('https://www.linkedin.com/in/mateo-robles-156688113/', '_blank')}
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