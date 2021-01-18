import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,Image,
    TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';





function ImageCrop({ navigation }) {

    const [img, setImg] = useState('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png')

    const openCamera = () => {
        ImagePicker.openPicker({
            // width: 300,
            // height: 400,
            // cropping: true,
            mediaType: 'any',
            
        }).then(image => {
            console.log(image);
            setImg(image.path);
        });
    }
    
    const openCrop = () => {
        ImagePicker.openCropper({
            path: img,
            width: 200,
            height: 200,
            cropperToolbarTitle: 'Edit Photo',
            // freeStyleCropEnabled: true,
            hideBottomControls : true
        }).then(image => {
            console.log(image);
            setImg(image.path);
        });
    }

    return (
        <View style={styles.view}>
            <Image source={{ uri: img }} style={{ height: 400, width: 400, resizeMode: 'contain' }} />

            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 15, backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical: 5 }} onPress={openCamera}>
                <Text style={{ color: 'white' }}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 15, backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical: 5 }} onPress={openCrop}>
                <Text style={{ color: 'white' }}>Crop Image</Text>
            </TouchableOpacity>
        </View>
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
    },
    btn: {
        marginTop: 15,
        paddingHorizontal: 80
    }
})


export default ImageCrop
