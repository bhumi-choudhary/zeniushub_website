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
import { ICONS } from '../component/Icons';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', ' Our-Process', 'Solution', 'Our-Client', 'Contact-Us'];
const aboutDropdown = ['Who We Are', 'What We Do', 'Why Choose Us'];
const pageroute = {
    Home: '/',
    About: '/About-us',
    'Our-Process': '/Our-Process',
    Solution: '/Solutions',
    Solution: '/Solutions',
    Client: '/client',
    'Contact-Us': '/Contact-us'

}
// const aboutdroprouting = {
//     'Who We Are': '/who-we-are',
//     'What We Do': '/what-we-do',
//     'Why Choose Us': '/why-choose-us',
// }
const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false); // For mobile toggle
    const [hoverAbout, setHoverAbout] = useState(false); // For desktop hover
    const drawerRef = useRef(null);
    const listItemRefs = useRef([]);
    const navigate = useNavigate()
    useEffect(() => {
        if (drawerOpen && drawerRef.current) {
            gsap.set(drawerRef.current, { x: 300, opacity: 0 });
            gsap.to(drawerRef.current, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
            gsap.fromTo(
                listItemRefs.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.1, delay: 0.2, ease: 'back.out(1.7)', duration: 0.6 }
            );
        }
    }, [drawerOpen]);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
        if (!open && drawerRef.current) {
            gsap.to(drawerRef.current, { x: 300, opacity: 0, duration: 0.4, ease: 'power2.inOut' });
        }
    };

    return (
        <div>

            {/* Header */}
            <AppBar
                position="fixed"
                sx={{
                    paddingTop: '20px',
                    backgroundColor: 'white',
                    height: '12vh',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    paddingX: { xs: 2, md: 10 },
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                        {/* Logo */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            Zeniushub
                        </Typography>

                        {/* Mobile Menu */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton onClick={toggleDrawer(true)}>
                                <Menu style={{ color: 'black' }} />
                            </IconButton>
                        </Box>

                        {/* Mobile Logo */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
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
                                gap: 6,
                                position: 'relative',
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
                                            component="a"
                                            href="#"
                                            sx={{
                                                my: 2,
                                                color: 'black',
                                                display: 'block',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                '&:hover': { color: 'orangered' },

                                            }}
                                            onClick={() => navigate(pageroute[page])}
                                        >
                                            {page}
                                        </Typography>

                                        {/* Dropdown (Desktop) */}
                                        {hoverAbout && (
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: '40px',
                                                    left: 0,
                                                    backgroundColor: 'white',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                                                    zIndex: 20,
                                                    overflow: 'hidden',
                                                    minWidth: '180px',
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
                                                            transition: '0.3s',
                                                            '&:hover': {
                                                                backgroundColor: 'orangered',
                                                                color: 'white',
                                                            },
                                                        }}
                                                    >
                                                        {item}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        )}
                                    </Box>
                                ) : (
                                    <Typography
                                        key={page}
                                        component="a"
                                        href="#"
                                        sx={{
                                            my: 2,
                                            color: 'black',
                                            fontWeight: 500,
                                            position: 'relative',
                                            '&:hover': {
                                                color: 'orangered',
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '3px',
                                                    bottom: 0,
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

                        {/* Login Button */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button text="Login" variant="normal" />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Drawer (Mobile) */}
            {/* Drawer (Mobile) */}
            <Drawer
                anchor="left" // open from left
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: 270,
                        background: 'linear-gradient(135deg, #fff8f3, #ffe4d3)',
                        borderRight: '4px solid orangered',
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '20px',
                        boxShadow: '5px 0 25px rgba(0,0,0,0.25)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between', // keeps login button at bottom
                        overflow: 'hidden',
                    },
                }}
            >
                <Box ref={drawerRef} sx={{ position: 'relative', flex: 1 }}>
                    <IconButton
                        onClick={toggleDrawer(false)}
                        sx={{ position: 'absolute', top: 10, right: 10, color: 'orangered', zIndex: 2 }}
                    >
                        <X />
                    </IconButton>

                    {/* Menu List */}
                    <Box
                        sx={{
                            paddingTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start', // left-align all text
                            gap: 1.5,
                            px: 3,
                        }}
                    >
                        {pages.map((page, i) =>
                            page === 'About' ? (
                                <Box key={page} sx={{ width: '100%' }}>
                                    <Box
                                        ref={(el) => (listItemRefs.current[i] = el)}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            py: 1.5,
                                            borderRadius: '10px',
                                            transition: 'all 0.3s ease',
                                            '&:hover': { backgroundColor: 'rgba(255,68,0,0.1)' },
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 600, color: 'black' }}>{page}</Typography>
                                        <IconButton
                                            onClick={() => setAboutOpen(!aboutOpen)}
                                            sx={{ color: 'orangered', p: 0 }}
                                        >
                                            {aboutOpen ? <Minus /> : <Plus />}
                                        </IconButton>
                                    </Box>

                                    {/* Dropdown (Mobile) */}
                                    {aboutOpen && (
                                        <Box sx={{ pl: 4, display: 'flex', flexDirection: 'column', gap: 1, mb: 1 }}>
                                            {aboutDropdown.map((sub) => (
                                                <Typography
                                                    key={sub}
                                                    sx={{
                                                        fontWeight: 500,
                                                        color: 'black',
                                                        transition: '0.3s',
                                                        '&:hover': { color: 'orangered' },
                                                    }}
                                                >
                                                    {sub}
                                                </Typography>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            ) : (
                                <ListItem
                                    key={page}
                                    button
                                    ref={(el) => (listItemRefs.current[i] = el)}
                                    sx={{
                                        borderRadius: '10px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'orangered',
                                            '& .MuiListItemText-primary': { color: 'white' },
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={page}
                                        primaryTypographyProps={{
                                            fontWeight: 600,
                                            color: 'black',
                                            textAlign: 'left', // left or 'center'
                                        }}
                                    />
                                </ListItem>
                            )
                        )}
                    </Box>

                    {/* Login Button at bottom */}
                    <Box sx={{ p: 3 }}>
                        <Button text="Login" variant="normal" />
                    </Box>
                </Box>
            </Drawer>

        </div>
    );
};

export default Header;
