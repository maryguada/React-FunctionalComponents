import React from 'react'; 

import ReactDOM from 'react-dom';

import faker from 'faker'; 

import CommentDetail from './CommentDetail'; 
import ApprovalCard from './ApprovalCard'; 

const App = () => {
    return (
        <div className="ui container comments">

        <ApprovalCard>
            <CommentDetail 
            author="Sam" 
            timeMade="Today at 3:55pm" 
            comment="This sounds amazing!" 
            photo = {faker.image.avatar()}/> 
        </ApprovalCard> 

        <ApprovalCard>
            <CommentDetail
            author ="Alex" 
            timeMade="Today at 4:55pm" 
            comment ="You got it!" 
            photo = {faker.image.avatar()} /> 
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
            author ="Jane"
            timeMade="Yesterday at 5:10pm"
            comment ="Good job!" 
            photo = {faker.image.avatar()} /> 
        </ApprovalCard> 
        </div>
    );
}; 

ReactDOM.render(<App />, document.querySelector('#root'));

 