import './App.css';
import {StreamChat} from 'stream-chat';
import {Channel, Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer } from './components/ChannelListContainer';
import { ChannelContainer } from './components/ChannelContainer';
const api='suasqenc6s2x';
const client=StreamChat.getInstance(api);
function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App;
