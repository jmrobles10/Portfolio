import { Container, Stack } from '@mui/material'
import React from 'react'
import Header from '../../components/Header/view/Header'
import Footer from '../../components/Footer/view/Footer'
interface LayoutPortfolioProps {
    children: React.ReactNode
}

const LayoutPortfolio = ({ children }: LayoutPortfolioProps) => {
    return (
        <Container maxWidth="xl" sx={{ overflowX: 'hidden' }}>
            <Header />
            <Stack marginTop={'5.625rem'} spacing={20} direction={'column'}>
                {children}
            </Stack>
            <Footer />
        </Container>
    )
}

export default LayoutPortfolio