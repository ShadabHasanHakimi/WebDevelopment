const express = require("express");
const app = express();

const mongoose = require("mongoose");

const path = require("path");

// connecting chat.js
const Chat = require("./models/chat")

// for sending PUT request
const methodOverride = require("method-override")

const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// showing the path for static files like css files
app.use(express.static(path.join(__dirname, "public")));
// for parsing data from req.body
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"));

main()
.then(() => {
    console.log("Connection successful!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// creating a data to save
// let chat1 = new Chat({
//     from: "shadab",
//     to: "adab",
//     msg: "Hello! How are you?",
//     created_at: new Date()
// });

// // saving data
// chat1.save().then((res) => {
//     console.log(res);
// });

// creating index route
// as Chat.find() is a asynchronous function, thus we have to make it await
// and await function can only be declared in async function
app.get("/chats", async(req, res, next) => {
        try{
            let chats = await Chat.find();
            res.render("index.ejs", {chats});
        }catch(err){
            next(err);
        }
    }
);

app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not found!")
    res.render("new.ejs");
});

// next added with req, res to handle error
app.post("/chats", async (req, res, next) => {
    // using try, catch for handling error
    try{
        let {from, msg, to} = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        })
        await newChat.save();
        res.redirect("http://localhost:8080/chats")
    }catch(err) { 
        // next will transfer the control to our error handler
        next(err)
    }
});

// ***************************************************************

function asyncWrap(fn){
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

// show route (NEW)
// using asyncWrap in this route
app.get("/chats/:id", asyncWrap(async (req, res, next)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    // if we enter wrong id
    if(!chat){
        // by this approach error will be given but our server will be crashed
        // throw new ExpressError(404, "Chat not found!");

        // this method will not crash our server
        next(new ExpressError(404, "Chat not found!"));
    }
    res.render("edit.ejs", {chat});
}));

// error handeling middleware
app.use((err, req, res, next) => {
    let {status=500, message="Some Error Occurred"} = err;
    res.status(status).send(message);
});

app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

// ***************************************************************

// update route: receiving put request using method-override package
app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
    // let update = await Chat.updateOne(id, {$set: {"updated_at": new Date()}});
    // console.log(update);
    res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.get("/", (req, res) => {
    res.send("Root is working!");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});