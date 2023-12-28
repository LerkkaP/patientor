import { Patient } from "../../types";
import patientService from "../../services/patients";
import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';


const PatientPage = () => {
    const [patient, setPatient] = useState<Patient[]>([]);
    const { id } = useParams();
    const fetchPatient = async () => {
        if (id) {
          const patient = await patientService.getPatient(id);
          setPatient(patient);
        } else {
          console.error('ID is undefined');
        }
      };

    useEffect(() => {
        fetchPatient();
    }, []);

    const setIcon = (gender: string) => {
        switch(gender) {
            case("male"): {
                return <MaleIcon />;
            }
            case("female"): {
                return <FemaleIcon />;
            }
            case("other"): {
                return <TransgenderIcon />;
            }
        }
    };
    
    return (
        <div>
            {patient.map((patient: Patient) => 
                <div key={patient.id}>
                    <h2>{patient.name} {setIcon(patient.gender)}</h2>
                    <div>ssn: {patient.ssn}</div>
                    <div>occupation: {patient.occupation}</div>
                </div>
            )}
        </div>
    );
};


export default PatientPage;