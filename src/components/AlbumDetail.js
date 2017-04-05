import React from 'react';
import {Text, Image, View, Linking} from 'react-native';

import Card from './Card';
import CardSection from './CardSection'
import Button from "./Button";

const AlbumDetail = ({album}) => {
    const {
        cardContainer,
        thumbnailStyle,
        thumbnailContainerStyle,
        cardContainerStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: album.thumbnail_image}}/>
                </View>
                <View style={cardContainer}>
                    <Text style={cardContainerStyle}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{uri: album.image}}/>
            </CardSection>
            <CardSection>
                <Button text="Buy now, Bitch!" onPress={() => Linking.openURL(album.url)}/>
            </CardSection>
        </Card>
    );
};

const styles = {
    cardContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    cardContainerStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        width: null,
        flex: 1,
        height: 300
    },

};

export default AlbumDetail