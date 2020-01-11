import React from 'react';
import { Comment, List } from 'antd';
import TimeAgo from 'react-timeago';

export default function Conversation({ data, usersData }) {
  // init the data
  const DATA = new Array(data.length);
  const LOADING_MARKUP = [];

  const DATA_MARKUP =
    data.length > 0
      ? data.map(
          (v, i) =>
            (DATA[i] = {
              author: usersData[v.from_user_id].first_name,
              avatar: usersData[v.from_user_id].profile_pic,
              content: <p>{v.message_content}</p>,
              datetime: <TimeAgo date={v.date} />
            })
        )
      : LOADING_MARKUP;

  return (
    <List
      className="comment-list"
      header={`${data.length} replies`}
      itemLayout="horizontal"
      dataSource={DATA_MARKUP}
      renderItem={item => (
        <li>
          <Comment
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
}
