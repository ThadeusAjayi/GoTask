import React, {useState, useEffect} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Text,
  RefreshControl,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Colors from './colors';
import {connect} from 'react-redux';
import {getData} from './data/actions';
import MovieItem from './MovieItem';

const Home = ({navigation, data, getData, loading}) => {
  const [refresh, setRefresh] = useState(false);
  console.log(navigation);
  useEffect(() => {
    //api call
    getData(true)
      .then(res => {})
      .catch(err => {});
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.offWhite,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
      forceInset={{bottom: 'never'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{position: 'absolute', marginLeft: 10}}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{padding: 8, zIndex: 2}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              MENU
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 22,
            marginVertical: 10,
            flex: 1,
          }}>
          Popular Movies
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        data={data}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              setRefresh(true);
              getData(true)
                .then(res => setRefresh(false))
                .catch(err => setRefresh(false));
            }}
          />
        }
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => (
          <MovieItem key={index * 34} movie={item} />
        )}
        ListEmptyComponent={() =>
          !loading &&
          data &&
          data.length < 1 && (
            <Text style={{fontWeight: '500', textAlign: 'center'}}>
              No items returned
            </Text>
          )
        }
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  getData: (initialLoad, page) => dispatch(getData(initialLoad, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
