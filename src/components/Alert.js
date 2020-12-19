/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';
import {array, shape, string, arrayOf} from 'prop-types';
import {Row, Col} from 'react-native-easy-grid';
import {withTheme} from 'react-native-elements';
import {SCREEN_WIDTH} from '../utils/constants';

const AlertComponent = (props) => {
  const {
    theme: {colors},
  } = props;
  return (
    <View>
      {props.feedbacks.map((feedback, i) => (
        <View
          key={i}
          style={{
            backgroundColor:
              feedback.feedbackType === 'error' ? 'red' : colors.primary,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderColor: 'white',
            borderWidth: 1,
            zIndex: 20,
            alignSelf: 'flex-end',
            position: 'absolute',
            bottom: 0,
            width: SCREEN_WIDTH,
          }}>
          {feedback.feedbackType === 'alert'
            ? Alert.alert(feedback.title, feedback.message)
            : null}
          {
            <View>
              <Row
                style={{
                  width: '100%',
                  marginVertical: 10,
                }}>
                <Col
                  size={1}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 24,
                      color: 'white',
                    }}>
                    x
                  </Text>
                </Col>
                <Col size={9} style={{justifyContent: 'center', padding: 4}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                    }}>
                    {feedback.message}
                  </Text>
                </Col>
              </Row>
            </View>
          }
        </View>
      ))}
    </View>
  );
};

AlertComponent.defaultProps = {
  feedbacks: [],
};

AlertComponent.propTypes = {
  feedbacks: arrayOf(shape({})).isRequired,
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
};

const mapStateToProps = ({feedback}) => ({
  feedbacks: feedback.feedbacks,
});

export default connect(mapStateToProps)(withTheme(AlertComponent));
