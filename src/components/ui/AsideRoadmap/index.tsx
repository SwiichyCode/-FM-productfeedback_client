import { BetweenContainer } from "@/components/container/BetweenContainer";
import { AsideCardWrapper } from "../AsideCard/styles";
import { AsideRoadmapWrapper } from "./styles";

export const AsideRoadmap = () => {
  return (
    <AsideCardWrapper>
      <AsideRoadmapWrapper>
        <BetweenContainer className="roadmap-header">
          <h2>Roadmap</h2>
          <a href="#">View</a>
        </BetweenContainer>

        <ul>
          <li>
            <div>
              <span className="planned"></span>
              <p>Planned</p>
            </div>
            <span>2</span>
          </li>
          <li>
            <div>
              <span className="in-progress"></span>
              <p>In-Progress</p>
            </div>
            <span>3</span>
          </li>
          <li>
            <div>
              <span className="live"></span>
              <p>Live</p>
            </div>
            <span>1</span>
          </li>
        </ul>
      </AsideRoadmapWrapper>
    </AsideCardWrapper>
  );
};
