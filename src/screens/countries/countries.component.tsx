import React, { useCallback, useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  clearCountries,
  getCountries,
  mergeConvertedCurrencies,
} from "../../store/actions/countries.actions";
import Accordion from "../../components/Accordion";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../utils/constants";

const Countries = () => {
  const dispatch = useDispatch();
  const [focused, setFocused] = useState("");
  const [search, setSearch] = useState("country");
  const [converteds, setConverteds] = useState(null);
  const countries = useSelector(({ countries }) => countries?.countries);
  useFocusEffect(
    useCallback(() => {
      dispatch(clearCountries());
    }, [dispatch])
  );

  const renderItem = ({ item }) => {
    return (
      <Accordion
        key={item.name}
        converteds={converteds}
        focused={item.name === focused}
        country={item}
        onPress={() => {
          if (item.name === focused) {
            setFocused("");
          } else {
            setFocused(item.name);
          }
        }}
      />
    );
  };

  const searchCountries = (
    { name, amount }: FormikValues,
    { setSubmitting }: FormikHelpers<{ name: string }>
  ) => {
    setConverteds(null);
    if (search === "country") {
      dispatch(
        getCountries(name, (_data, _error): void => {
          setSubmitting(false);
          setSearch("currency");
        })
      );
    }
    if (search === "currency") {
      dispatch(
        mergeConvertedCurrencies(amount, countries, (data, _error): void => {
          setSubmitting(false);
          if (data) {
            setConverteds(data);
          }
          setSearch("country");
        })
      );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Formik
        onSubmit={searchCountries}
        initialValues={{ name: "", amount: "0" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required!"),
        })}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
          setFieldValue,
          isSubmitting,
        }) => {
          return (
            <View style={styles.formContainer}>
              {search === "country" && (
                <CustomInput
                  value={values.name}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                  name="name"
                  errors={errors}
                  touched={touched}
                  placeholder="England"
                  label="Enter country name:"
                />
              )}
              {search === "currency" && (
                <CustomInput
                  value={values.amount}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                  name="amount"
                  keyboardType="number-pad"
                  errors={errors}
                  touched={touched}
                  placeholder="2000"
                  label="Enter amount to convert in NGN:"
                />
              )}

              <CustomButton
                primary
                loading={isSubmitting}
                disabled={isSubmitting}
                style={{
                  marginTop: 15,
                  height: 50,
                  width: "100%",
                  borderRadius: 25,
                  justifyContent: "center",
                }}
                onPress={handleSubmit}
              >
                {search === "currency" ? "Get Converted Currencies" : "Submit"}
              </CustomButton>
            </View>
          );
        }}
      </Formik>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          <FlatList
            style={{ width: "100%" }}
            data={countries}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        }
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    width: SCREEN_WIDTH - 60,
    height: SCREEN_HEIGHT * 0.45,
    borderRadius: 30,
    paddingBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default Countries;
