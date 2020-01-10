import React from "react";
import { Modal, Form, Input, Icon, AutoComplete } from "antd";
import cityTimezones from "city-timezones";

const AutoCompleteOption = AutoComplete.Option;

const SettingsForm = Form.create({ name: "settings-form" })(
  // eslint-disable-next-line
  class extends React.Component {
    state = { autoCompleteTimezone: [] };

    onCityChange = (value) => {
      const cityLookup = cityTimezones.lookupViaCity(value);

      if (cityLookup.length === 0) return;
      else this.setState({ autoCompleteTimezone: [cityLookup[0].timezone] });
    };

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const { autoCompleteTimezone } = this.state;

      const timezoneOptions = autoCompleteTimezone.map((timezone) => (
        <AutoCompleteOption key={timezone}>{timezone}</AutoCompleteOption>
      ));

      return (
        <Modal
          visible={visible}
          title="Send a message"
          okText={<Icon type="rocket" rotate={45} />}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Change first name">
              {getFieldDecorator("first", {
                rules: [
                  { max: 4999, message: "must be less than 5000 characters" }
                ]
              })(<Input size="large" />)}
            </Form.Item>
            <Form.Item label="Timezone">
              {getFieldDecorator("timezone")(
                <AutoComplete
                  dataSource={timezoneOptions}
                  onChange={this.onCityChange}
                  placeholder="Type your city name, and we'll find your timezone automatically"
                >
                  <Input size="large" />
                </AutoComplete>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export class SettingsModalForm extends React.Component {
  state = {
    visible: false,
    autoCompleteResult: []
  };

  showModal = () => this.setState({ visible: true });
  handleCancel = () => this.setState({ visible: false });
  saveFormRef = (formRef) => (this.formRef = formRef);

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) return;

      console.log("Received values of message form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  render() {
    return (
      <>
        <Icon type="setting" onClick={this.showModal} />
        <span>Settings</span>
        <SettingsForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </>
    );
  }
}
