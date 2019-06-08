import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/site-config";

class PortfolioPage extends Component {
	render() {
		return (
			<Layout>
				<div className="portfolio-container">
					<Helmet title={`Portfolio | ${config.siteTitle}`} />
					<h1>This is my portfolio.</h1>
				</div>
			</Layout>
		);
	}
}

export default PortfolioPage;
