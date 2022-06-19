// have a while loop and for loop
//while its not eqaul to quit u keep looping
//prompt 
//empty array
//ask to list it will loop over the array

//var called input for user 
let input = prompt('what you like to do ')
//array of things to do 
const toDos = ['collect eggs', 'feed dog']
// !== so user is able to quit and we us && so the user also has the option to use q to quit
while(input !== 'quit' && input !== 'q'){
  // input === list so when user types list the see list 
  if(input === 'list'){
    console.log('*********')
    ////for(let i initialexpression; condition; increment expression) i < todos.length gives you the condition to loop through the array until false
    for( let i = 0; i < toDos.length; i++)
      console.log(`${i}: ${toDos[i]}`)
    console.log('*********')
  }else if (input === 'new'){
    const newTodo = prompt('ok, whats new todo');
  toDos.push(newTodo);
  console.log(`${newTodo} added to the list `)
  }else if (input === 'delete'){
    const index = parseInt(prompt('ok enter an index to delete:'));
    if(!Number.isNaN(index)){
    const deleted = toDos.splice(index, 1);
    console.log(`ok deleted ${deleted[0]}`)
    }else {
      console.log('unkown index')
    }
  }
input = prompt('what you like to do ')
  
}
console.log('ok quit the app')