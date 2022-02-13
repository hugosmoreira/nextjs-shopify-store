export default function Footer(props) {
	return (
		<footer className={"footer"}>
			<div className={"container"}>
				<div className={"row"}>
					<div className={"col-md-9"}>
						<div className={"row"}>
							<div className="col-md-2">
								<div className="footer__links">
									<span className="footer__column-title">About Us</span>
									<a href="#" className="footer__link">
										Link
									</a>
									<a href="#" className="footer__link">
										Link
									</a>
									<a href="#" className="footer__link">
										Link
									</a>
								</div>
							</div>
							
							<div className="col-md-2">
								<div className="footer__links">
									<span className="footer__column-title">Blog</span>
									<a href="#" className="footer__link">
										Link
									</a>
									<a href="#" className="footer__link">
										Link
									</a>
									<a href="#" className="footer__link">
										Link
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className={"col-md-3"}>
						<div className="footer__extra">
							<span className="footer__column-title">
								Sign Up For Newsletter 
							</span>
							<input type="text" name="email_newsletter" className="footer__input" placeholder="youremail@company.com" />
							<p>
								I{`'`}m baby viral XOXO jean shorts bushwick lyft. Pour-over man
								braid distillery, vegan vice meditation brunch cronut.
								Artisan woke street art tilde, sriracha tote bag hoodie 90{`'`}s
								glossier chambray semiotics selvage kogi man braid taiyaki.
							</p>
							<div className="footer__social-icons">
								<a href="#" className="footer__social-link">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="#" className="footer__social-link">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#" className="footer__social-link">
									<i className="fab fa-youtube"></i>
								</a>
								<a href="#" className="footer__social-link">
									<i className="fab fa-tiktok"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
        <div className="row">
          <div className="col-md-12">
            <div className="footer__bottom">
              <div className="footer__copyright">
								&copy; 2021 Hugosmr Media, LLC All Rights Reserved
              </div>
              <div className="footer__extra-links">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </div>
            </div>
          </div>
        </div>
			</div>
		</footer>
	);
}
