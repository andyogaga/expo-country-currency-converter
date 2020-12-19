import React from 'react';
import CustomText from './CustomText';
import EngineersWorking from '../assets/images/engineers-working.png';
import {View, Image} from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
  }

  render() {
    return this.state.hasError ? (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={EngineersWorking}
          style={{width: 164, height: 164, margin: 4}}
          resizeMode="contain"
        />
        <CustomText>
          Hi, Our Engineers are working to get this fixed.
        </CustomText>
        <CustomText>Please upgrade to our latest version</CustomText>
      </View>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
