/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Component
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { GiftedChat } from 'react-native-gifted-chat';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      responses: [],
      index: 0,
    }
  }
  
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hi, I am Ana from Instlert Support. How may I be of assistance today?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
      responses: [
        {
          _id: 2,
          text: 'Yes, how could I help?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 3,
          text: 'I will redirect you to Google Maps, safest route avoiding all fires will be highlighted. Stay calm, stay safe and goodluck!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          //image: 'https://cdn.mos.cms.futurecdn.net/QfKySb5DGobYXvSGffoLag-970-80.jpg'
        },

      ]
    })
  }

  // goToLocation() {
  //   openMap({ latitude: 37.865101, longitude: -119.538330 });
  // }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))

    if(this.state.index <2){ 
    
      this.setState( (previousState) => ({

        
        messages: GiftedChat.append(previousState.messages, 
          this.state.responses[this.state.index],
          ),
          index: this.state.index + 1,
      }))
    }
    
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
