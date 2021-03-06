import React from "react"
import { Router } from "@reach/router"
import "./variables.scss"
import "./styles.scss"
import Header from "components/header"
import HomePage from "components/page-home"
import AboutPage from "components/page-about"
import SubmitListingPage from "components/page-submit-listing"
import HikesPage from "components/page-adventures-hikes"
import ListingsPage from "components/page-listings"
import Listing from "components/page-listing-detail"
import SkipLinks from "components/skip-links"

import imgFooterLogo from "/images/icons/footer-logo.svg"

export function App() {
	return <>
		<Header />
		<main id="main">
			<Router>
				<HomePage path="/workshop4-interactions-mechanics/" />
				<AboutPage path="/workshop4-interactions-mechanics/about" />
				<SubmitListingPage path="/workshop4-interactions-mechanics/submit-listing" />
				<HikesPage path="/workshop4-interactions-mechanics/adventures-hikes" />
				<ListingsPage path="/workshop4-interactions-mechanics/listings" />
				<Listing path="/workshop4-interactions-mechanics/listing/:id" />
			</Router>
		</main>
		<footer id="footer">
			<SkipLinks variant="footer">
                <li><a href="#header">Skip to Top</a></li>
            </SkipLinks>
			<div className="layout">
				<div id="footer-logo">
					<img src={imgFooterLogo} alt="CampSpots" />
				</div>
			</div>
		</footer>
	</>
}
