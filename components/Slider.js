
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView
} from "react-native";
import argonTheme from "../constants/Theme";
import { Block, Text, theme,Button} from "galio-framework";

const { height, width } = Dimensions.get("screen");


class Slider extends React.Component {
    state={
      active:0
    }
    change=({nativeEvent})=>{
      const slide =Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width) 
      if(slide !== this.state.active){
        this.setState({active: slide})
    }
  }
  
    render() {
      return (
        <Block flex style={styles.container}>
          <StatusBar hidden />
         <Block>
          <ScrollView
            style={{width,height}}
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            onScroll={this.change}
            >
            {
              this.props.images.map((image,index)=>(
                <ImageBackground
                  key={index}
                  source={image}
                  style={{width,height:400,resizeMode:'center'}}
                />
              ))
            }
          </ScrollView>
          <Block style={{flexDirection:'row', possition:'absolute', bottom:0, alignSelf:'center'}}>
            {
              this.props.images.map((i,k)=>(
                <Text key={k} style={k==this.state.active ? styles.paginationTextActive : styles.paginationText}>⬤
                </Text>
              ))
            }
          </Block>
        </Block>   
        </Block>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.COLORS.BLACK
    },
    padded: {
      paddingHorizontal: theme.SIZES.BASE * 2,
      position: "relative",
      bottom: theme.SIZES.BASE,
      zIndex: 2,
    },
    button: {
      width: width - theme.SIZES.BASE * 4,
      height: theme.SIZES.BASE * 3,
      shadowRadius: 0,
      shadowOpacity: 0
    },
    logo: {
      width: 200,
      height: 60,
      zIndex: 2,
      position: 'relative',
      marginTop: '-50%'
    },
    title: {
      marginTop:'-5%'
    },
    subTitle: {
      marginTop: 20
    },
    paginationText:{
      color:'#888',
      margin:3,
      fontSize:width/30,
    },
    paginationTextActive:{
      color:'#fff',
      margin:3,
      fontSize:width/30,
    },
  });
  
  export default Slider;
  