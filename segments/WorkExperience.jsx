import { workHistory } from "../data/cv";
import SubSegmentTemplate from "../templates/SubSegmentTemplate";
import SegmentTemplate from "../templates/SegmentTemplate";
const WorkExperience = () => {
  return (
    <SegmentTemplate data={workHistory}>
      {Object.entries(workHistory.content).map((d) => (
        <SubSegmentTemplate headline={d[0]} content={d[1]} key={d[0]} />
      ))}
    </SegmentTemplate>
  );
};

export default WorkExperience;
