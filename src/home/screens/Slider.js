import React from 'react';
import {View, Image, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';

const {width} = Dimensions.get("window");
const height = width * 0.7; 

export default class Slider extends React.Component{
    state = {
        active: 0
    }
    change = ({nativeEvent})=>{
        const slider = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slider !== this.state.active) {
            this.setState({active: slider});
        }
    }
    render() {
        return (
            <View style={style.container}>
                <ScrollView
                 pagingEnabled
                 horizontal
                 onScroll={this.change} 
                 showsHorizontalScrollIndicator={false}
                 style={style.container}>
                {
                    this.props.images.map((image, index) =>(                       
                        <Image 
                            key={index}
                            source={{uri: image}}
                            style={style.image} />
                    ))
                }
                </ScrollView>
                <View style={style.pagination}>
                    {
                        this.props.images.map((i,k)=>(
                            <Text key={k} style={k==this.state.active ? style.paginationActiveText : style.paginationText} >⬤</Text>
                        ))
                    }
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        marginTop: 5,
        width: '100%',
        height,
    },
    scroll: {
        width,
        height,
    },
    image: {
        width,
        height,
        resizeMode: 
        'cover'
    },
    pagination : {
        flexDirection:
        'row', 
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'center'
    },
    paginationText: {
        fontSize:(width / 30), 
        color: '#c3c3c3', 
        margin: 3
    },
    paginationActiveText: {
        fontSize:(width / 30), 
        color: '#fff', 
        margin: 3},
})