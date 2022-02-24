import SegmentTemplate from "../templates/SegmentTemplate";
import SubSegmentTemplate from "../templates/SubSegmentTemplate";

const WorkExperience = ({ projects }) => {
  return (
    <SegmentTemplate data={projects}>
      {Object.entries(projects.content).map((d) => (
        <SubSegmentTemplate headline={d[0]} content={d[1]} key={d[0]} />
      ))}
    </SegmentTemplate>
  );
};

export default WorkExperience;
