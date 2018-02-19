import React from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TextInput,
    View,
    Button,
    DatePickerIOS
} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';

export default class MapScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome'
    };

    constructor() {
        super();
        currLoc = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
        }
        this.state = {
            currLoc,
            chosenDate: new Date()
        };
    }

    markers = [
        {
            id: 1,
            latlng: {
                latitude: 37.78825,
                longitude: -122.4324
            },
            title: 'One',
            description: 'TETST'
        }, {
            id: 2,
            latlng: {
                latitude: -72,
                longitude: 24
            },
            title: 'Two',
            description: 'TETST'
        }, {
            id: 3,
            latlng: {
                latitude: -71,
                longitude: 24
            },
            title: 'Three',
            description: 'TETST'
        }
    ];

    componentWillMount() {
        // this.markers.forEach(e => {     fishRef.push(e); })
    }

    setDate(chosenDate) {
        this.setState({chosenDate})
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log('state', this.state);
        return <View
            style={{
            flex: 1,
            flexDirection: 'column'
        }}>
            {/* <MapView style={styles.map}
                    region={this.state.currLoc}>
                    {this.markers.map(marker => (
                      <Marker key={marker.id}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                      />
                    ))
                    }
            </MapView> */}
            <DatePickerIOS date={this.state.chosenDate} onDateChange={this.setDate.bind(this)}/>
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', {name: 'Jane'})}/>
        </View>

    }

}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});