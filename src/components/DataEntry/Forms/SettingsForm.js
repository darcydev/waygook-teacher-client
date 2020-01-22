/* UPGRADE TO V4 */

import React, { useState } from 'react';
import { Form, Input, AutoComplete, Button } from 'antd';
import cityTimezones from 'city-timezones';

const AutoCompleteOption = AutoComplete.Option;

export default function SettingsForm() {
  const [timezones, setTimezone] = useState([]);
  const [tzInvalid, setTzInvalid] = useState(true);

  const onFinish = values => {
    console.log('Received values of form: ', values);

    if (tzInvalid) {
      console.log('invalid tz entered', timezones);
    } else {
      console.log(timezones);
      // send to db
    }
  };

  const onCityChange = value => {
    const cityLookup = cityTimezones.lookupViaCity(value);

    if (cityLookup.length === 0) {
      setTzInvalid(true);
    } else {
      setTimezone([cityLookup[0].timezone]);
      setTzInvalid(false);
    }
  };

  const tzOptions = () =>
    timezones.map(tz => <AutoCompleteOption key={tz}>{tz}</AutoCompleteOption>);

  return (
    <div>
      Settings
      <Form onFinish={onFinish}>
        <Form.Item
          name="timezone"
          rules={[
            { required: tzInvalid, message: 'Please enter a valid timezone' }
          ]}
        >
          <AutoComplete
            dataSource={tzOptions}
            onChange={onCityChange}
            placeholder="What's your city?"
          >
            <Input />
          </AutoComplete>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
