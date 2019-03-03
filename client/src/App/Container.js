import React, { Component } from "react";
import axios from "axios";
import View from "./View";
import {
  generateRomanNumeralEndpoint,
  generateNumberEndpoint
} from "../utils/api";
import {
  pipeline,
  validateRequired,
  validateMinValue,
  validateMaxValue,
  validateRomanNumeral
} from "../utils/validation";

class App extends Component {
  state = {
    isLoading: false,
    isDisabled: false,
    isConvertingToNumber: false,
    errorMessage: "",
    value: 1,
    result: ""
  };

  get options() {
    const { isConvertingToNumber } = this.state;

    return [
      {
        label: "Roman Numeral",
        checked: isConvertingToNumber,
        onChange: () =>
          this.setState({
            isConvertingToNumber: true,
            value: "",
            result: "",
            isDisabled: true
          })
      },
      {
        label: "Number",
        checked: !isConvertingToNumber,
        onChange: () =>
          this.setState({
            isConvertingToNumber: false,
            value: 1,
            result: "",
            isDisabled: false
          })
      }
    ];
  }

  /**
   * @description validates whether input is valid or not
   * @param {*} event
   * @param {*} input
   * @returns {void}
   */
  handleChange = (e, { value }) => {
    const newState = { errorMessage: "", isDisabled: false, result: "" };
    try {
      const { isConvertingToNumber } = this.state;

      // choose validators
      const validators = !isConvertingToNumber
        ? [validateRequired, validateMinValue(1), validateMaxValue(3999)]
        : [validateRequired, validateRomanNumeral];

      // pipeline of validators
      const errorMessage = pipeline(validators, value);

      if (errorMessage) {
        newState.errorMessage = errorMessage;
        newState.isDisabled = true;
      }

      newState.value = value;
    } catch ({ message = "An error has occured. Please try again later." }) {
      newState.errorMessage = message;
    } finally {
      this.setState(newState);
    }
  };

  /**
   * @description handles form submission
   * @returns {void}
   */
  handleSubmit = async () => {
    const newState = {
      isLoading: true,
      errorMessage: "",
      romanNumeral: ""
    };

    try {
      this.setState(newState);

      const { value, isConvertingToNumber } = this.state;

      const handleEndpoint = isConvertingToNumber
        ? generateRomanNumeralEndpoint
        : generateNumberEndpoint;

      const {
        data: {
          data: { result }
        }
      } = await axios.get(handleEndpoint(value));

      newState.result = result;
    } catch ({
      response,
      message = "An error has occured. Please try again later."
    }) {
      const customErrorMessage = response && response.data;

      newState.errorMessage = customErrorMessage || message;
    } finally {
      newState.isLoading = false;
      newState.isDisabled = false;
      this.setState(newState);
    }
  };

  render() {
    return (
      <View
        {...this.state}
        options={this.options}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default App;
