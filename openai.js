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



  const assistant = await openai.beta.assistants.retrieve("asst_OaCROTWTGyCg14jRXrc1o6gz");

  console.log(assistant);

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening at http://localhost:${port}`));



