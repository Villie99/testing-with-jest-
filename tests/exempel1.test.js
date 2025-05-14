const stack = require('../src/stack');

test("Check the pop fucntion and if it removed the name", () => {
    stack.push("Kalle");
    
    const name = stack.pop();
    
    expect(name).toBe("Kalle"); //Pass
    expect(stack.peek()).toBeUndefined();//pass
    
    //expect(name).toBe("Benjamin"); //Fail
   //expect(stack.peek()).toBe("Kalle") //Fail
    
    
});

