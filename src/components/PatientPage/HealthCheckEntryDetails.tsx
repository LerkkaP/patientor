import { HealthCheckEntry } from "../../types";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface HealthCheckEntryDetailsProps {
    entry: HealthCheckEntry;
    showDiagnosis: (code: string) => string | undefined;

}

const HealthCheckEntryDetails: React.FC<HealthCheckEntryDetailsProps> = ({ entry, showDiagnosis }) => {

    const showHeart = (rating: number) => {
        if (rating === 0) {
            return <FavoriteIcon style={{fill: "green"}}/>
        } return <FavoriteIcon style={{fill: "yellow"}}/>
    }

    return (
        <div style={{border: '1.5px solid black', borderRadius: "10px", padding: "5px"}}>
            <p>{entry.date} < MedicalServicesIcon/></p>
            <p><i>{entry.description}</i></p>
            {showHeart(entry.healthCheckRating)}
            <ul>
                {entry.diagnosisCodes?.map((code: string, index: number) => (
                    <li key={index}>{code} {showDiagnosis(code)}</li>
                ))}
            </ul>
            <p>Diagnose by {entry.specialist}</p>
        </div>
    );
};


export default HealthCheckEntryDetails;