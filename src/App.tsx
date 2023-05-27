import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  color: blue;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Teste</Text>
      <TextNew>TSTESAFSDFA</TextNew>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    color: 'red',
  },
});
export default App;
