import SegmentTemplate from "../templates/SegmentTemplate";
import SubSegmentTemplate from "../templates/SubSegmentTemplate";

const Courses = ({ courses }) => {
  return (
    <SegmentTemplate data={courses}>
      {Object.entries(courses.content)
        .slice(0, 3)
        .map((d) => (
          <SubSegmentTemplate headline={d[0]} content={d[1]} key={d[0]} />
        ))}
    </SegmentTemplate>
  );
};

export default Courses;
