import SegmentTemplate from "../templates/SegmentTemplate";
import SubSegmentTemplate from "../templates/SubSegmentTemplate";

const Projects = ({ projects }) => {
  const data = Object.entries(projects.content);
  const singleSegment = data.length === 1;

  return (
    <SegmentTemplate data={projects}>
      {data.map((d) => (
        <SubSegmentTemplate
          headline={d[0]}
          content={d[1]}
          key={d[0]}
          singleSegment={singleSegment}
        />
      ))}
    </SegmentTemplate>
  );
};

export default Projects;
