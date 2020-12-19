/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, FC } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { withTheme, Icon, Theme } from "react-native-elements";
import CustomText from "../../components/CustomText";
import { useDispatch } from "react-redux";
import { changeFromFirstTimer } from "../../store/actions/auth.actions";
import FirstImage from "../../assets/icons/chat.png";
import SecondImage from "../../assets/icons/chat.png";
import { SCREEN_WIDTH, SCREEN_HEIGHT, TEXT_COLOR } from "../../utils/constants";
import { Row, Col } from "react-native-easy-grid";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const onboardInfo: {
  [key: string]: {
    title: string;
    body: string;
    image: ImageSourcePropType;
  };
} = {
  "0": {
    title: "View Countries",
    body: "View countries with registered currencies",
    image: FirstImage,
  },
  "1": {
    title: "Calculate accurate currency conversions",
    body: "Get Live updates of Currency conversions",
    image: SecondImage,
  },
};

const Onboarding: FC<{ theme: Theme }> = ({ theme: { colors } }) => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const switchContent = (direction: string | number) => {
    if (typeof direction === "string") {
      if (direction === "back") {
        if (active === 0) {
          return;
        }
        setActive((prev) => prev - 1);
      }
      if (direction === "front") {
        if (active === Object.keys(onboardInfo).length) {
          return;
        }
        setActive((prev) => prev + 1);
      }
    } else {
      setActive(direction);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(changeFromFirstTimer());
    };
  }, []);

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          padding: 30,
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Row
          style={{
            height: SCREEN_WIDTH * 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col size={15}>
            {active !== 0 && (
              <TouchableOpacity
                onPress={() => switchContent("back")}
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="arrow-left-circle"
                  color={colors?.secondary}
                  type="material-community"
                  size={25}
                />
              </TouchableOpacity>
            )}
          </Col>
          <Col
            size={70}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={onboardInfo[String(active)].image}
              style={{
                width: SCREEN_WIDTH * 0.4,
                height: SCREEN_WIDTH * 0.4,
                justifyContent: "center",
              }}
              resizeMode="contain"
            />
          </Col>
          <Col size={15}>
            {active !== Object.keys(onboardInfo).length - 1 && (
              <TouchableOpacity
                onPress={() => switchContent("front")}
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="arrow-right-circle"
                  color={colors?.secondary}
                  type="material-community"
                  size={25}
                />
              </TouchableOpacity>
            )}
          </Col>
        </Row>
        <View>
          <CustomText
            style={{
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "center",
              color: TEXT_COLOR,
            }}
          >
            {onboardInfo[active].title}
          </CustomText>
          <CustomText
            style={{
              fontSize: 16,
              textAlign: "center",
              color: TEXT_COLOR,
              padding: 20,
            }}
          >
            {onboardInfo[active].body}
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 20,
          }}
        >
          {Object.keys(onboardInfo).map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => switchContent(index)}
              >
                <View
                  style={{
                    backgroundColor:
                      index === active ? colors?.secondary : colors?.primary,
                    height: 26,
                    width: 26,
                    borderRadius: 13,
                    borderColor: "#fff",
                    borderWidth: index === active ? 1 : 0,
                    marginHorizontal: 5,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <CustomButton
          primary
          onPress={(): void => {
            navigation.navigate("Home");
          }}
          textStyle={{
            fontSize: 16,
            color:
              active === Object.keys(onboardInfo).length - 1
                ? colors?.primary
                : TEXT_COLOR,
          }}
          style={{
            borderWidth: 0.5,
            borderColor: TEXT_COLOR,
            width: SCREEN_WIDTH * 0.6,
            height: 50,
            marginVertical: 20,
            marginBottom: SCREEN_HEIGHT * 0.12,
            backgroundColor:
              active === Object.keys(onboardInfo).length - 1
                ? "#fff"
                : "transparent",
            justifyContent: "center",
          }}
        >
          {active === Object.keys(onboardInfo).length - 1
            ? "PROCEED"
            : "SKIP INTRO"}
        </CustomButton>
      </View>
    </View>
  );
};

export default withTheme(Onboarding);
