import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Form,
  Input,
  Message,
  Header,
  Icon,
  Divider,
  Radio
} from "semantic-ui-react";

class View extends Component {
  static propTypes = {
    isConvertingToNumber: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    result: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        checked: PropTypes.bool,
        onChange: PropTypes.func
      })
    )
  };

  /**
   * @description renders the components header
   */
  renderHeader = () => (
    <Header as="h2" icon textAlign="center">
      <Icon name="sync alternate" circular />
      <Header.Content>Converting data</Header.Content>
      <Header.Subheader>
        Input a number between 1 and 3999 below and click submit to convert to
        roman numerals. e.g 1 = "I". Or input a roman numeral between "I" and
        "MMMCMXCIX" to convert to decimal.
      </Header.Subheader>
    </Header>
  );
  /**
   * @description renders the form for inputing data
   */
  renderInputs = () => {
    const {
      isConvertingToNumber,
      isDisabled,
      isLoading,
      value,
      options,
      onChange,
      onSubmit
    } = this.props;

    const type = isConvertingToNumber ? "text" : "number";

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field>Convert:</Form.Field>
        {options.map(o => (
          <Form.Field key={o.label}>
            <Radio {...o} />
          </Form.Field>
        ))}
        <Form.Field>
          <Input
            type={type}
            placeholder="Please input the value to convert."
            disabled={isLoading}
            value={value}
            onChange={onChange}
            action={{
              primary: true,
              disabled: isDisabled || isLoading,
              loading: isLoading,
              icon: "sync alternate",
              onClick: onSubmit
            }}
          />
        </Form.Field>
      </Form>
    );
  };

  /**
   * @description renders an error if one has occurred
   */
  renderErrorMessage = () => {
    const { errorMessage } = this.props;

    if (!errorMessage) return null;

    return (
      <Fragment>
        <Divider />
        <Message error content={errorMessage} />
      </Fragment>
    );
  };

  /**
   * @description renders the result of the conversion
   */
  renderResult = () => {
    const { result, value } = this.props;

    if (!result) return null;

    return (
      <Fragment>
        <Divider />
        <Message positive content={`${value} converted is: "${result}"`} />
      </Fragment>
    );
  };

  render() {
    return (
      <Grid container stackable centered columns={3}>
        <Grid.Column />
        <Grid.Column>{this.renderHeader()}</Grid.Column>
        <Grid.Column />
        <Grid.Column />
        <Grid.Column width={5}>
          {this.renderInputs()}
          <div>
            {this.renderErrorMessage()}
            {this.renderResult()}
          </div>
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}

export default View;
