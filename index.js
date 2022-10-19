//importing express module
const express=require("express")

//importing mongoose
const mongoose=require("mongoose")

const router=require("./routes/route")
//initializing express app
const app=express()

app.listen(3000,() => {
    console.log("server running on port 3000")
})

app.use(express.json())
//default route (/) with response of string
app.use("/welcome",(req,res) =>{
    res.send("welcome to node application ")

}
)

app.use("/learner",router)
app.use("/course",router)


const uri="mongodb+srv://tanishabansal:TAN123@cluster0.jg112bv.mongodb.net/LearnerCourse?retryWrites=true&w=majority"
mongoose.
        connect(uri, {useNewUrlParser:true}).
        then(() => {console.log("Database connected")}).
        catch((error) => {console.log(error)})



