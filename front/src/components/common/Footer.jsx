import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/common/footer.css";

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className={`footer--wrapper ${this.props.className}`}>
					<div className="footer-top__div">
						<div>
							<a
								href="https://facebook.com"
								className="fa fa-facebook textless-link-icon">
								<p />
							</a>
						</div>
						<div>
							<a
								href="http://instagram.com"
								className="fa fa-instagram textless-link-icon">
								<p />
							</a>
						</div>
						<div>
							<a
								href="http://twitter.com"
								className="fa fa-twitter textless-link-icon">
								<p />
							</a>
						</div>
					</div>

					<div className="footer-nav__div">
						<Link to="/stockists">STOCKISTS</Link>
						<Link to="/faq">FAQ</Link>
						<Link to="/privacy">PRIVACY</Link>
						<Link to="/terms-of-use">TERMS OF USE</Link>
					</div>
					<div className="footer-bot__div">
						<span>Powered By</span>
						<a href="http://techub.ge/">Techub</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
