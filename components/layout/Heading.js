function Heading(props) {
  const Tag = props.headingLevel;
  return (
    <Tag
      style={{
        textAlign: `${props.centered ? "center" : "auto"}`,
        textTransform: `${props.uppercase ? "uppercase" : "auto"}`
      }}
    >
      {props.children}
    </Tag>
  );
}

export default Heading;
