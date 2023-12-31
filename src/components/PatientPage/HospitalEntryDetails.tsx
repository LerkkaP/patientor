import {HospitalEntry } from "../../types";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

interface HospitalEntryDetailsProps {
    entry: HospitalEntry;
    showDiagnosis: (code: string) => string | undefined;
}

const HospitalEntryDetails: React.FC<HospitalEntryDetailsProps> = ({ entry, showDiagnosis }) => {
    return (
        <div style={{border: '1.5px solid black', borderRadius: "10px", padding: "5px"}}>
            <p>{entry.date} <LocalHospitalIcon /></p>
            <p><i>{entry.description}</i></p>
            <ul>
                {entry.diagnosisCodes?.map((code: string, index: number) => (
                    <li key={index}>{code} {showDiagnosis(code)}</li>
                ))}
            </ul>
            <p>Diagnose by {entry.specialist}</p>
        </div>
    );
};


export default HospitalEntryDetails;


     
                 