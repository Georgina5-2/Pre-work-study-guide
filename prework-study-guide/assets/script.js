var topics= ["HTML", "CSS", "Git", "Javascript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics()
{
    for(x=0; x<topics.length; x++)
{
    console.log(topics[x]);
}
}

function selectTopic()
{
    if(randomTopic==="HTML")
    {
        console.log("Let's study HTML");
    }
    else if(randomTopic==="CSS")
    {
        console.log("Let's study CSS");
    }
    else if(randomTopic==="Git")
    {
        console.log("Let's study Git");
    }
    else if(randomTopic==="Javascript")
    {
        console.log("Let's study Javascript");
    }
    else
    {
        console.log("Please try again");
    }
    console.log("Here are some of the topics we studied during the prework course");
    listTopics();
    console.log("Which topic you would like to study first?");
    selectTopic();
}
