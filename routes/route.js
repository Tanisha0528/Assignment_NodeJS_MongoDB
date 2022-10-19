const express=require("express")


const router=express.Router()

const controller=require("../controller/LearnerCourseController")

//api paths

router.post("/add-learner",controller.addLearner)
router.post("/add-course",controller.addCourse)

router.get("/get-all-learners",controller.getAllLearners)
router.get("/get-all-courses",controller.getAllCourses)

router.get("/get-learner-by-name/:name",controller.getLearnerByName)
router.get("/get-course-by-name/:name",controller.getCourseByName)
router.get("/get-course-by-id/:id",controller.getCourseById)




router.put("/update-email-by-name-learner/:name/:email", controller.updateEmailByNameLearner)
router.put("/update-password-by-name-learner/:name/:password", controller.updatePasswordByNameLearner)


router.put("/update-name-by-id-course/:id/:name", controller.updateNameByIdCourse)
router.put("/update-description-by-id-course/:id/:description", controller.updateDescriptionByIdCourse)



router.delete("/delete-by-name-learner/:name", controller.deleteLearnerByName)
router.delete("/delete-by-id-course/:id", controller.deleteCourseById)

module.exports=router

