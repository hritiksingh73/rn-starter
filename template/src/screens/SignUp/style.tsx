import { Dimensions, StyleSheet } from 'react-native';

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: colors.text,
    },
    signUpContainer: {
      flexDirection: 'row',
      marginVertical: 15,
      gap: 5,
    },
    signUpText: {
      color: 'blue',
    },
    image: {
      width: Dimensions.get('window').width - 100,
      height: Dimensions.get('window').width / 2,
      marginBottom: 20,
    },
  });

export default makeStyles;
