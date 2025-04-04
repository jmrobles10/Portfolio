import { Link, Stack, Typography } from '@mui/material'

const header = () => {

    const commonLinkStyles = {
        textDecoration: 'none',
        color: '#fff',
        cursor: 'pointer'
    };

    const commonTypographyStyles = {
        '&:hover': {
            color: '#945DD6',
            textShadow: '0 0 15px rgba(161, 115, 216, 0.5)',
            transition: 'color 0.3s ease, text-shadow 0.3s ease'
        }
    };


    const navLinks = [
        { href: '#hero', text: 'Home' },
        { href: '#technologies', text: 'Technologies' },
        { href: '#projects', text: 'Projects' },
        { href: '#aboutme', text: 'About' },
        { href: '#contact', text: 'Contact' }
    ];

    return (
        <Stack justifyContent={'center'} alignItems={'center'}
            sx={{
                position: 'fixed', top: 0, left: 0, right: 0, background: 'linear-gradient(180deg, #0F1624 0%, #0F1624 80%, transparent 100%)', padding: '1rem 0rem 2rem 0rem', zIndex: 1000
            }}
        >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={12} width={'fit-content'}
                padding={'1rem 2.5rem'} borderRadius={2} border="1px solid #272A3C"
                sx={{ backdropFilter: 'blur(30px)', background: '#161a2e' }}
            >
                <Stack direction={'row'} spacing={12}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            sx={commonLinkStyles}
                        >
                            <Typography sx={commonTypographyStyles}>
                                {link.text}
                            </Typography>
                        </Link>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default header