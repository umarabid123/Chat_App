import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Colors } from '../contexts/theme';

// Sample message data
const messages = [
  {
    id: '1',
    text: 'Hey there! How are you doing today?',
    sender: 'other',
    time: '09:41',
  },
  {
    id: '2',
    text: 'I\'m good, thanks for asking! Just working on this new project.',
    sender: 'me',
    time: '09:42',
  },
  {
    id: '3',
    text: 'That sounds interesting. What kind of project is it?',
    sender: 'other',
    time: '09:45',
  },
  {
    id: '4',
    text: 'It\'s a chat application with a really nice UI. I\'m trying to make it look professional and modern like WhatsApp.',
    sender: 'me',
    time: '09:47',
  },
  {
    id: '5',
    text: 'Wow, that sounds awesome! Can\'t wait to see it when it\'s done. The design looks great already!',
    sender: 'other',
    time: '09:50',
  },
];

const WhatsAppChatScreen = () => {
  // Message bubble component
  const MessageBubble = ({ message }:any) => {
    const isMe = message.sender === 'me';
    
    return (
      <View style={[
        styles.messageBubbleContainer,
        isMe ? styles.myMessageContainer : styles.otherMessageContainer
      ]}>
        <View style={[
          styles.messageBubble,
          isMe ? styles.myMessage : styles.otherMessage,
        ]}>
          <Text style={[styles.messageText, isMe && styles.myMessageText]}>
            {message.text}
          </Text>
          
          <View style={styles.messageTimeContainer}>
            <Text style={[styles.messageTime, isMe && styles.myMessageTime]}>
              {message.time}
            </Text>
            
            {isMe && (
              <View style={styles.doubleTick}>
                <View style={[styles.tick, styles.readTick]} />
                <View style={[styles.tick, styles.readTick, styles.secondTick]} />
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      
      {/* Chat Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton}>
            <Image 
              source={{ uri: 'https://img.icons8.com/ios-glyphs/30/ffffff/back.png' }}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg' }}
            style={styles.avatar}
          />
          
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Sarah Johnson</Text>
            <Text style={styles.userStatus}>online</Text>
          </View>
        </View>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Image 
              source={{ uri: 'https://img.icons8.com/ios-glyphs/30/ffffff/video-call.png' }}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.headerButton}>
            <Image 
              source={{ uri: 'https://img.icons8.com/ios-glyphs/30/ffffff/phone.png' }}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.headerButton}>
            <View style={styles.moreDotsContainer}>
              <View style={styles.moreDot} />
              <View style={styles.moreDot} />
              <View style={styles.moreDot} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Chat Messages */}
      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <MessageBubble message={item} />}
          contentContainerStyle={styles.messagesList}
        />
      </View>
      
      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        style={styles.inputContainer}
      >
        <View style={styles.inputWrapper}>
          <TouchableOpacity style={styles.emojiButton}>
            <Text style={styles.emojiIcon}>😊</Text>
          </TouchableOpacity>
          
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Message"
              placeholderTextColor="#999"
            />
          </View>
          
          <TouchableOpacity style={styles.sendButton}>
            <Image 
              source={{ uri: 'https://img.icons8.com/ios-glyphs/30/ffffff/microphone.png' }}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DDD5',
  },
  // Header styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingTop:44
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStatus: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,
    marginLeft: 5,
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  moreDotsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
  },
  moreDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
    marginVertical: 1,
  },
  // Chat container
  chatContainer: {
    flex: 1,
    backgroundColor: '#E5DDD5',
  },
  messagesList: {
    padding: 10,
  },
  // Message bubbles
  messageBubbleContainer: {
    marginBottom: 10,
    maxWidth: '75%',
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    paddingBottom: 18, // Extra space for time
  },
  myMessage: {
    backgroundColor: '#DCF8C6',
    borderTopRightRadius: 0,
  },
  otherMessage: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
    color: '#000',
  },
  myMessageText: {
    color: '#000',
  },
  messageTimeContainer: {
    position: 'absolute',
    right: 8,
    bottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageTime: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  myMessageTime: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  // Read receipts
  doubleTick: {
    flexDirection: 'row',
    marginLeft: 3,
  },
  tick: {
    width: 6,
    height: 6,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    transform: [{ rotate: '45deg' }],
  },
  readTick: {
    borderColor: '#34B7F1',
  },
  secondTick: {
    marginLeft: -3,
  },
  // Input area
  inputContainer: {
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiButton: {
    padding: 8,
  },
  emojiIcon: {
    fontSize: 20,
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
    marginHorizontal: 8,
  },
  textInput: {
    fontSize: 16,
    color: '#333',
    padding: 0,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#128C7E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});

export default WhatsAppChatScreen;
