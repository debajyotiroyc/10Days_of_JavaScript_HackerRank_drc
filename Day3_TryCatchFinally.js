function reverseString(s) {
    try{
        let arr=s.split("");
        var n=Math.floor((arr.length)/2);
        for(var i=0;i<n;i++)
        {
            var t=arr[i];
            arr[i]=arr[arr.length-1-i];
            arr[arr.length-1-i]=t;
            
        }
        console.log(arr.join(""));
    
    }catch(e){
        console.log(e.message)
        console.log(s)
    }
}