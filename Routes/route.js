import { Router } from "express";
import { CheckPatientMasterEntryRecord, addPatient, deletePatientMasterEntryRecord, editPatientMasterEntryRecord, getAllPatientRecord } from "../Controler/patient-controler.js";
import { checkPassword, updatePassword } from "../Controler/login-controler.js";

const router = Router()

router.get("/", (req,res)=> {
    res.send("Hello")
})

router.post("/postData", addPatient)
router.put("/update-password/:Master_Password", updatePassword)
router.get("/auth-login-data/:Password", checkPassword)
router.get("/getAllPatientData", getAllPatientRecord)
router.get("/checkMasterEntryData/:GR_Number", CheckPatientMasterEntryRecord)
router.put("/update-entry/:GR_Number", editPatientMasterEntryRecord)
router.delete("/delete-entry/:GR_Number", deletePatientMasterEntryRecord)

export default router