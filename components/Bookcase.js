import React, { Component } from "react";
import { StatusBar, FlatList, StyleSheet, View } from "react-native";
import BookcaseItem from "./BookcaseItem";

class BookcaseScreen extends Component {
  state = {
    books: [
      {
        id: 1,
        title: "Harry Potter and the Goblet of Fire",
        author: "J. K. Rowling",
        thumbnail: "https://covers.openlibrary.org/w/id/7984916-M.jpg"
      },
      {
        id: 2,
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        thumbnail: "https://covers.openlibrary.org/w/id/6979861-M.jpg"
      },
      {
        id: 3,
        title: "1984",
        author: "George Orwell",
        thumbnail: "https://covers.openlibrary.org/w/id/7222246-M.jpg"
      }
    ]
  };

  _renderItem = ({ item }) => (
    <BookcaseItem
      id={item.id}
      title={item.title}
      author={item.author}
      thumbnail={item.thumbnail}
    />
  );

  _keyExtractor = item => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={this.state.books}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});

export default BookcaseScreen;
