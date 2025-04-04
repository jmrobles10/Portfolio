import { LocationCityOutlined, PhoneOutlined } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material'
import { MailIcon } from '../../../assets';

const Contact = () => {
    const fontFamily = 'Inter, sans-serif';

    return (
        <Stack id='contact' pl={{ xs: '0.5rem', md: '3rem', xl: '0rem' }} pr={{ xs: '0.5rem', md: '3rem', xl: '0rem' }} spacing={3} direction={'column'}>
            <Box width={'8rem'} height={'0.5rem'} sx={{ background: 'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)', borderRadius: '1rem', }} />

            <Typography fontFamily={fontFamily} fontSize={{ xs: '3rem', xl: '4rem' }} fontWeight={600} color={'rgb(211, 211, 211)'}>
                Contact
            </Typography>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent={'space-between'} alignItems={{ xs: 'center', md: 'start' }}
                padding={{ xs: '0rem', md: '0rem 2rem' }}
            >
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}
                    sx={{ border: '1px solid #2ca9bc', borderRadius: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
                >
                    <LocationCityOutlined sx={{ height: { xs: '1.5rem', md: '2rem' }, width: { xs: '1.5rem', md: '2rem' }, color: '#fff' }} />
                    <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', xl: '1.2rem' }} color={'#fff'}>
                        Bogotá, Colombia
                    </Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}
                    sx={{ border: '1px solid #2ca9bc', borderRadius: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
                >
                    <PhoneOutlined sx={{ height: { xs: '1.5rem', md: '2rem' }, width: { xs: '1.5rem', md: '2rem' }, color: '#fff' }} />
                    <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', xl: '1.2rem' }} color={'#fff'}>
                        +57 321 4884156
                    </Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}
                    sx={{ border: '1px solid #2ca9bc', borderRadius: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
                >
                    <MailIcon sx={{ height: { xs: '1.5rem', md: '2rem' }, width: { xs: '1.5rem', md: '2rem' }, color: '#fff' }} />
                    <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', xl: '1.2rem' }} color={'#fff'}>
                        jm.robles30@hotmail.com
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Contact