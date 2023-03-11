const Button = (props) => {
  //  Write your code here.
  const {className, buttonText} = props;
  return (<button className='${className}'>{buttonText}</button>;)
};

const element = (
  //  Write your code here.
  <div className="bg-container d-flex flex-column justify-content-center">
    <h1 className="heading">Social Buttons</h1>
    <div className="text-center">
    <Button className="like-btn" buttonText="Like"/>
    <Button className="comment-btn" buttonText="Comment"/>
    <Button className="share-btn" buttonText="Share"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
