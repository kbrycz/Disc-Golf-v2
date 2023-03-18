import React from 'react'
import {View, StyleSheet, ScrollView, Dimensions, TextInput, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import CircleComponent from '../../components/CircleComponent'
import * as Color from '../../../global/Color'
import { Ionicons } from '@expo/vector-icons'; 

class LocationScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            isSolo: false,
            location: ''
        }
    }

    // Sets the location
    setLocation = (l) => {
        this.setState({location: l})
    }

    componentDidMount() {
        this.setState({
            isSolo: this.props.route.params.isSolo
        })
    }

    // Sends the user to the correct game screen
    goToGame = () => {
        if (this.state.isSolo) {
            this.props.navigation.navigate('Solo', {params: {location: this.state.location}, screen: 'SoloPlay'})
        }
        else {
            this.props.navigation.navigate('Game',  {params: {location: this.state.location}, screen: 'Gameplay'})
        }
    }


    render() {
        return (
            <View style={styles.background}>
                <CircleComponent isWhite={false} />
                <SafeAreaView>
                    <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={20} style={{height: Dimensions.get('window').height}}> 
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.titleContainer} onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.title}>Back</Text>
                        </TouchableOpacity>
                        <View style={styles.titleContainer2}>
                            <Text style={styles.title}> </Text>
                        </View>
                    </View>
                    <Text style={styles.round}>Where are you playing?</Text>
                        <TextInput
                            autoFocus
                            maxLength={18}
                            style={styles.textInput}
                            returnKeyType={"done"}
                            value={this.state.location.toString()}
                            placeholder="Location..."
                            onChangeText={this.setLocation}
                            />
                        <TouchableOpacity style={styles.button} onPress={this.goToGame}>
                            <Text style={styles.buttonText}>Start</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                    
                </SafeAreaView>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Color.MAIN,
        height: Dimensions.get('window').height
    },
    container: {
        flexDirection: 'row',
        opacity: 1
    },
    titleContainer: {
        flex: 1,
    },
    titleContainer2: {
        flex: 2,
    },
    title: {
        paddingTop: Dimensions.get('window').height * .02,
        paddingBottom: Dimensions.get('window').height * .02,
        fontSize: Dimensions.get('window').height * .021,
        borderWidth: 1,
        borderColor: Color.DARKER,
        borderLeftWidth: 0,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: Color.DARK,
        color: '#feefe0',
        fontFamily: 'BalsamiqSans'
    },
    round: {
        paddingTop: Dimensions.get('window').height * .02,
        paddingBottom: Dimensions.get('window').height * .02,
        marginBottom: Dimensions.get('window').height * .1,
        fontSize: Dimensions.get('window').height * .021,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: Color.DARKER,
        color: '#feefe0',
        fontFamily: 'BalsamiqSans'
    },
    headerText: {
        marginTop: Dimensions.get('window').height * .1,
        marginBottom: Dimensions.get('window').height * .08,
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        lineHeight: Dimensions.get('window').height * .08,
        fontSize: Dimensions.get('window').height * .04,
        textAlign: 'center',
        color: '#fff',
        opacity: .8,
        fontFamily: 'BalsamiqSans'
    },
    buttonText: {
        fontSize: Dimensions.get('window').height * .03,
        textAlign: 'center',
        color: "#fff",
        fontFamily: 'BalsamiqSans'
    },
    button: {
        width: Dimensions.get('window').width * .8,
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        marginBottom: Dimensions.get('window').height * .03,
        paddingVertical: Dimensions.get('window').width * .03,
        paddingHorizontal: Dimensions.get('window').width * .07,
        borderWidth: 4,
        borderColor: "#fff",
        borderRadius: 20,
    },
    textInput: {
        marginBottom: Dimensions.get('window').height * .025,
        width: Dimensions.get('window').width * .8,
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        color: Color.MAIN,
        fontSize: Dimensions.get('window').height * .03,
        textAlign: 'center',
        borderRadius: 20,
        paddingTop: Dimensions.get('window').height * .02,
        paddingBottom: Dimensions.get('window').height * .02,
        paddingHorizontal: Dimensions.get('window').width * .03,
        fontFamily: 'BalsamiqSans',
        backgroundColor: '#fff'
    },


})

export default LocationScreen