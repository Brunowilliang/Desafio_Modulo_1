import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

import { Fragment } from 'react';
import "./src/config/ReactotronConfig";
import "./src/config/DevTollsConfig";

import Post from './src/Components/Post';

export default class App extends Component {
  render() {
    return (

      <Fragment>

        <View style={styles.menu}>
          <Text style={styles.menutext}>GoNative App</Text>
        </View>

        <ScrollView style={styles.ScrollView}>

          <Post
            title="Aprendendo React Native"
            author="Bruno Willian Garcia"
            description="Lorem Ipsum is simply dummy
              txt of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the
              standard dummy text ever since thestandard dummy text"
          />

          <Post
            title="Aprendendo React Native 2"
            author="Bruno Willian Garcia 2"
            description="Lorem Ipsum is simply dummy
              txt of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the
              standard dummy text ever since thestandard dummy text"
          />

          <Post
            title="Aprendendo React Native 3"
            author="Bruno Willian Garcia 3"
            description="Lorem Ipsum is simply dummy
              txt of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the
              standard dummy text ever since thestandard dummy text"
          />

        </ScrollView>

      </Fragment>

    );
  }
}

const styles = StyleSheet.create({
  menu: {
    height: 60,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  menutext: {
    fontSize: 20,
  },

  ScrollView: {
    flex: 1,
    backgroundColor: '#ee7777',
  },
});
