import { View, TextInput } from 'react-native';

const MultiLine = (props) => {
  return <TextInput {...props} editable maxLength={40} />;
};

export default MultiLine;
