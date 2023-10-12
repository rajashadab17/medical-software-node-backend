import Patient from "../model/PatientData.js";


export const addPatient = async (request, response) => {
    try {
        try {
            let exist = await Patient.findOne({ GR_Number: request.body.GR_Number });
            if (exist) {
                response.status(200).json('Patient already exists');
                return;
            }
            const newPatient = new Patient(request.body);
            await newPatient.save();
            response.status(200).json(newPatient);

        } catch (error) {
            response.status(500).json(error);
        }
    } catch (error) {
        console.log(error)
    }
}

export const CheckPatientMasterEntryRecord = async (request, response) => {
    try {

        let patientData = await Patient.findOne({ GR_Number: request.params.GR_Number })
        if (patientData) {
            return response.status(200).json(patientData)
        } else {
            return response.status(200).json("Patient doesn't Exist")
        }
    } catch (error) {
        response.status(500).json(error);
    }

}

export const editPatientMasterEntryRecord = async (request, response) => {


    try {
        const editPatient = new Patient(request.body)
        await Patient.updateOne({ GR_Number: request.params.GR_Number }, editPatient)
        return response.status(201).json({ message: "Patient's Data has been updated!" })
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}

export const deletePatientMasterEntryRecord = async (request, response) => {
    try {
        await Patient.deleteOne({ GR_Number: request.params.GR_Number })
        return response.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}

export const getAllPatientRecord = async (request, response) => {
    try {
        let allPatientData = await Patient.find({})
        return response.status(200).json(allPatientData)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}