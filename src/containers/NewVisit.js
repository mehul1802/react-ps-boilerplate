import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
// import { invokeApig, s3Upload } from "../libs/awsLib";
import config from "../config";


export default class NewVisit extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      content: "",
      ph: 7.2,
      ch: 3.5
    };
  }

  validateForm() {
    return this.state.content.length > 0 &&
    this.state.ph <= 8.5 &&
    this.state.ph >= 6.5 &&
    this.state.ch >= 0 &&
    this.state.ch <= 10
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  updatePhInput = event => {
    this.setState({
      ph: event.target.value
    });
  }

  updateChInput = event => {
    this.setState({
      ch: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert("Please pick a file smaller than 5MB");
      return;
    }

    this.setState({ isLoading: true });

    try {
      const uploadedFilename = this.file
      ? (await s3Upload(this.file)).Location
      : null;

      // await this.createVisit({
      //   content: this.state.content,
      //   ph : this.state.ph,
      //   ch: this.state.ch,
      //   attachments: uploadedFilename
      // });
      console.log("uploaded succesfully");
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  //@JA - This function will send the data required by my visit API
  createVisit(visitJson) {
    return invokeApig({
      path: "/visits",
      method: "POST",
      body: visitJson
    });
  }

  render() {
    return (
      <div className="NewVisit">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="content">
            <ControlLabel>Comments</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="ph">
            <ControlLabel>PH</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.ph}
              componentClass="input"
              type="number"
              step="0.1"
            />
          </FormGroup>
          <FormGroup controlId="ch">
            <ControlLabel>CH</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.ch}
              componentClass="input"
              type="number"
              step="0.5"
            />
          </FormGroup>
          <FormGroup controlId="file">
            <ControlLabel>Before Picture</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" accept="image/*" capture="camera"/>
          </FormGroup>
          <FormGroup controlId="file">
            <ControlLabel>After Picture</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" accept="image/*" capture="camera" />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating…"
          />
        </form>
      </div>
    );
  }
}
