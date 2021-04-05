import { Card, Avatar } from 'antd';
import { ShareAltOutlined ,UsergroupAddOutlined ,HeartTwoTone} from '@ant-design/icons';

const { Meta } = Card;

ReactDOM.render(
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <HeartTwoTone twoToneColor="#eb2f96"  key="wishlist" />,
      <UsergroupAddOutlined  key="group_wish" />,
      <ShareAltOutlined  key="sharing" />,
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>,
  mountNode,
);