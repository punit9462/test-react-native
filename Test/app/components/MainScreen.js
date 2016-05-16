/**
 * Created by mehta.punit on 05/05/16.
 */

import React, {
    Component,
    StyleSheet
} from 'react-native';

// import Button from 'apsl-react-native-button'

// var Button = require('react-native-button');
// var React = require('react-native');


class MainScreen extends Component {
    
    // constructor() {
    //     super();
    //     this.state = {
    //
    //     }
    // }

    render() {
        return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});