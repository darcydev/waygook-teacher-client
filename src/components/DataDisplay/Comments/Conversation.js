import React from "react";
import { Comment, List } from "antd";

export default function Conversation({ data }) {
  // init the data
  const DATA = new Array(data.length);
  const LOADING_MARKUP = null;

  const DATA_MARKUP =
    data.length > 0
      ? data.map(
          (v, i) =>
            (DATA[i] = {
              author: v.from_user_id, // TODO convert to name
              avatar:
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", // TODO get profile pic
              content: <p>{v.message_content}</p>,
              datetime: v.date // TODO convert to '2 days ago' format
            })
        )
      : LOADING_MARKUP;

  return (
    <List
      className="comment-list"
      header={`${data.length} replies`}
      itemLayout="horizontal"
      dataSource={DATA_MARKUP}
      renderItem={(item) => (
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
