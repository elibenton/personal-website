import React from "react";
import Helmet from "react-helmet";
import config from "../../data/site-config";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./index.css";

export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div>
				<Helmet>
					<meta name="description" content={config.siteDescription} />
				</Helmet>
				<Navbar />
				{children}
				<Footer />
			</div>
		);
	}
}
