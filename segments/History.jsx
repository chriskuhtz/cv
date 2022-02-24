import { BoxedSubSegmentTemplate, SegmentTemplate } from "../templates";

const History = ({ history }) => {
  return (
    <SegmentTemplate data={history}>
      {Object.entries(history.content).map((d) => (
        <BoxedSubSegmentTemplate data={d} key={d[0]} />
      ))}
    </SegmentTemplate>
  );
};

export default History;
