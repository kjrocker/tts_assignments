1. `this` does not reference either the function or its scope. Instead, it refers to the object the function was called from.
2. Call environments work like a stack. This may seem like I'm lifting from the first bit (I am, but I read the rest too!), but with how much Magic I play and how import the stack is, this revelation is huge.
3. Functions are loosely bound to their objects at best, and the method comparison to Ruby really doesn't work as well as one would like. These are not true methods.
4. JavaScript may lack multiple inheritance, but this actually solves a lot of problems when resolving a superclass.
5. ES6 introduces `__proto__`, which both makes a lot of sense, and just confuses me further. Depending on usage.
6. That insane diagram near the start. I'm going to memorize it, because Prototypal inheritance is seriously weird, but very powerful when used at a high level of skill.

[Source][https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md]
