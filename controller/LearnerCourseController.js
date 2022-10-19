const LearnerModel=require("../Models/LearnerModel")
const CourseModel=require("../Models/CourseModel")

//add-learner
exports.addLearner= (req,res) => {
   const learner=new LearnerModel({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
   })

   learner.
   save().
   then((data)=>{
    res.send(data)
   }).
   catch((error)=>
   {
     res.send(error)
   })
}
 
//add-course
exports.addCourse= (req,res) => {
    const course=new CourseModel({
       id:req.body.id,
       name:req.body.name,
       description:req.body.description
    })
 
    course.
    save().
    then((data)=>{
     res.send(data)
    }).
    catch((error)=>
    {
      res.send(error)
    })
 }



//get-all-learners
exports.getAllLearners = (req,res) => {
    const learners = LearnerModel.find()
    learners.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}
 
//get-all-courses
exports.getAllCourses = (req,res) => {
    const courses = CourseModel.find()
    courses.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}

//get-learner-by-name
exports.getLearnerByName=(req,res) => {
 
    const learners= LearnerModel.find({name:req.params.name})
    learners.
    then( (data) => {
        res.send(data)
    }).
    catch( (error) => {
        res.send(error)
    })

}      

//get-course-by-name
exports.getCourseByName=(req,res) => {
 
    const courses= CourseModel.find({name:req.params.name})
    courses.
    then( (data) => {
        res.send(data)
    }).
    catch( (error) => {
        res.send(error)
    })

}  

//get-course-by-id
exports.getCourseById=(req,res) => {
 
    const courses= CourseModel.find({id:req.params.id})
    courses.
    then( (data) => {
        res.send(data)
    }).
    catch( (error) => {
        res.send(error)
    })

}  



// updateEmailByNameLearner
exports.updateEmailByNameLearner = (req,res) => {
    LearnerModel.updateOne({name:req.params.name}, { $set: {email : req.params.email}}, () => {
        res.status(200).json({
            message : "Successfully updated "+req.params.name+"'s email by "+req.params.email
        })
    })
}

// updatePasswordByNameLearner
exports.updatePasswordByNameLearner = (req,res) => {
    LearnerModel.updateOne({name:req.params.name}, { $set: {password : req.params.password}}, () => {
        res.status(200).json({
            message : "Successfully updated "+req.params.name+"'s password by "+req.params.password
        })
    })
}

//updateNameByIdCourse
exports.updateNameByIdCourse = (req,res) => {
    CourseModel.updateOne({id:req.params.id}, { $set: {name : req.params.name}}, () => {
        res.status(200).json({
            message : "Successfully updated "+req.params.id+"'s name by "+req.params.name
        })
    })
}

// updateDescriptionByIdCourse
exports.updateDescriptionByIdCourse = (req,res) => {
    CourseModel.updateOne({id:req.params.id}, { $set: {description : req.params.description}}, () => {
        res.status(200).json({
            message : "Successfully updated "+req.params.id+"'s description by "+req.params.description
        })
    })
}


// deleteLearner
exports.deleteLearnerByName = (req,res) => {
    LearnerModel.deleteOne({name:req.params.name}, () => {
        res.status(200).json({
            message : "Successfully Deleted "+req.params.name+"'s Data"
        })
    })
}


// deleteCourse
exports.deleteCourseById = (req,res) => {
    CourseModel.deleteOne({id:req.params.id}, () => {
        res.status(200).json({
            message : "Successfully Deleted "+req.params.id+"'s Data"
        })
    })
}
