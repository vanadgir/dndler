import Collapsible from "../../EventCallers/Collapsible";

const FeatureEntry = (props) => {
  return (
    <li className="characterFeatureEntry leftAlign">
      <Collapsible
        id={props.feature["Name"] + props.index}
        value={props.feature["Name"]}
        neverBar={props.noDivider}
        category="feature"
        collapsed={true}
        labelSpans={[props.feature["Name"]]}
      >
        <h5 className="featureEntry-source">{props.feature["Source"]}</h5>
        <p className="featureEntry-desc">{props.feature["Description"]}</p>
      </Collapsible>
    </li>
  );
};

export default FeatureEntry;
