import Picker from 'react-native-image-picker'
import React, { useRef, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';

function ImagePicker() {

const [img, setImg] = useState(null)

    const takePicture = async () => {
        var options = {
            title: 'Select Image',
            customButtons: [
              {
                name: 'customOptionKey',
                title: 'Choose Photo from Custom Option'
              },
            ],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
         };
         Picker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            // if (response.didCancel) {
            //   console.log('User cancelled image picker');
            // } else if (response.error) {
            //   console.log('ImagePicker Error: ', response.error);
            // } else if (response.customButton) {
            //   console.log(
            //     'User tapped custom button: ',
            //     response.customButton
            //   );
            //   alert(response.customButton);
            // } 
            setImg(response.uri)
            // else {
            //   setFilePath(response);
            // }
         });
    };

    return (
        <>
            {/* <Text>hgdhsg</Text> */}
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => takePicture()} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>

                    
                </View>
                    <Image source={{ uri: img }} style={{ height: 400, width: 400, resizeMode: 'contain' }} />

        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 32,
        fontWeight: '600',
        color: "red",
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

})

export default ImagePicker
