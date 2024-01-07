import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const assistant = await openai.beta.assistants.create({
//     name:"Economics Tutor",
//     instructions: "You are and economics tutor",
//     tools: [
//       {
//       type:"code_interpreter",
//       },
//     ],
//     model:"gpt-4-1106-preview"
//   });
  
  // assistant_id = asst_OaCROTWTGyCg14jRXrc1o6gz


// const assistant = await openai.beta.assistants.retrieve("asst_OaCROTWTGyCg14jRXrc1o6gz");
// console.log(assistant);

//Threads

//create thread
// const thread = await openai.beta.threads.create();
// console.log(thread);

//create message 
// const message = await openai.beta.threads.messages.create(thread.id, {
//   role: "user",
//   content: "what is 500*500?"
// });

//run assistant
// const run = await openai.beta.threads.runs.create(thread.id, {
//   assistant_id: assistant.id,
//   instructions: "Address the user as Chris"
// });

//retrieve latest thread response
// const run = await openai.beta.threads.runs.retrieve(
//   "thread_5Uml4fmUnIylPc4sVejJp0O6", 
//   "run_5rdOtQ5vB8K1BZDuP058Ujyk"
// );
// console.log(run);


const messages = await openai.beta.threads.messages.list("thread_5Uml4fmUnIylPc4sVejJp0O6");
// console.log(messages);

messages.body.data.forEach((message) => {
  console.log(message.content);
})


// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening at http://localhost:${port}`));



