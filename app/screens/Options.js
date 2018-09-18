import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'
import { ListItem, Seperator } from '../components/List';

 const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

 class Options extends Component {
  handlePressThemes = () => {
    this.props.navigation.navigate('Themes')  
  };
   handlePressSite = () => {
    Linking.openURL('htasdftp://fixer.io').catch(() => alert('an error occured'))
  };
   render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          // customIcon={
          //   <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
          // }
        />
        <Seperator />
         <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          // customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />} */}
        /> 
        <Seperator />
      </ScrollView>
    );
  }
}
export default Options;