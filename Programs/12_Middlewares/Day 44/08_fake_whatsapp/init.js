const mongoose = require("mongoose");

const Chat = require("./models/chat")

main()
.then(() => {
    console.log("Connection successful!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [{
    from: "shadab",
    to: "adab",
    msg: "Hello! How are you?",
    created_at: new Date(),
    updated_at:{type: Date, default: undefined}
},
{
    from: "adab",
    to: "shadab",
    msg: "I am Fine! What about you?",
    created_at: new Date(),
    updated_at:{type: Date, default: undefined}
},
{
    from: "rohit",
    to: "amit",
    msg: "Hello! Do you remember me?",
    created_at: new Date(),
    updated_at:{type: Date, default: undefined}
},
{
    from: "priya",
    to: "raghav",
    msg: "Can you please help me in today's homework?",
    created_at: new Date(),
    updated_at:{type: Date, default: undefined}
},
{
    from: "sumit",
    to: "riya",
    msg: "Can you please share today's classwork?",
    created_at: new Date(),
    updated_at:{type: Date, default: undefined}
}];

Chat.insertMany(allChats)