import React, { Component } from 'react';
import {
    View, 
    Image, 
    Dimensions, 
    Text, 
    StyleSheet
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width,height } = Dimensions.get('window');

export default class CarouselExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
        width, 
        height,
    };
  }


  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={3000}
          style={{width: this.state.width, height: 230, marginTop: 15, marginBottom: 10, resizeMode: 
            'cover'}}
          autoplay
          pageInfo 
          arrowStyle
          onAnimateNextPage={(p) => console.log(p)}
        >
          <Image source={{uri: 'https://images.pexels.com/photos/3727533/pexels-photo-3727533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/5441742/pexels-photo-5441742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/577584/pexels-photo-577584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri:'https://images.pexels.com/photos/7625034/pexels-photo-7625034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/2797332/pexels-photo-2797332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/6735399/pexels-photo-6735399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/3811316/pexels-photo-3811316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/365668/pexels-photo-365668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'  }} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri: 'https://images.pexels.com/photos/7624936/pexels-photo-7624936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
          <Image source={{uri:  'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }} style={{width: this.state.width, height: 230, resizeMode: 'cover' }}/>
        </Carousel>


      </View>
    );
  }
}
