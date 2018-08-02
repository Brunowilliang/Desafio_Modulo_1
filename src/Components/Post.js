import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

import { Fragment } from 'react';

export default class Post extends Component {
  render(){
    return(

    <Fragment>

      <View style={styles.box}>

        <Text style={styles.Title}>{this.props.title}</Text>
        <Text style={styles.author}>{this.props.author}</Text>

        <View style={styles.line}></View>

        <Text style={styles.description}>{this.props.description}</Text>

      </View>

    </Fragment>

    );
  }
}


const styles = StyleSheet.create({

  box: {
    marginTop: 20,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 20,
  },

  Title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "#333333",
  },

  author: {
    fontSize: 13,
    marginTop: 3,
    marginBottom: 10,
    fontWeight: '400',
    color: "#999",
  },

  line: {
    height: 1,
    backgroundColor: "#EEEEEE",
  },

  description:{
    fontSize: 14,
    marginTop: 10,
    color: "#666",
    lineHeight: 20,
  },
});
