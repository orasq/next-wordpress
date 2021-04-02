function ContentWrapper(props) {
  return (
    <div className={`content-wrapper ${props.narrow ? "content-wrapper--narrow" : ""}`}>
      {props.children}
    </div>
  );
}

export default ContentWrapper;
