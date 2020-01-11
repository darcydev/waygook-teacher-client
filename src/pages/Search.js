import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Icon, Avatar, Select, Slider } from 'antd';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';

import PageHeading from '../components/DataDisplay/Headings/PageHeading';
import IconWithText from '../components/DataDisplay/IconWithText';

const { Option } = Select;
const { Meta } = Card;

const dummyData = [
  {
    userID: -1,
    profile_pic:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    flagSrc:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/100px-Flag_of_the_United_States.svg.png',
    first_name: 'Michael Douglas'
  },
  {
    userID: -2,
    profile_pic:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    flagSrc:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/100px-Flag_of_the_United_States.svg.png',
    first_name: 'Michael Douglas'
  },
  {
    userID: -3,
    profile_pic:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    flagSrc: 'images/flags/american-flag.png',
    first_name: 'Michael Douglas'
  }
];

export default class Search extends Component {
  state = {
    nation: [],
    gender: [],
    minRate: Number.NEGATIVE_INFINITY,
    minAge: Number.NEGATIVE_INFINITY,
    maxRate: Number.POSITIVE_INFINITY,
    maxAge: Number.POSITIVE_INFINITY,
    users: [] // TODO: change to 'teachers'
  };

  componentDidMount() {
    this.fetchTeachers();
  }

  // TODO: update REST API to extract only matching profiles from DB (rather than doing it on the frontend)
  fetchTeachers = () => {
    axios({
      method: 'GET',
      url: `${localStorage.getItem('API_BASE_URL')}/users.php`
    }).then(response => {
      this.setState({ users: response.data });
    });
  };

  calculateAge = DOB => {
    const today = new Date();
    const birthDate = new Date(DOB);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  onNationFilter = value => this.setState({ nation: value });
  onAgeFilter = value => this.setState({ minAge: value[0], maxAge: value[1] });
  onRateFilter = value =>
    this.setState({ minRate: value[0], maxRate: value[1] });

  render() {
    console.log(this.state);

    const data = this.state.users.length === 0 ? dummyData : this.state.users;

    // calculate the min/max values for the slider bars
    let YOUNG, OLD, CHEAP, EXXY;
    Object.values(this.state.users).forEach(v => {
      const AGE = this.calculateAge(v.DOB);

      if (!CHEAP || v.rate < CHEAP) CHEAP = Number(v.rate);
      if (!EXXY || v.rate > EXXY) EXXY = Number(v.rate);
      if (!YOUNG || AGE < YOUNG) YOUNG = AGE;
      if (!OLD || AGE > OLD) OLD = AGE;
    });

    // FILTER MARKUPS
    const NATIONALITIES = [
      'American',
      'Australian',
      'British',
      'Korean',
      'South_African',
      'Canadian'
    ];
    const NATION_FILTER_MARKUP = NATIONALITIES.map(v => (
      <Option key={v.toLowerCase()}>{v}</Option>
    ));

    // TODO should the filtering out of cards be done on the front or backend?
    // I suspect front is easier (but more verbose), but back is more data efficient
    const CARD_MARKUP = data.map((v, i) => {
      // FILTER CHECKS
      // nationality
      if (
        this.state.nation.length !== 0 &&
        !this.state.nation.includes(v.nationality)
      )
        return undefined;
      //age
      const USER_AGE = this.calculateAge(v.DOB);
      if (this.state.minAge > USER_AGE || USER_AGE > this.state.maxAge)
        return undefined;
      // rate
      if (this.state.minRate > v.rate || v.rate > this.state.maxRate)
        return undefined;
      else
        return (
          <Link to={`profile/${v.userID}`}>
            <Card
              className="img-md img-responsive"
              key={v.userID === undefined ? `${i}: ${v}` : v.userID}
              style={{ width: 300, marginBottom: '20px' }}
              cover={<img alt="profile" src={v.profile_pic} />}
            >
              <Meta
                avatar={
                  <Avatar src={`images/flags/${v.nationality}-flag.png`} />
                }
                title={v.first_name}
                description={<IconWithText text={v.rate} />}
              />
            </Card>
          </Link>
        );
    });

    return (
      <div className="page">
        <PageHeading heading="Search" subHeading="find your perfect teacher" />
        <FilterContainer>
          <Select
            mode="multiple"
            style={{ width: '25%' }}
            placeholder="Filter by nationality"
            onChange={this.onNationFilter}
          >
            {NATION_FILTER_MARKUP}
          </Select>
          <SliderContainer>
            <p>Age</p>
            <Slider
              range
              defaultValue={[0, 100]}
              min={YOUNG}
              max={OLD}
              onChange={this.onAgeFilter}
            />
          </SliderContainer>
          <SliderContainer>
            <p>Rate</p>
            <Slider
              range
              defaultValue={[0, 100]}
              min={CHEAP}
              max={EXXY}
              onChange={this.onRateFilter}
            />
          </SliderContainer>
        </FilterContainer>
        <FlexWrap>{CARD_MARKUP}</FlexWrap>
      </div>
    );
  }
}

const FilterContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const SliderContainer = styled.div`
  width: 20%;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
