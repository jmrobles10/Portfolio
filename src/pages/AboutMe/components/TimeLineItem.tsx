import { Stack, Typography, Box } from '@mui/material'

interface TimeLineItemProps {
    year: number;
    text: string;
}

const TimeLineItem = ({ year, text }: TimeLineItemProps) => {
    const fontFamily = 'Inter, sans-serif';
    return (
        <Stack direction={'column'} spacing={2} justifyContent={'start'} alignItems={'start'} width={{ xs: '13rem', md: '15rem' }}>
            <Typography fontFamily={fontFamily} fontSize={'1.3rem'} fontWeight={600} color={'#fff'}>
                {year}
            </Typography>
            <Box width={'100%'} height={'0.1rem'} sx={{
                background: `linear-gradient(90deg, ${['#13ADC7', '#945DD6', '#F46737', '#D0BB57'][Math.floor(Math.random() * 4)]} 5%, transparent 100%)`,
                borderRadius: '1rem'
            }} />
            <Typography fontFamily={fontFamily} fontSize={'1rem'} color={'rgb(211, 211, 211)'}>
                {text}
            </Typography>
        </Stack>
    )
}

export default TimeLineItem