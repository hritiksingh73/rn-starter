import React from 'react';
import {
  Button as PaperButton,
  ButtonProps,
  useTheme,
} from 'react-native-paper';

import makeStyles from './style';

interface IButton extends Omit<ButtonProps, 'children'> {
  title: string;
  onPress: () => void;
  mode?: 'text' | 'outlined' | 'contained';
}
//TODO:- basic button, further customization can be done
const Button = ({
  title,
  onPress,
  mode = 'contained',
  style,
  ...rest
}: IButton) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <PaperButton
      mode={mode}
      onPress={onPress}
      {...rest}
      style={style ? style : styles.button}>
      {title}
    </PaperButton>
  );
};

export default Button;
