import moment from 'moment';
import React from 'react';
import {View, Image, Text} from 'react-native';
import Colors from './colors';
import { POSTER_PATH } from './types';

export default ({movie}) => {
  return (
    <View style={{flex: 1, width: '100%', marginBottom: 10, backgroundColor: Colors.white, borderRadius: 10, shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,}}>
      <Image
        source={{uri: `${POSTER_PATH}/${movie.poster_path}`}}
        style={{width: '100%', height: 300, overflow: "hidden", borderRadius: 10}}
      />
      <View style={{padding: 8}}>

      <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 8}}>{movie.title}</Text>
      <Text style={{fontWeight: '600', fontSize: 16, color: '#1d1d1d'}}>{moment(movie.release_date).format("MMM DD, YYYY")}</Text>
      </View>
    </View>
  );
};
