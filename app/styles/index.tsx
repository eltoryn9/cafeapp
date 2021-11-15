import { Icon } from "react-native-vector-icons/Icon"

export type iconProps = {
    name: string;
    size: number;
    color: string;
}

 
export const iconStyle = ({name, size, color}: iconProps) => {
    return <Icon name={name} size={size} color={color}/> 
}