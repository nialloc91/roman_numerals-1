import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Form,
  Input,
  Message,
  Header,
  Icon,
  Divider
} from "semantic-ui-react";

class View extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    romanNumeral: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  };

  /**
   * @description renders the components header
   */
  renderHeader = () => (
    <Header as="h2" icon textAlign="center">
      <Icon name="sync alternate" circular />
      <Header.Content>Convert Numbers To Roman Numerals</Header.Content>
      <Header.Subheader>
        Input a number between 1 and 3999 below and click submit to convert to
        roman numerals. e.g 1 = "I"
      </Header.Subheader>
    </Header>
  );
  /**
   * @description renders the form for inputing data
   */
  renderInput = () => {
    const { isDisabled, isLoading, value, onChange, onSubmit } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="number"
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
    const { romanNumeral, value } = this.props;

    if (!romanNumeral) return null;

    return (
      <Fragment>
        <Divider />
        <Message
          positive
          content={`${value} in roman numerals is: "${romanNumeral}"`}
        />
      </Fragment>
    );
  };

  render() {
    return (
      <Grid container stackable centered columns={1}>
        <Grid.Column />
        <Grid.Column>{this.renderHeader()}</Grid.Column>
        <Grid.Column />
        <Grid.Column />
        <Grid.Column width={5}>
          {this.renderInput()}
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
