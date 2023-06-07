const books=[
    {ISBN:"12345Book",
    title:"Tesla!!",
    pubDate:"2023-06-07",
    language:"en",
    numpage:250,
    author:[1,2],
    publications:[1],
    category:["tech","astrnology","education"]
}
]
author=[{
    id:1,
    name:"monika",
    books:["12345Book","secretBook"]
},
{
    id:2,
    name:"elon musk",
    books:["12345Book"]   
}
]
const publication=[{
    id:1,
    name:"writer",
    books:["12345Book"]
},
{
    id:2,
    name:"writer",
    books:[]
}]
module.exports={books,author,publication};