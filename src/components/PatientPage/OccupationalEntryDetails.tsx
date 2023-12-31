import {OccupationalHealthcareEntry } from "../../types";
import WorkIcon from '@mui/icons-material/Work';

interface OccupationalEntryDetailsProps {
    entry: OccupationalHealthcareEntry;
    showDiagnosis: (code: string) => string | undefined;
} 

const OccupationalEntryDetails: React.FC<OccupationalEntryDetailsProps> = ({ entry, showDiagnosis }) => {
    return (
        <div style={{border: '1.5px solid black', borderRadius: "10px", padding: "5px"}}>
            <p>{entry.date} < WorkIcon/> {entry.employerName}</p>
            <p><i>{entry.description}</i></p>
            <ul>
                {entry.diagnosisCodes?.map((code: string, index: number) => (
                    <li key={index}>{code} {showDiagnosis(code)}</li>
                ))}
            </ul>
            <p>Diagnose by {entry.specialist}</p>
        </div>
    );}


export default OccupationalEntryDetails;