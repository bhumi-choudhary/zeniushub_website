import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '../component/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu, X, Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Our-Process', 'Pricing', 'Our-Client', 'Contact-Us'];
const aboutDropdown = ['Who We Are', 'What We Do', 'Why Choose Us'];

const pageroute = {
    Home: '/',
    About: '/About-Us',
    'Our-Process': '/Our-Process',
    Pricing: '/Solutions',
    'Our-Client': '/client',
    'Contact-Us': '/Contact-us'
};

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [hoverAbout, setHoverAbout] = useState(false);
    const [scrolled, setScrolled] = useState(false); // ✅ track scroll
    const drawerRef = useRef(null);
    const listItemRefs = useRef([]);
    const navigate = useNavigate();

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (drawerOpen && drawerRef.current) {
            gsap.set(drawerRef.current, { x: -300, opacity: 0 });
            gsap.to(drawerRef.current, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
            gsap.fromTo(
                listItemRefs.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.1, delay: 0.2, ease: 'back.out(1.7)', duration: 0.6 }
            );
        }
    }, [drawerOpen]);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
        if (!open && drawerRef.current) {
            gsap.to(drawerRef.current, { x: -300, opacity: 0, duration: 0.4, ease: 'power2.inOut' });
        }
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: scrolled ? 'white' : 'rgba(0, 123, 255, 0.09)', // blue with transparency at top
                color: scrolled ? 'black' : 'white',
                backdropFilter: scrolled ? 'none' : 'blur(10px)', // blur at top
                boxShadow: scrolled ? '0 8px 20px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                height: { xs: '10vh', md: '12vh' },
                display: 'flex',
                justifyContent: 'center',
                px: { xs: 2, md: 8 },
            }}
        >

            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component="a"
                        href="#"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: scrolled ? 'black' : 'white',
                            textDecoration: 'none',
                            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                        }}
                    >
                        Zeniushub
                    </Typography>

                    {/* Desktop Nav */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            gap: { md: 5, lg: 8 },
                            alignItems: 'center',
                        }}
                    >
                        {pages.map((page) =>
                            page === 'About' ? (
                                <Box
                                    key={page}
                                    sx={{ position: 'relative' }}
                                    onMouseEnter={() => setHoverAbout(true)}
                                    onMouseLeave={() => setHoverAbout(false)}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            color: scrolled ? 'black' : 'white',
                                            '&:hover': { color: 'orangered' },
                                        }}
                                        onClick={() => navigate(pageroute[page])}
                                    >
                                        {page}
                                    </Typography>

                                    {/* Dropdown */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            backgroundColor: 'white',
                                            borderRadius: '10px',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                                            zIndex: 20,
                                            minWidth: '180px',
                                            opacity: hoverAbout ? 1 : 0,
                                            visibility: hoverAbout ? 'visible' : 'hidden',
                                            transform: hoverAbout ? 'translateY(0)' : 'translateY(10px)',
                                            transition: 'all 0.3s ease',
                                            pointerEvents: hoverAbout ? 'auto' : 'none',
                                        }}
                                    >
                                        {aboutDropdown.map((item) => (
                                            <Typography
                                                key={item}
                                                sx={{
                                                    px: 2,
                                                    py: 1.2,
                                                    color: 'black',
                                                    fontWeight: 500,
                                                    cursor: 'pointer',
                                                    '&:hover': { backgroundColor: 'orangered', color: 'white' },
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            ) : (
                                <Typography
                                    key={page}
                                    onClick={() => navigate(pageroute[page])}
                                    sx={{
                                        fontWeight: 500,
                                        color: scrolled ? 'black' : 'white',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: 'orangered',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: '100%',
                                                height: '3px',
                                                bottom: -5,
                                                left: 0,
                                                backgroundColor: 'orangered',
                                            },
                                        },
                                    }}
                                >
                                    {page}
                                </Typography>
                            )
                        )}
                    </Box>

                    {/* Login / Menu */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Button text="Login" variant="normal" />
                        </Box>
                        <IconButton
                            onClick={toggleDrawer(true)}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                color: scrolled ? 'black' : 'white',
                            }}
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            {/* Drawer code remains same */}
        </AppBar>
    );
};

export default Header;
