// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.




function make_shirt(size:string = 'Large', text:string = 'I love Typescript.'){
    console.log(`creating a ${size} shirt, with a message ${text}`)
}

make_shirt();

make_shirt('Medium');

make_shirt('Small', 'Live the life that you have.')