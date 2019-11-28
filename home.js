import React from 'react';
// import Hero from '../components/Hero';
// import Banner from '../components/Banner';
// import FeaturedRooms from '../components/FeaturedSports';
// import CarouselPage from '../components/CarouselPage';
import { Link } from 'react-router-dom';
import Landingpage from './Landingpage';
import Livepage from './Livepage';
import Aboutpage from './Aboutpage';
import Servicepage from './Servicepage';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Footer from './Footer';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
// import SidenavBarMenu from '../components/SidenavBarMenu';

export default function Home() {
	return (
		<React.Fragment>
			{/* <SidenavBarMenu /> */}
			<Landingpage />
			<Livepage />
			<Aboutpage />
			<Servicepage />
			<Testimonials />
			<Contact />
			<Footer />
	
			<ScrollUpButton />
		</React.Fragment>
	);
}
