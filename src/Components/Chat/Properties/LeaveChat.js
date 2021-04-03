import {LoginOutlined} from '@ant-design/icons';
import { leaveChat } from 'react-chat-engine';
const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password}
const chatID = 1
const callback = (data) => console.log(data)

leaveChat(authObject, chatID, username, callback)
