import React from 'react';
import {
  Modal,
  Form,
  Input,
  Icon,
  AutoComplete,
  Select,
  Button,
  Upload,
  Progres
} from 'antd';
import cityTimezones from 'city-timezones';
import axios from 'axios';
import Cookies from 'js-cookie';

import UploadFileButton from '../../../UI/Buttons/UploadFileButton';

const AutoCompleteOption = AutoComplete.Option;
const { Option } = Select;

const SettingsForm = Form.create({ name: 'settings-form' })(
  // eslint-disable-next-line
  class extends React.Component {
    state = { autoCompleteTimezone: [] };

    onCityChange = value => {
      const cityLookup = cityTimezones.lookupViaCity(value);

      if (cityLookup.length === 0) return;
      else this.setState({ autoCompleteTimezone: [cityLookup[0].timezone] });
    };

    onFileUpload = e => {
      axios({
        method: 'POST',
        url: `${localStorage.getItem('API_BASE_URL')}/uploadImage.php`,
        data: e
      }).then(response => {
        console.log(response);
      });
    };

    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) return e;

      return e && e.fileList;
    };

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const { autoCompleteTimezone } = this.state;

      const timezoneOptions = autoCompleteTimezone.map(timezone => (
        <AutoCompleteOption key={timezone}>{timezone}</AutoCompleteOption>
      ));

      return (
        <Modal
          visible={visible}
          title="Update your profile"
          okText={<Icon type="rocket" rotate={45} />}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Nationality">
              {getFieldDecorator('nationality', {
                rules: [
                  { max: 4999, message: 'must be less than 5000 characters' }
                ]
              })(
                <Select placeholder="Please select a country">
                  <Option value="american">American</Option>
                  <Option value="australian">Australian</Option>
                  <Option value="british">British</Option>
                  <Option value="canadian">Canadian</Option>
                  <Option value="korean">South Korean</Option>
                  <Option value="south_african">South African</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Profile Picture">
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile
              })(<UploadFileButton />)}
            </Form.Item>
            <Form.Item label="Timezone">
              {getFieldDecorator('timezone')(
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
    autoCompleteResult: [],
    success: false
  };

  showModal = () => this.setState({ visible: true });
  handleCancel = () => this.setState({ visible: false });
  saveFormRef = formRef => (this.formRef = formRef);

  onFormSubmit = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) return;

      console.log('Received values of message form: ', values);
      this.changeSettings();
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  changeSettings(values) {
    axios({
      method: 'POST',
      url: `${localStorage.getItem('API_BASE_URL')}/settings.php`,
      data: values
    }).then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <>
        <Icon type="setting" onClick={this.showModal} />
        <span>Settings</span>
        <SettingsForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.onFormSubmit}
        />
      </>
    );
  }
}
