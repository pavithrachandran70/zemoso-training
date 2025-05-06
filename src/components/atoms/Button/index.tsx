import { LabelWrapper } from "../../theme/styled";

interface Props {
  label: string;
}

const StatusLabel: React.FC<Props> = ({ label }) => {
  return <LabelWrapper>{label}</LabelWrapper>;
};

export default StatusLabel;

