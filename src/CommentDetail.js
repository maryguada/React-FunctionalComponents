import React from 'react'; 
 

const CommentDetail = (props) => {
    console.log(props); 
    return (
        <div className ="comment"> 
            <a href="/" className ="avatar">
                <img alt="avatar" src={props.photo}/>
            </a>

            <div className="content">
                <a href="/" className = "author">
                    {props.author}
                </a>

                <div className ="metadata">
    <span className="date"> {props.timeMade} </span>
                </div>

                <div className="text"> { props.comment } </div>
            </div>
        </div>
    );
}; 

export default CommentDetail; //makes the comment detail component 
// available to outside files. 

