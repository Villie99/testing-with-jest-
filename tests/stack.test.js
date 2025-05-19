const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});


test("Check the pop fucntion and if it removed the name", () => {
    stack.push("Kalle");
    
    const name = stack.pop();
    
    expect(name).toBe("Kalle"); //Pass
    expect(stack.peek()).toBeUndefined();//pass
    
    //expect(name).toBe("Benjamin"); //Fail
   //expect(stack.peek()).toBe("Kalle") //Fail
    
    
});
