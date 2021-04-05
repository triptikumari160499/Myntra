import { addPerson } from 'react-chat-engine';

const authObject = {'Project-ID': '0000-00-00-0000', 'User-Name': 'adam', 'User-Secret': 'pass1234'}
const chatID = 1
const username = 'adam'
const callback = (chatID, data) => console.log(chatID, data)

addPerson(authObject, chatID, username, callback)