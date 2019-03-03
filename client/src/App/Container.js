import React, { Component } from "react";
import axios from "axios";
import View from "./View";
import { generateRomanNumeralEndpoint } from "../utils/api";
import {
  pipeline,
  validateRequired,
  validateMinValue,
  validateMaxValue
} from "../utils/validation";

class App extends Component {
  state = {
    isLoading: false,
    isDisabled: false,
    errorMessage: "",
    value: 1,
    romanNumeral: ""
  };

  /**
   * @description validates whether input is valid or not
   * @param {*} event
   * @param {*} input
   * @returns {void}
   */
  handleChange = (e, { value }) => {
    const newState = { errorMessage: "", isDisabled: false, romanNumeral: "" };
    try {
      // pipeline of validators
      const errorMessage = pipeline(
        [validateRequired, validateMinValue(1), validateMaxValue(3999)],
        value
      );

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

      const { value } = this.state;

      const {
        data: {
          data: { romanNumeral }
        }
      } = await axios.get(generateRomanNumeralEndpoint(value));

      newState.romanNumeral = romanNumeral;
    } catch ({ message = "An error has occured. Please try again later." }) {
      newState.errorMessage = message;
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
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default App;
