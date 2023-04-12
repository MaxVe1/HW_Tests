function findUniqueSubstr(str)
{
    let res = 0;
     
    for(let i = 0; i < str.length ; i++)
    {
        const arr = []; 
        for(let j = i; j < str.length; j++)
        {
            if (!arr[str.charCodeAt(j)])
            {                
                res = Math.max(res, j - i + 1);                           
                arr[str.charCodeAt(j)] = true;                
            }
            else{
                break;
            }
           
        }
    }
    return `${res} Basic happy path`;
}

    console.log(findUniqueSubstr("abcabcbb"));
    console.log(findUniqueSubstr("geeksforgeeks"));
    console.log(findUniqueSubstr("bbbbbbbbbbbb")); 