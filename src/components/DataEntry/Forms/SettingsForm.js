import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import cityTimezones from 'city-timezones';
import { Form, Input, AutoComplete, Button } from 'antd';

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

  return <Container>TODO!</Container>;
}

// STYLES
const Container = styled(Form)``;

{
  /* <Form onFinish={onFinish}>
        <Form.Item
          name="timezone"
          rules={[
            { required: tzInvalid, message: 'Please enter a valid timezone' }
          ]}
        >
          <AutoComplete
            options={tzOptions()}
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
      </Form> */
}
