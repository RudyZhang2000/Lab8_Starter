# Lab 8 - Starter  (Rudy Zhang)
 1. Where would you fit your automated tests in your Recipe project development pipeline?

 Within a Github action that runs whenever code is pushed. THis is because we want to have them run wehenever code is pushed to ensure that everything is running smoothly.

 2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No, we would want to use a unit test for specific functons.

3. Would you use a unit test to test the "message feature of a messaging application? Why or why not? For this question, assume the "message" feature allows a user to write and send a message to another user.

No, it would be best to utilize end to end tests for this feature. A messaging system has a lot of different parts and is quite complex, and the unit tests are primarily used to test single functions or single pieces of code.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. This feature could be tested using a unit test. We can create a few mock messages or test cases to represent various potential user messages. We can have the lengths of some be less than 80 characters, some be 80 characters, and some be over 80 characters. We can then assert the behavior to compare on what we expect given that input.
