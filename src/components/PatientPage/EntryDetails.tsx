import { Entry } from "../../types";
import HospitalEntryDetails from "./HospitalEntryDetails";
import HealthCheckEntryDetails from "./HealthCheckEntryDetails";
import OccupationalEntryDetails from "./OccupationalEntryDetails";

interface EntryDetailsProps {
    entry: Entry;
    showDiagnosis: (code: string) => string | undefined;
}

const EntryDetails: React.FC<EntryDetailsProps> = ({ entry, showDiagnosis }) => {

    const assertNever = (value: never): never => {
        throw new Error(
          `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
      };

    switch(entry.type) {
        case "Hospital":
            return <HospitalEntryDetails entry={entry} showDiagnosis={showDiagnosis}/>
        case "OccupationalHealthcare":
            return <OccupationalEntryDetails entry={entry} showDiagnosis={showDiagnosis}/>
        case "HealthCheck":
            return <HealthCheckEntryDetails entry={entry} showDiagnosis={showDiagnosis}/>
        default:
            return assertNever(entry);
    }
}

export default EntryDetails;
