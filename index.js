function Button(props) {
  const { className, buttonText } = props;
  return <button className={"button ${className}"}>{buttonText}</button>;
}

const element = (
  <div className="background">
    <h1 className="heading">social buttons</h1>
    <div>
      <Button className="btn-1" buttonText="like" />
      <Button className="btn-2" buttonText="comment" />
      <Button className="btn-3" buttonText="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
