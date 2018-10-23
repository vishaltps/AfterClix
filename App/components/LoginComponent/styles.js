
import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'blue'
    },
    heading: {
        fontWeight: '900',
        fontSize: 18,
        textAlign: "center",
        color: "red"
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});
export default styles;