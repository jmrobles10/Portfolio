import { Card, Grid, Stack, Typography } from '@mui/material'

interface CardAchievmentProps {
    title: string;
    description: string;
}

const CardAchievment = ({ title, description }: CardAchievmentProps) => {
    const fontFamily = 'Inter, sans-serif';
    return (
        <Grid size={{ xs: 12, md: 4, xl: 3 }}>
            <Card sx={{ background: '#212D45', borderRadius: '1rem', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' }}>
                <Stack direction={'column'} justifyContent={'start'} alignItems={'start'} spacing={2} p={'2rem'}>
                    <Typography fontFamily={fontFamily} fontSize={{ xs: '1.5rem', xl: '2rem' }} fontWeight={600} color={'#fff'}>
                        {title}
                    </Typography>
                    <Typography fontFamily={fontFamily} fontSize={{ xs: '1rem', xl: '1.1rem' }} color={'#D2D3D6'}>
                        {description}
                    </Typography>
                </Stack>
            </Card>
        </Grid>
    )
}

export default CardAchievment