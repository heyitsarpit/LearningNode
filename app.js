console.log('hey');

// var time  = 0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + "seconds have passed");
//     if(time>10){
//         clearInterval(timer);
//     }
// }, 2000);

console.log(__dirname);

console.log(__filename);


function call(fun){
    fun();
};

var saybye = function(){
    console.log("bye");
};

call(saybye);
