import React from 'react'
import {View, StyleSheet, ScrollView, Dimensions, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import CircleComponent from '../../components/CircleComponent'
import * as Color from '../../../global/Color'
import { Ionicons } from '@expo/vector-icons'; 

class GameTypeScreen extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.background}>
                <CircleComponent isWhite={false} />
                <SafeAreaView>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.titleContainer} onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.title}>Back</Text>
                        </TouchableOpacity>
                        <View style={styles.titleContainer2}>
                            <Text style={styles.title}> </Text>
                        </View>
                    </View>
                    <Text style={styles.round}>Game Type</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Location', {isSolo: true})}>
                        <Text style={styles.buttonText}>Solo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Location', {isSolo: false})}>
                        <Text style={styles.buttonText}>Group</Text>
                    </TouchableOpacity>
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
        marginBottom: Dimensions.get('window').height * .05,
        fontSize: Dimensions.get('window').height * .021,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: Color.DARKER,
        color: '#feefe0',
        fontFamily: 'BalsamiqSans'
    },
    buttonText: {
        fontSize: Dimensions.get('window').height * .07,
        textAlign: 'center',
        color: "#fff",
        fontFamily: 'BalsamiqSans',
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width * .8,
        height: Dimensions.get('window').height * .3,
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        marginBottom: Dimensions.get('window').height * .06,
        paddingVertical: Dimensions.get('window').width * .04,
        paddingHorizontal: Dimensions.get('window').width * .07,
        borderWidth: 4,
        borderColor: "#fff",
        borderRadius: 20,
    },

})

export default GameTypeScreen