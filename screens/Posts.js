import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import Ionicons from '@expo/vector-icons';

const data = {
    posts: [
        {
            "id": 1,
            "title": "Hello World!",
            "link": "https://google.com",
            "imageUrl": "https://picsum.photos/200/300"
        },
        {
            "id": 2,
            "title": "Welcome to Reddit!",
            "link": "https://google.com",
            "imageUrl": "https://picsum.photos/200/300"
        }
    ]
}

const Posts = (props) => {
    const {navigation} = props;
    const {posts} = data;

    return (
        <View>
            <FlatList
                data={posts}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item, index}) => <Text>{item.title}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around'
    }
})

export default Posts;
