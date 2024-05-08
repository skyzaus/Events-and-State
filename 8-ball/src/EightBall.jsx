import React, {useState} from "react";
const EightBall = () => {
    const [question, setAnswers] = useState({msg: "Think of a Question", color: "black"});
    
    
    const Answers = [
    
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "green" },
        { msg: "Reply hazy, try again.", color: "green" },
        { msg: "Ask again later.", color: "green" },
        { msg: "Better not tell you now.", color: "green" },
        { msg: "Cannot predict now.", color: "green" },
        { msg: "Concentrate and ask again.", color: "green" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ];

    
    return (
        <div onClick={() => setAnswers(Answers[Math.floor(Math.random()*Answers.length)])} className="EightBall" style={{backgroundColor: question.color}} > 
            <p className="EightBall-Text">{question.msg}</p>
        </div>
    )
}
 

export default EightBall