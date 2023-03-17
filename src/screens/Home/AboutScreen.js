import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
import * as Color from '../../../global/Color'
import CircleComponent from '../../components/CircleComponent'

class AboutScreen extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <View>
                <CircleComponent isWhite={true}/>
                <Text style={styles.headerText}>About</Text>
                <Text style={styles.version}>1.0.1</Text>
                <Text style={styles.p}>Alligator Labs is a Chicago based company specializing in mobile apps. Our mission
                                        is to provide you with solutions that make your life easier and games that make your day better!</Text>
                <Text style={styles.p}>"Disc Golf - All in One" is an app we made to help you organize your disc golf games!
                                        While it's packed with disc golf features, it can be used for basically any scorekeeping purposes. 
                                        The main benefit of this app is the convenient button scorekeeping compared to using a pencil and paper
                                        and then having to do the constant math in your head!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
        marginTop: Dimensions.get('window').height * .1,
        marginLeft: Dimensions.get('window').width * .12,
        marginRight: Dimensions.get('window').width * .12,
        lineHeight: Dimensions.get('window').height * .08,
        textAlign: 'center',
        fontSize: Dimensions.get('window').height * .05,
        color: Color.MAIN,
        fontFamily: 'BalsamiqSans'
    },
    version: {
        marginTop: Dimensions.get('window').height * .005,
        textAlign: 'center',
        fontSize: Dimensions.get('window').height * .03,
        color: Color.MAIN,
        marginBottom: Dimensions.get('window').height * .05,
        fontFamily: 'BalsamiqSans'
    },
    p: {
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        marginBottom: Dimensions.get('window').height * .04,
        textAlign: 'justify',
        fontSize: Dimensions.get('window').height * .02,
        lineHeight: Dimensions.get('window').height * .03,
        color: Color.MAIN,
        fontFamily: 'BalsamiqSans'
    },
    
})

export default AboutScreen