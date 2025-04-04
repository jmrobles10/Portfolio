import { Link, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Close } from '@mui/icons-material'

const header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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

    const drawer = (
        <List sx={{
            background: '#161a2e',
            height: '100%',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}>
            {navLinks.map((link, index) => (
                <ListItem key={index} sx={{ padding: 0 }}>
                    <Link
                        href={link.href}
                        onClick={handleDrawerToggle}
                        sx={commonLinkStyles}
                    >
                        <Typography sx={commonTypographyStyles} fontSize="1.2rem">
                            {link.text}
                        </Typography>
                    </Link>
                </ListItem>
            ))}
        </List>
    );

    return (
        <Stack direction={'row'} display={'flex'} justifyContent={{ xs: 'end', md: 'center' }} alignItems={'center'}
            alignSelf={'stretch'} mr={{ xs: '1rem', md: '0rem' }}
            sx={{
                position: 'fixed', top: 0, left: 0, right: 0, background: 'linear-gradient(180deg, #0F1624 0%, #0F1624 80%, transparent 100%)', padding: '1rem 0rem 2rem 0rem', zIndex: 1000
            }}
        >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={12} width={'fit-content'}
                padding={{ xs: '0.75rem 0.75rem', md: '1rem 2.5rem' }} borderRadius={2} border="1px solid #272A3C"
                sx={{ backdropFilter: 'blur(30px)', background: '#161a2e' }}
            >
                {isTablet
                    ?
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
                    :
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ padding: 0 }}
                    >
                        <MenuIcon sx={{ color: '#fff', fontSize: '1.5rem' }} />
                    </IconButton>
                }
            </Stack>
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '100%',
                        background: '#161a2e',
                        borderLeft: '1px solid #272A3C'
                    },
                }}
            >
                <Stack direction={'row'} justifyContent={'end'} alignItems={'center'}
                    padding={'2rem'}>
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ padding: 0 }}
                    >
                        <Close sx={{ color: '#fff', fontSize: '1.5rem' }} />
                    </IconButton>
                </Stack>
                {drawer}
            </Drawer>
        </Stack>
    )
}

export default header