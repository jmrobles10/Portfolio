import { Box, Button, Card, CardMedia, Divider, Grid, Stack, Typography } from "@mui/material";

interface CardProjectProps {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    codeLink?: string;
    projectLink?: string;
}

const CardProject = ({ image, title, description, technologies, codeLink, projectLink }: CardProjectProps) => {
    const fontFamily = 'Inter, sans-serif';
    return (
        <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2} sx={{
                background: '#212D45',
                borderRadius: '1rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <CardMedia
                    component="img"
                    src={image}
                    sx={{
                        width: '100%',
                        height: { xs: '9rem', md: '11rem', xl: '14rem' },
                        objectFit: 'contain', backgroundColor: '#000'
                    }}
                />
                <Stack direction={'column'} justifyContent={'space-between'} alignItems={'center'} spacing={2} p={'1rem 2rem 2rem 2rem'} sx={{ flex: 1 }}>
                    <Typography fontFamily={fontFamily} fontSize={{ xs: '1.5rem', xl: '2rem' }} fontWeight={600} color={'#fff'} textAlign={'center'}>
                        {title}
                    </Typography>
                    <Divider sx={{ width: '50%', background: '#D0BB57', height: '0.1rem' }} />
                    <Stack direction={'column'} justifyContent={'space-between'} alignItems={'center'} spacing={2} alignSelf={'stretch'} flex={1}>
                        <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', xl: '1.1rem' }} color={'#D2D3D6'} >
                            {description}
                        </Typography>
                        <Stack direction={'column'} justifyContent={'end'} alignItems={'center'} spacing={2} alignSelf={'stretch'}
                            padding={'0rem 0rem'} flex={1}
                        >
                            <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', xl: '1.1rem' }} color={'#fff'}>
                                Stack
                            </Typography>
                            <Grid container columnSpacing={2} alignSelf={'stretch'}>
                                {technologies.map((technology, index) => (
                                    <Grid key={index} size={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                        <Typography key={index} fontFamily={fontFamily} fontSize={{ xs: '1rem', xl: '1rem' }} color={'#D2D3D6'} textAlign={'center'} flex={1}>
                                            {technology}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={1} alignSelf={'stretch'}>
                                {codeLink && (
                                    <Box flex={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                        <Button variant='outlined' sx={{ borderColor: '#D0BB57', color: '#D0BB57', textTransform: 'none' }} onClick={() => window.open(codeLink, '_blank')}>
                                            Code
                                        </Button>
                                    </Box>
                                )}
                                {projectLink && (
                                    <Box flex={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                        <Button variant='outlined' sx={{ borderColor: '#D0BB57', color: '#D0BB57', textTransform: 'none' }} onClick={() => window.open(projectLink, '_blank')}>
                                            View project
                                        </Button>
                                    </Box>
                                )}
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Card>
        </Grid>
    )
}

export default CardProject