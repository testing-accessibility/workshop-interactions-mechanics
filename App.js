import React from "react"
import { Router } from "@reach/router"
import "./global-styles/variables.scss"
import "./global-styles/styles.scss"
import Header from "components/header"
import ComponentSandbox from "./component-sandbox"
import HomePage from "components/page-home"
import AboutPage from "components/page-about"
import CareersPage from "components/page-careers"
import TripIdeasPage from "components/page-trip-ideas"
import ListingsPage from "components/page-listings"
import Listing from "components/page-listing-detail"
import EventsPage from "components/page-events"
import PassesPage from "components/page-passes"
import SubmitListingPage from "components/page-submit-listing"
import HikesPage from "components/page-adventures-hikes"
import ListingsPage from "components/page-listings"
import Listing from "components/page-listing-detail"
import KeyboardExercise from "./exercise2-focus-management-js/page-listing-detail"
import ScreenReaderExercise from "./exercise3-screen-reader-overlap/page-listing-detail"
import AnnouncementsExercise from "./exercise4-announcements-with-AT/page-submit-listing"
import AppScriptingPage from "./exercise5-advanced-scripting-ARIA/page-adventures-hikes"

import imgFooterLogo from "/images/icons/footer-logo.svg"

export function App() {
	return <>
		<Header />
		<main id="main">
			<Router>
				<HomePage path="/" />
				<AboutPage path="/about" />
				<CareersPage path="/careers" />
				<ListingsPage path="/listings" />
				<Listing path="/listing/:id" />
				<SubmitListingPage path="/submit-listing" />
				<EventsPage path="/events" />
				<PassesPage path="/passes" />
				<HikesPage path="/adventures-hikes" />
				<TripIdeasPage path="/trip-ideas" />
				<KeyboardExercise path="/exercise2/:id" />
				<ScreenReaderExercise path="/exercise3/:id" />
				<AnnouncementsExercise path="/exercise4/submit-listing" />
				<AppScriptingPage path="/exercise5/adventures-hikes" />
				<ComponentSandbox path="/component-sandbox" />
			</Router>
		</main>
		<footer id="footer">
			<div className="layout">
				<div id="footer-logo">
					<img src={imgFooterLogo} alt="CampSpots" />
				</div>
			</div>
		</footer>
	</>
}
