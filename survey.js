const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer001) => {
  rl.question("What\'s an activity you like doing?", (answer002) => {
    rl.question("What do you listen to while doing that?", (answer003) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer004) => {
        rl.question("What\'s your favourite thing to eat for that meal?", (answer005) => {
          rl.question("Which sport is your absolute favourite?", (answer006) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer007) => {
              console.log(`Thank you for your answers. \n Please check the summary:`);
              const answers ={
                nickname: answer001,
                activity: answer002,
                music: answer003,
                meal: answer004,
                dish: answer005,
                sport: answer006,
                superpower: answer007,
              }
              console.log(answers);
              rl.close();
            })
          })
        })
      })
    })
  })
});

//Once all questions are answered, our survey app should output a fully formed 
//paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.















