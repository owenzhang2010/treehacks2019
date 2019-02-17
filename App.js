import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';

export default class App extends React.Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

    _showAlert = () => {
    Alert.alert(
      'Arrived safely.',
      'Please confirm that you do not want to alert your emergency contacts.',
      [
        {text: 'Do not alert emergency contacts', onPress: () => console.log             ('Confirmed'), style: 'OK Pressed'},
        {text: 'Cancel', onPress: () => console.log('cancel')},
      ],
      { cancelable: false }
    )
  }

  render() {
    let text = 'Waiting...';
    let region = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    let user_coord,
      coord2 = {
        latitude: 0,
        longitude: 0,
      };

    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location, null, 2);
      region = {
        latitude: this.state.location.coords.latitude,
        longitude: this.state.location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      user_coord = {
        latitude: this.state.location.coords.latitude,
        longitude: this.state.location.coords.longitude,
      };

      coord2 = {
        latitude: this.state.location.coords.latitude + 0.01,
        longitude: this.state.location.coords.longitude + 0.005,
      };
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Check out the map to find a walking buddy near you!
        </Text>

        <MapView style={{ flex: 1 }} region={region}>
          <MapView.Marker coordinate={user_coord} />
          <MapView.Marker
            coordinate={coord2}
            pinColor="#000000"
            onPress={() => this.marker.showCallout()}
            >
            <MapView.Callout>
              <View>
                <Text>
                  {'Name:'} {'Stanford Ghost\n'} {'Gender: Ghost\n'} {'Age: 195'}
                </Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>

        <TouchableOpacity
            style={styles.button}
            onPress={this._showAlert}>
            <Text style={{fontSize: 32, color: 'blue', textAlign: 'center'}}>I have arrived at my destination safely!</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
