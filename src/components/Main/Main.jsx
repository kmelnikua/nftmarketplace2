import React from "react";
import video1 from "../../videos/internet-of-art.bc99cd34.mp4";
import video2 from "../../videos/spaces.e52ffe13.mp4";
import headerImg from '../../img/header.jpg'
import '../../index.css';
import '../../style.css';
export const Main = () => {
	console.log('ne wcommit');
	return (
		<main>
			<div className="container">
				<div className="row">
					<div className="col-md-6 mt-5 motivation" id="hero">
						<span className="motivation-header fw-bold DM-Sans">
							Discover, and collect Digital Art NFTs
						</span>
						<p className="motivation-undertext DM-Sans mt-5">
							Digital marketplace for crypto collectibles and non-fungible
							tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
						</p>

						<button className="explore-now-btn px-5 py-3 mt-5">
							<span className="DM-Sans fw-bold">Get Started</span>
						</button>
						<div className="ms-auto"></div>
					</div>
					<div className="col-md-6 ms-auto   ">
						<img
							src={headerImg}
							className="img-responsive img-fluid my-auto"
						/>
					</div>
				</div>
			</div>
			<div className="container-fluid why-us  mt-5">
				<div className="container px-5 py-3">
					<div className="">
						<div className="row justify-content-between">
							<div className="col-md-4">
								<span className="DM-Sans why-us--main-text">
									The amazing NFT art of the world here
								</span>
							</div>
							<div className="col-md-2">
								<div className="d-flex flex-column why-us--group">
									<h4>Fast Transaction</h4>
									<span className="DM-Sans">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aliquam etiam viverra tellus imperdiet.{" "}
									</span>
								</div>
							</div>
							<div className="col-md-2 ">
								<div className="d-flex flex-column why-us--group">
									<h4>Fast Transaction</h4>
									<span className="DM-Sans">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aliquam etiam viverra tellus imperdiet.{" "}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="container">
					<div className="row mt-5 --bs-gutter-x pb-5">
						<div className="col-md-7 me-auto   ">
							<video autoPlay playsInline muted loop type="video/mp4">
								<source src={video1} />
							</video>
						</div>
						<div className="col-md-5 mt-5 subscription" id="hero">
							<span className="fs-1 DM-Sans headline main-header-color fw-bold">
								The SuperRare DAO: powered by community
							</span>
							<p className="Mulish mt-4 col-md-9 fs-5">
								A new DAO comprised of $RARE token holders will help define the
								future of art and culture for a digitally native generation.
								Membership in the SuperRare DAO allows you to curate the
								platform, control marketplace parameters, and add your voice to
								one of the most ambitious art projects in the world today.
							</p>
						</div>
					</div>
					<div className="row mt-5 --bs-gutter-y pb-5">
						<div className="col-md-5 mt-5 subscription hero">
							<span className="fs-1 DM-Sans headline main-header-color fw-bold">
								A next generation NFT Platform
							</span>
							<p className="Mulish mt-4 col-md-9 fs-5">
								CryptoArt to date has evolved around centrally curated platforms
								with a single minting contract. While this was an important step
								in the evolution of the industry, we're excited to usher in a
								new era that empowers more diverse curatorial voices. SuperRare
								Spaces are independently curated storefronts designed to help
								promote artists and create a diverse art ecosystem. Each Space
								is vetted and elected by the SuperRare community.
							</p>
						</div>
						<div className="col-md-7 d-flex justify-content-center">
							<video autoPlay playsInline muted loop type="video/mp4">
								<source src={video2} />
							</video>
						</div>
					</div>
				</div>
			</div>
			
		</main>
	);
};
