import React, { FC } from "react";
import { TouchableOpacity, View, ActivityIndicator, Image } from "react-native";
import CustomText from "./CustomText";
import { Icon, withTheme, Theme } from "react-native-elements";

const Accordion: FC<{
  focused: boolean;
  onPress: () => void;
  theme: Theme;
  country: any;
  converteds: any;
}> = ({ onPress, theme, country, focused = false, converteds }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: focused ? "#f0faff" : "#fff",
        elevation: 10,
        marginVertical: 1,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          flexDirection: "row",
          padding: 20,
          paddingRight: "13%",
          paddingBottom: 5,
        }}
      >
        <View style={{ width: "100%", justifyContent: "flex-start" }}>
          <CustomText
            style={{
              fontWeight: "bold",
              color: focused ? theme?.colors?.primary : "#444444",
              fontSize: 18,
            }}
          >
            {country.name}
          </CustomText>
          <CustomText
            style={{
              paddingBottom: 2,
              color: "#444444",
            }}
          >
            <CustomText style={{ fontWeight: "bold" }}>Capital:</CustomText>{" "}
            {country.capital}
          </CustomText>
          {converteds &&
            country?.currencies.map((oneCurrency) => {
              return (
                <CustomText
                  style={{
                    paddingBottom: 2,
                    color: "#444444",
                  }}
                >
                  <CustomText style={{ fontWeight: "bold" }}>
                    Amount in {oneCurrency.code}:
                  </CustomText>{" "}
                  {`${oneCurrency.code} ${converteds[oneCurrency.code]}`}
                </CustomText>
              );
            })}
        </View>
        <View style={{ width: "20%", justifyContent: "center" }}>
          <Icon
            name={focused ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            type="material"
            color={theme?.colors?.primary}
          />
        </View>
      </TouchableOpacity>
      {focused && (
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        />
      )}

      {focused && (
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {country.languages.map((language) => (
            <View
              style={{
                marginHorizontal: 1,
                padding: 5,
                flexDirection: "row",
              }}
            >
              <CustomText
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: 13,
                }}
              >
                {language.name}
              </CustomText>
              <Icon
                type="material-community"
                color={theme?.colors?.primary}
                name="check"
                size={20}
              />
            </View>
          ))}
        </View>
      )}
      {focused && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 10,
          }}
        >
          <View>
            <CustomText
              style={{
                fontSize: 13,
              }}
            >
              Calling Code(s):
            </CustomText>
            <CustomText
              style={{
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              {country.callingCodes.map((callingCode: string) => {
                return (
                  <CustomText
                    style={{
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    {callingCode}
                  </CustomText>
                );
              })}
            </CustomText>
          </View>
          <View>
            <CustomText
              style={{
                paddingLeft: 20,
                paddingBottom: 6,
                color: theme?.colors?.primary,
                fontSize: 16,
              }}
            >
              Population: {country.population}
            </CustomText>
          </View>
        </View>
      )}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 20,
          marginTop: focused ? 15 : 0,
          marginBottom: 8,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginRight: 20,
          }}
        >
          <CustomText
            style={{
              paddingBottom: 2,
              color: "#444444",
              fontWeight: "bold",
            }}
          >
            Currency:
          </CustomText>
        </View>

        <View
          style={{
            flexWrap: "wrap",
          }}
        >
          {country?.currencies.map((currency) => {
            return (
              <View
                style={{
                  backgroundColor: "#448e37",
                  marginHorizontal: 1,
                  paddingHorizontal: 5,
                }}
              >
                <CustomText
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  {currency.code}
                </CustomText>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default withTheme(Accordion);
