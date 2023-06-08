import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./codedamn.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">CodeDamn</div>
							<div className="work-subtitle">
								Technical Content Writer
							</div>
							<div className="work-duration">Aug 2022 - Sep 2022</div>
						</div>

						<div className="work">
							<img
								src="./pepcoding.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Pepcoding</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Jan 2022 - Jun 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
