var topics= ["HTML", "CSS", "Git", "Javascript"];
function listTopics()
{
    for(x=0; x<topics.length; x++)
{
    console.log(topics[x]);
}
}

function selectTopic()
{
    if(topics==="HTML")
    {
        console.log("Let's study HTML");
    }
    else if(topics==="CSS")
    {
        console.log("Let's study CSS");
    }
    else if(topics==="Git")
    {
        console.log("Let's study Git");
    }
    else if(topics==="Javascript")
    {
        console.log("Let's study Javascript");
    }
    else
    {
        console.log("Please try again");
    }
}
